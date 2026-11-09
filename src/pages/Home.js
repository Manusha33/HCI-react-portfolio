import React from 'react';

function Home() {
  return (
    <div className="page-content">
      <header className="hero">
        <div className="hero-content">
          <img src="/profileimage.jpg" alt="Manusha Ginige" className="profile-img" />
          <h1 className="name">Manusha Ginige</h1>
          <h2 className="role">Information Technology Student & Aspiring Software Engineer</h2>
          <p className="hero-description" style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'var(--text-light)', lineHeight: '1.6' }}>
            Welcome to my portfolio! I am a passionate IT student eager to learn and adapt to new technologies. Check out my projects and background to learn more about my journey.
          </p>
          <div className="social-links">
            <a href="https://github.com/Manusha33" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub Profile</a>
            <a href="www.linkedin.com/in/manusha-ginige-09a741303" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn Profile</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;