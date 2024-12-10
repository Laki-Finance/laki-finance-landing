import requests
from bs4 import BeautifulSoup
import sqlite3
from transformers import pipeline
import time

# Initialize the summarization model from Hugging Face
summarizer = pipeline("summarization")

# Database setup
def create_db():
    conn = sqlite3.connect('kenyanwallstreet.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS stories (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT,
                    image TEXT,
                    story TEXT,
                    source TEXT)''')
    conn.commit()
    conn.close()

# Function to insert story into the database
def insert_story(title, image, story, source):
    conn = sqlite3.connect('kenyanwallstreet.db')
    c = conn.cursor()
    c.execute('''INSERT INTO stories (title, image, story, source)
                 VALUES (?, ?, ?, ?)''', (title, image, story, source))
    conn.commit()
    conn.close()

def scrape_business_daily_africa():
    url = 'https://www.businessdailyafrica.com/bd/markets/capital-markets'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find all article blocks (adjust the class as per actual structure)
    articles = soup.find_all('div', class_='news-title')

    # List to store scraped data
    scraped_data = []

    for article in articles:
        title = article.find('a').text.strip()
        link = article.find('a')['href']
        article_page = requests.get(link)
        article_soup = BeautifulSoup(article_page.content, 'html.parser')

        # Extracting the story and image
        story = article_soup.find('div', class_='article-body').text.strip()  # Change class as needed
        image = article_soup.find('img')['src'] if article_soup.find('img') else None
        source = link

        # Summarize the story using transformers pipeline
        summarizer = pipeline("summarization")
        summary = summarizer(story, max_length=100, min_length=30, do_sample=False)[0]['summary_text']

        scraped_data.append({
            'title': title,
            'story': summary,
            'source': source,
            'image': image
        })
        print(f"Inserted article: {title} {image}, {summary}, {source}")

    return scraped_data

# Function to summarize the story
def summarize_story(story_text):
    # Summarize the story using transformers
    summary = summarizer(story_text, max_length=150, min_length=50, do_sample=False)
    print(summary)
    return summary[0]['summary_text']

# Function to scrape the articles
def scrape_kenyan_wall_street():
    url = "https://kenyanwallstreet.com/category/banking/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    scraped_data = []
    # Find all article links on the page
    articles = soup.find_all('article')
    print(f'found the following {len(articles)} artcles')
    for article in articles:
        title_tag = article.find('h2', class_='jeg_post_title')
        print(f'found the following {title_tag} title_tag')
        if title_tag:
            title = title_tag.get_text()
            link = title_tag.find('a')['href']

            # Fetch article page to get full story, image, and source
            article_page = requests.get(link)
            article_soup = BeautifulSoup(article_page.text, 'html.parser')

            # Extract story content (assuming the content is inside a <div class="entry-content"> tag)
            story_content = article_soup.find('div', class_='entry-content')
            if story_content:
                story = story_content.get_text(strip=True)
                # Summarize the story
                summary = summarize_story(story)

                # Extract the image (assuming it's in <img> tag with class 'wp-post-image')
                image_tag = article_soup.find('img', class_='wp-post-image')
                image_url = image_tag['src'] if image_tag else ''

                # Extract source URL (for example purposes, we use the article URL as the source)
                source = link

                # Insert the article into the database
                # insert_story(title, image_url, summary, source)
                print(f"Inserted article: {title} {image_url}, {summary}, {source}")

                scraped_data.append({
                    'title': title,
                    'story': summary,
                    'source': source,
                    'image': image_url
                })
                
            time.sleep(1)
    
    return scraped_data  # Be polite and avoid overloading the server

# Main function
def save_to_db(data, conn):
    cursor = conn.cursor()
    
    for entry in data:
        cursor.execute('''
        INSERT INTO stories (title, story, source, image)
        VALUES (?, ?, ?, ?)
        ''', (entry['title'], entry['story'], entry['source'], entry['image']))
    
    conn.commit()


# Main function
if __name__ == "__main__":
    # Create the database
    # conn = create_db()

    # Scrape data from both websites
    # kenyan_wall_street_data = scrape_kenyan_wall_street()
    business_daily_data = scrape_business_daily_africa()

    # Combine the data from both sources
    all_data = business_daily_data
    # all_data = kenyan_wall_street_data + business_daily_data

    # Save all the data into the database
    # save_to_db(all_data, conn)

    # Close the database connection
    # conn.close()

    print("Scraping completed and data saved to the database!")
