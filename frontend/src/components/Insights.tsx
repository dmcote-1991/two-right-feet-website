import { useState, useEffect } from 'react';
import '/src/styles.css';

interface Article {
  _id: string;
  title: string;
  author: string;
  category: string;
  content: string;
}

const Insights: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Fetch articles from the backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/articles');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data: Article[] = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  // Open and close modal
  const openModal = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  // Manage modal body class
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  return (
    <div className="insights">
      <h2>Insights</h2>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article._id}>
            <button onClick={() => openModal(article)} className="article-link">
              {article.title}
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && selectedArticle && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedArticle.title}</h2>
            <p>
              <em>
                by {selectedArticle.author} | {selectedArticle.category}
              </em>
            </p>
            {/* Render content as HTML */}
            <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
            <button onClick={closeModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Insights;
