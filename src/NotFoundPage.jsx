import React from 'react';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => (
  <div className={styles.container}>
    <img 
      src="https://undraw.co/api/illustrations/9f911a9b-6b4e-4b4b-8b0a-0b1b0b1b0b1b" 
      alt="Page not found" 
      className={styles.image}
      onError={(e) => {
        e.target.onerror = null; 
        e.target.src = "https://undraw.co/illustrations/not-found.svg";
      }}
    />
    <h1 className={styles.title}>404</h1>
    <p className={styles.message}>Oops! Page not found.</p>
    <a href="/" className={styles.button}>Go Back Home</a>
  </div>
);

export default NotFoundPage;