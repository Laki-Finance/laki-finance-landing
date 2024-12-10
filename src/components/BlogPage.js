import React, { useState, useEffect } from 'react';
import './BlogPage.css';
import { Link } from 'react-router-dom';

// Local data simulating the backend response
const localData = [
  {
    id: 1,
    title: "High Interest Rates Drive Borrowers to SACCOs",
    image: "https://kenyanwallstreet.com/wp-content/uploads/2022/06/SACCOs-750x375.jpg",  // Larger image for hero section
    story: "mobile channels emerged as the most preferred usage mode at 70.6 percent . rural users showed a higher preference for traditional channels at 75.1 percent compared to 60.7 percent in urban areas . urban users showed higher adoption rates of digital payment options such as Paybill services . gender differences in mobile usage revealed males dominate at 56.8 percent, while urban users are more likely to cite voluntary withdrawal",
    source: "https://kenyanwallstreet.com/high-interest-rates-drives-borrowers-to-saccos/"
  },
  {
    id: 2,
    title: "CS Mbadi Turns the Heat on Banks on Borrowing Costs",
    image: "https://kenyanwallstreet.com/wp-content/uploads/2020/07/Kenya-Shillings-notes-750x375.jpg",  // Regular size image for the list
    story: "the government is worried about deteriorating financial health of many Kenyans . despite healthy reserves, stable shilling, low inflation, exports looking positive and an average economic growth projected this year, many still don’t have money to spend . government is also working on releasing monies owed to the private secto",
    source: "https://kenyanwallstreet.com/cs-mbadi-turns-heat-on-banks-on-borrowing-costs/"
  },
  {
    id: 3,
    title: "Understanding React",
    image: "https://via.placeholder.com/400x200",  // Regular size image for the list
    story: "React is a powerful JavaScript library for building user interfaces. Let's break down how it works and why it's so popular.",
    source: "https://external-link.com/full-article"
  },
  {
    id: 4,
    title: "The Future of Web Development",
    image: "https://via.placeholder.com/400x200",  // Regular size image for the list
    story: "Web development is evolving fast. Here's what the future of web development looks like in 2025.",
    source: "https://external-link.com/full-article"
  },
  {
    id: 5,
    title: "Top 10 JavaScript Frameworks",
    image: "https://via.placeholder.com/400x200",
    story: "A roundup of the top 10 JavaScript frameworks developers should watch out for.",
    source: "https://external-link.com/full-article"
  }
];

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load initial articles
  useEffect(() => {
    setArticles(localData.slice(0, 3)); // Show the first 3 articles initially
  }, []);

  // Scroll listener to check if user has scrolled to bottom
  useEffect(() => {
    const loadMoreArticles = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500) {
        // Check if not already loading
        if (!loading) {
          setLoading(true);
          setTimeout(() => {
            setArticles(prevArticles => [
              ...prevArticles,
              ...localData.slice(prevArticles.length, prevArticles.length + 3)
            ]);
            setLoading(false);
          }, 1000); // Simulate network delay
        }
      }
    };

    window.addEventListener('scroll', loadMoreArticles);
    return () => window.removeEventListener('scroll', loadMoreArticles);
  }, [articles, loading]);

  return (
    <section className="blog-section">
      <h1 className="blog-header">Our Blog</h1>
      
      {/* Hero Section for the First Article */}
      <div className="hero-article">
        <img src={articles[0]?.image} alt={articles[0]?.title} className="hero-image" />
        <div className="hero-content">
          <h2>{articles[0]?.title}</h2>
          <p>{articles[0]?.story}</p>
          <Link to={`/article/${articles[0]?.id}`} className="read-more">Read More</Link>
        </div>
      </div>

      {/* List of Articles */}
      <div className="blog-container">
        {articles.slice(1).map(article => (
          <div key={article.id} className="blog-card">
            <img src={article.image} alt={article.title} className="blog-image" />
            <div className="blog-content">
              <h2>{article.title}</h2>
              <p>{article.story}</p>
              <Link to={`/article/${article.id}`} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="loading-spinner">
          <span>Loading more articles...</span>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
