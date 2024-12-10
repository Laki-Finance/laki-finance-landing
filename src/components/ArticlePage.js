import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { id } = useParams();  // Get the article ID from the URL
  const [article, setArticle] = useState(null);

  // Mock data for articles, you can replace this with fetching from your backend later
  const articles = [
    { id: 1, title: 'Article 1', image: '/images/article1.jpg', story: 'Full story for Article 1...', source: 'https://example.com' },
    { id: 2, title: 'Article 2', image: '/images/article2.jpg', story: 'Full story for Article 2...', source: 'https://example.com' },
    { id: 3, title: 'Article 3', image: '/images/article3.jpg', story: 'Full story for Article 3...', source: 'https://example.com' },
  ];

  useEffect(() => {
    // Find the article by ID (this simulates fetching from a backend)
    const article = articles.find((article) => article.id === parseInt(id));
    setArticle(article);
  }, [id]);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.story}</p>
      <a href={article.source} target="_blank" rel="noopener noreferrer">Read more at source</a>
    </div>
  );
};

export default ArticlePage;
