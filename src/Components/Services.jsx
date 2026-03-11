import React from 'react';
import './Services.css';

export default function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      description: "Complete website and web application solutions from simple landing pages to complex corporate sites and interactive web applications.",
      features: [
        "Custom responsive website design",
        "Web application development",
        "User authentication systems",
        "Database integration",
        "API development",
        "Admin dashboard creation",
        "SEO-friendly structure",
        "Cross-browser compatibility"
      ],
      icon: "💻"
    },
    {
      id: 2,
      title: "WordPress Development",
      description: "Flexible and scalable WordPress solutions for content-driven websites.",
      features: [
        "Custom theme development",
        "Plugin  & customization",
        "WooCommerce store setup",
        "Headless CMS integrations",
        "Speed & performance optimization"
      ],
      icon: "🔧"
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: [
        "Native iOS app development",
        "Native Android app development",
        "Cross-platform development (React Native, Flutter)",
        "Mobile UI/UX design",
        "App store deployment",
        "Push notifications",
        "Offline functionality"
      ],
      icon: "📱"
    },
    {
      id: 4,
      title: "Desktop App Development",
      description: "Cross-platform desktop applications for Windows, macOS, and Linux operating systems.",
      features: [
        "Windows desktop applications",
        "macOS desktop applications",
        "Cross-platform desktop apps",
        "Tauri/Electron-based applications",
        "Native performance optimization",
        "System integration",
        "Offline-first architecture"
      ],
      icon: "🖥️"
    }
  ];
    
  return (
    <div className="services-container" data-scroll-section>
      <header className="services-header">
        <h1>Our Premium Services</h1>
        <p>
          At Quad Tech Developers, we specialize in transforming ideas into digital realities.
          Our expert team delivers innovative solutions that empower your business
          to thrive in the competitive digital landscape.
        </p>
        <hr />
      </header>
      <section className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}