import React from 'react';
import './About.css';

export default function About() {
  const aboutSections = [
    {
      id: 1,
      title: "Success Stories Shaped by Our User Experience Design Agency",
      content: [
        {
          subtitle: "Who We Are",
          text: "At Quad Tech, we are a team of passionate developers, designers, and digital strategists dedicated to transforming ideas into innovative digital solutions. With expertise in web development, UI/UX design, WordPress development, website optimization, and graphic design, we help businesses establish a strong digital presence."
        },
        {
          subtitle: "Our Mission",
          text: "Our mission is to deliver high-quality, scalable, and user-centric digital solutions that drive results. We believe in leveraging the latest technologies and design trends to create visually appealing, fast, and secure digital experiences."
        }
      ]
    },
    {
      id: 2,
      title: "How We Work",
      content: [
        {
          subtitle: "Flexible & Global Services",
          text: "We operate as a team of dedicated freelancers and digital professionals, providing our services both locally and globally. Whether you are a startup, a small business, or a large enterprise, we tailor our solutions to meet your unique needs. Our team collaborates remotely and on-site when required, ensuring seamless communication and project execution."
        },
        {
          subtitle: "Adaptable Work Model",
          text: "Our flexible approach allows us to work on one-time projects, long-term collaborations, and dedicated support models. We ensure that our services align with your business objectives while maintaining transparency and efficiency at every step."
        }
      ]
    },
    {
      id: 3,
      title: "Why Trust Us?",
      content: [
        {
          subtitle: "Client Satisfaction & Milestone-Based Payments",
          text: "At Quad Tech, we value our clients' trust and satisfaction above all. We follow a structured milestone-based payment system, ensuring that you pay only for completed work that meets your expectations. This model offers financial security and peace of mind, allowing you to see tangible progress before making any commitments."
        },
        {
          subtitle: "Proven Track Record",
          text: "With a portfolio of successful projects and satisfied clients, we have built a reputation for delivering top-quality digital solutions. Our team is committed to maintaining high standards of work, timely delivery, and continuous support."
        }
      ]
    }
  ];

  const stats = [
    {
      id: 1,
      title: "Projects Completed",
      value: "200+",
      description: "Successful digital solutions delivered"
    },
    {
      id: 2,
      title: "Client Satisfaction",
      value: "98%",
      description: "Positive feedback from our clients"
    },
    {
      id: 3,
      title: "Years Experience",
      value: "5+",
      description: "In the digital solutions industry"
    }
  ];

  return (
    <div className="about-container" data-scroll-section>
      {/* Main About Sections */}
      {aboutSections.map((section) => (
        <section key={section.id} className="about-section" data-scroll>
          <div className="about-left">
            <h2 data-scroll data-scroll-speed="1">{section.title}</h2>
          </div>
          <div className="about-right">
            {section.content.map((item, index) => (
              <div key={index} className="content-block">
                <h6 className="subtitle" data-scroll data-scroll-speed="0.5">{item.subtitle}</h6>
                <p className="description" data-scroll data-scroll-speed="0.3">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
   </div>
  );
}