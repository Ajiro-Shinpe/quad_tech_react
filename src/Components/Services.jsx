import React from 'react';
import './Services.css';

export default function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      description: "Complete website solutions from simple landing pages to complex corporate sites.",
      features: [
        "Custom responsive website design",
        "Frontend development (HTML, CSS, JavaScript)",
        "Basic backend functionality",
        "SEO-friendly structure",
        "Cross-browser compatibility"
      ],
      icon: "💻"
    },
    {
      id: 2,
      title: "Web App Development",
      description: "Interactive web applications with advanced functionality and databases.",
      features: [
        "Custom web application development",
        "User authentication systems",
        "Database integration",
        "API development",
        "Admin dashboard creation"
      ],
      icon: "🌐"
    },
    {
      id: 3,
      title: "WordPress Development",
      description: "Flexible and scalable WordPress solutions for content-driven websites.",
      features: [
        "Custom theme development",
        "Plugin  & customization",
        "WooCommerce store setup",
        "Headless CMS integrations",
        "Speed & performance optimization"
      ],
      icon: "🖥️"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interface and experience design.",
      features: [
        "User journey mapping",
        "Wireframes & prototypes",
        "Interactive UI design",
        "Design systems & guidelines",
        "Accessibility standards (WCAG)"
      ],
      icon: "🎨"
    },
    {
      id: 5,
      title: "Graphic Design",
      description: "Creative visuals that build strong brand identity and attract attention.",
      features: [
        "Logo design & branding kits",
        "Business cards & letterheads",
        "Social media designs",
        "Packaging & box design",
        "Posters & flyers"
      ],
      icon: "✏️"
    },
    {
      id: 6,
      title: "SEO Services",
      description: "Comprehensive SEO strategies to drive traffic and improve rankings.",
      features: [
        "Keyword research & planning",
        "On-page & off-page SEO",
        "Technical site audits",
        "Content planning & optimization",
        "High-quality backlink building"
      ],
      icon: "🔍"
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