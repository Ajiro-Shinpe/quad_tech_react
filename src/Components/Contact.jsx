import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <div className="container my-5" data-scroll-section>
        <h2 className="text-center mb-4">Get In Touch</h2>
        <p className="intro-text">
          Have questions about our services or want to discuss a potential project? 
          We'd love to hear from you! Fill out the form below or reach out through 
          our social channels, and our team will get back to you within 24 hours.
        </p>
        
        <div className="row contact-content">
          <div className="col-md-6 contact-form">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                defaultValue="95d4b736-3695-4f2d-ae6c-9a9c0e66ea80"
              />
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="floatingName"
                  placeholder="Your Name"
                  required
                />
                <label htmlFor="floatingName">Your Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="Your Email"
                  required
                />
                <label htmlFor="floatingEmail">Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  id="floatingSubject"
                  placeholder="Subject"
                />
                <label htmlFor="floatingSubject">Subject</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  id="floatingMessage"
                  style={{ height: 150 }}
                  required
                />
                <label htmlFor="floatingMessage">Your Message</label>
              </div>
              <button className="submit-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="col-md-6 contact-info">
            <h4>Contact Information</h4>
            <div className="contact-details">
              <p>
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <span>Five Star Complex, Sardar Ali Sabri Rd, Block 2 Gulshan-e-Iqbal, Karachi, Pakistan</span>
              </p>
              <p>
                <i className="fas fa-phone-alt contact-icon"></i>
                <span>+92 335 0002183</span>
              </p>
              <p>
                <i className="fas fa-envelope contact-icon"></i>
                <span>quadtechdevelopers@gmail.com</span>
              </p>
            </div>
            
            <h4 className="mt-4">Follow Us</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/quad-tech-developers/" className="social-btn linkedin" target="_blank" rel="noopener noreferrer"> 
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/share/161Hit1PQP/" className="social-btn facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            
            <div className="business-hours mt-4">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 11:00 PM</p>
              <p>Saturday: 10:00 AM - 11:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}