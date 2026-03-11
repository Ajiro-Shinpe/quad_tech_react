import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" data-scroll-section>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            {/* <h2>QuadTech</h2> */}
            <img src="./logo.png" className='img img-fluid' alt="Quad Tech Logo" />
            <p className="footer-description">
              Innovating the Future, One Solution at a Time
            </p>
          </div>
          <div className="footer-links">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} QuadTechDevelopers. All rights reserved.
            </p>
            <p className="footer-created">
              Created by <span>QuadTechDevelopers</span>
            </p>
          </div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/1EQwRhZZcG/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="social-link"
            >
              <i className="bi bi-facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/quad-tech-developers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
              className="social-link"
            >
              <i className="bi bi-linkedin" />
            </a>
            <a
              href="https://wa.me/923363272704"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="social-link"
            >
              <i className="bi bi-whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}