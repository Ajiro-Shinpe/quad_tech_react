import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

// Content data
const rightPage2Content = [
  {
    title: 'Transform Your Online Presence with Custom Web Design',
    imgSrc: './assets/images/csustom-web-dev.webp',
    alt: 'Web Design'
  },
  {
    title: 'Enhance User Engagement with UI/UX Best Practices',
    imgSrc: './assets/images/uiux.jpg',
    alt: 'UI/UX Design'
  },
  {
    title: 'Boost Performance with Laravel & React Development',
    imgSrc: './assets/images/webapp.jpeg',
    alt: '.NET Development'
  },
  {
    title: 'Scalable & Secure Websites Built with WordPress',
    imgSrc: './assets/images/wordpress.jpeg',
    alt: 'WordPress Development'
  }
];

const page4SectionsContent = [
  {
    title: 'Professional Website Development',
    description: 'We create stunning, high-performance websites tailored to your brand identity and business goals. Our websites are built with modern technologies to ensure fast loading, mobile responsiveness, and SEO optimization.',
    imgSrc: './assets/images/project1.png',
    alt: 'Social Network',
    videoSrc: './assets/videos/project1.mp4'
  },
  {
    title: 'Custom Web Application Development',
    description: 'We build powerful web applications that solve complex business problems and streamline operations. Our web apps feature intuitive interfaces, robust functionality, and seamless integration with your existing systems.',
    imgSrc: './assets/images/project2.png',
    alt: 'Salon Management',
    videoSrc: './assets/videos/project2.mp4'
  }
];

const servicesData = [
  {
    title: 'Web Development',
    tags: ['Front-End Development', 'Back-End Development', 'Full-Stack Solutions', 'Web Applications'],
    items: [
      {
        title: 'Front-End Development',
        description: 'We build fast, responsive, and visually appealing interfaces using modern technologies like React, Vue, and Angular.'
      },
      {
        title: 'Back-End Development',
        description: 'Our back-end development services ensure robust, scalable, and secure server-side applications.'
      },
      {
        title: 'Full-Stack Solutions',
        description: 'Comprehensive full-stack development services including API integration, database management.'
      },
      {
        title: 'Web Applications',
        description: 'Custom web applications tailored to your business needs, from e-commerce platforms to SaaS solutions.'
      }
    ]
  },
  {
    title: 'UI/UX Design',
    tags: ['User Research', 'Interface Design', 'User Experience', 'Prototyping'],
    items: [
      {
        title: 'User Research',
        description: 'In-depth analysis of user behavior and needs to create intuitive digital experiences.'
      },
      {
        title: 'Interface Design',
        description: 'Creating visually stunning and functional interfaces that align with your brand identity.'
      },
      {
        title: 'User Experience',
        description: 'Crafting seamless user journeys that enhance engagement and conversion rates.'
      },
      {
        title: 'Prototyping',
        description: 'Interactive prototypes that validate design decisions and improve user feedback.'
      }
    ]
  },
  {
    title: 'Graphic Design',
    tags: ['Brand Identity', 'Print Design', 'Digital Graphics', 'Marketing Materials'],
    items: [
      {
        title: 'Brand Identity',
        description: 'Comprehensive branding solutions that establish a strong visual presence.'
      },
      {
        title: 'Print Design',
        description: 'High-quality print materials that effectively communicate your message.'
      },
      {
        title: 'Digital Graphics',
        description: 'Engaging digital assets optimized for various platforms and devices.'
      },
      {
        title: 'Marketing Materials',
        description: 'Strategic design solutions that drive marketing success and brand awareness.'
      }
    ]
  }
];

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const rightElemsRef = useRef([]);
  const videoRef = useRef(null);
  const page3CenterRef = useRef(null);
  const secRightRefs = useRef([]);
  const page1Ref = useRef(null);
  const [isLoading, setIsLoading] = useState(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    return !hasVisited;
  });

  // Context-safe GSAP animations
  const { contextSafe } = useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  // Loading animation with proper scope and error handling
  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Check if elements exist before animating
    if (page1Ref.current) {
      gsap.set(page1Ref.current, {
        opacity: 0,
        scale: 0.9,
        y: "10%"
      });

      tl.to(page1Ref.current, {
        opacity: 1,
        scale: 1,
        y: "0%",
        duration: 1.2,
        ease: "power3.out"
      });
    }

    // Use document.querySelector for nav to ensure proper targeting
    const navElement = document.querySelector("nav");
    if (navElement) {
      tl.to(navElement, { 
        opacity: 1, 
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.5");
    }

    // Animate page1 elements
    const page1Elements = {
      titles: document.querySelectorAll("#page1 h1"),
      paragraph: document.querySelector("#page1 p"),
      something: document.querySelector("#page1-something"),
      movingDiv: document.querySelector("#moving-div")
    };

    if (page1Elements.titles.length) {
      tl.to(page1Elements.titles, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.3");
    }

    if (page1Elements.paragraph) {
      tl.to(page1Elements.paragraph, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");
    }

    if (page1Elements.something) {
      tl.to(page1Elements.something, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");
    }

    if (page1Elements.movingDiv) {
      tl.to(page1Elements.movingDiv, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");
    }
  });

  // Page2 animations using React events
  const handleRightElemHover = contextSafe((elem, isEntering) => {
    const img = elem.querySelector('img');
    if (!img) return;

    gsap.to(img, {
      opacity: isEntering ? 1 : 0,
      scale: isEntering ? 1 : 0,
      duration: 0.3
    });
  });

  const handleRightElemMove = contextSafe((elem, e) => {
    const img = elem.querySelector('img');
    if (!img) return;

    const rect = elem.getBoundingClientRect();
    gsap.to(img, {
      x: e.clientX - rect.left - 35,
      y: e.clientY - rect.top - 115,
      duration: 0.1
    });
  });

  // Page3 video controls
  const toggleVideo = contextSafe(() => {
    if (!videoRef.current) return;
  
    if (isVideoPlaying) {
      videoRef.current.pause();
      gsap.to(videoRef.current, {
        scaleX: 0.7,
        scaleY: 0,
        opacity: 0,
        borderRadius: "30px",
        duration: 0.3,
        onComplete: () => {
          if (window.locomotiveScroll) window.locomotiveScroll.update();
        }
      });
    } else {
      videoRef.current.play();
      gsap.to(videoRef.current, {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        borderRadius: 0,
        duration: 0.3,
        onComplete: () => {
          if (window.locomotiveScroll) window.locomotiveScroll.update();
        }
      });
    }
    setIsVideoPlaying(!isVideoPlaying);
  });

  // Add this new function to handle details toggle
  const handleDetailsToggle = contextSafe(() => {
    setTimeout(() => {
      if (window.locomotiveScroll) window.locomotiveScroll.update();
    }, 100);
  });

  // Section right hover effects
  const handleSectionHover = contextSafe((elem, isEntering) => {
    const video = elem.querySelector('video');
    if (!video) return;

    video.style.opacity = isEntering ? 1 : 0;
    isEntering ? video.play() : video.load();
  });

  useEffect(() => {
    // Simulate loading completion (replace with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('hasVisited', 'true');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Loading screen animation
  useGSAP(() => {
    if (!isLoading) {
      const loadingScreen = document.querySelector('.loading-screen');
      if (loadingScreen) {
        gsap.to(loadingScreen, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            loadingScreen.style.display = 'none';
            if (window.locomotiveScroll) window.locomotiveScroll.update();
          }
        });
      }
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <Loader />
        </div>
      )}
      <div data-scroll-section style={{ display: isLoading ? 'none' : 'block' }}>
        <div id="page1" ref={page1Ref}>
          <video autoPlay muted loop id="bg-video">
            <source src="/assets/videos/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1>Best Solutions for</h1>
          <h1>DIGITAL SUCCESS</h1>
          <p>At Quad Tech Developers, we empower businesses worldwide with cutting-edge technology solutions, innovative digital strategies, and exceptional online experiences. As a full-service online agency, we drive growth, enhance brand visibility, and foster long-term digital success through tailored web development, design, and marketing services.</p>
          <div id="moving-div">
            <div id="blur-left"></div>
            <div className="move">
              <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/wf.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/rd.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="" />
                            <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="" />
                            <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="" />
            </div>
            <div className="move">
              <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/wf.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/rd.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="" />
                            <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="" />
                            <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
              <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="" />
            </div>
            <div id="blur-right"></div>
          </div>
        </div>
        <div id="page2">
          <div id="page2-left">
            <p>Technology Excellence<br />Delivered</p>
            <h5>
              Partner with our expert team to transform your digital presence through
              innovative solutions, strategic development, and results-driven
              implementation that drives real business growth.
            </h5>
          </div>
          <div id="page2-right">
            {rightPage2Content.map((item, i) => (
              <div
                key={i}
                className="right-elem"
                ref={el => rightElemsRef.current[i] = el}
                onMouseEnter={(e) => handleRightElemHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleRightElemHover(e.currentTarget, false)}
                onMouseMove={(e) => handleRightElemMove(e.currentTarget, e)}
              >
                <h2>{item.title}</h2>
                <img src={item.imgSrc} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
        <div id="page3">
          <video 
            src="./assets/videos/intro.mp4" 
            ref={videoRef} 
            onClick={toggleVideo} 
          />
          <div className="page3-center" ref={page3CenterRef} onClick={toggleVideo}>
            <div className="icon">
              <i className="ri-play-fill" />
            </div>
            <h5>Watch Quad Tech</h5>
          </div>
        </div>
        <div id="page4">
          {page4SectionsContent.map((section, i) => (
            <div key={i} className="section">
              <div className="sec-left">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
              <div
                className="sec-right"
                ref={el => secRightRefs.current[i] = el}
                onMouseEnter={(e) => handleSectionHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleSectionHover(e.currentTarget, false)}
              >
                <img src={section.imgSrc} alt={section.alt} />
                <video muted src={section.videoSrc} />
              </div>
            </div>
          ))}
        </div>
        <div id="page5" className="py-5">
          <div className="container-fluid px-4">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-center justify-content-start flex-column pt-3">
                <Link to="/contact" className="be-client-btn mb-4">Become a Client</Link>
                <p className="intro-text mb-4">
                  We guide organizations through their digital transformation journey,
                  providing comprehensive solutions and strategic expertise at every
                  step.
                </p>
              </div>
              <div className="col-lg-8">
                <div className="services-container">
                  {servicesData.map((service, index) => (
                    <div key={index} className="service-block mb-5">
                      <details open={index === 0} onToggle={handleDetailsToggle}>
                        <summary className="service-header">
                          <h1 className="mb-2">{service.title}</h1>
                          <div className="service-tags d-flex flex-wrap gap-1 mb-2">
                            {service.tags.map((tag, i) => (
                              <span key={i} className="tag">{tag}</span>
                            ))}
                          </div>
                        </summary>
                        <div className="service-grid">
                          {service.items.map((item, i) => (
                            <div key={i} className="service-item">
                              <div className="over" />
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                              <i className="ri-arrow-right-up-line" />
                            </div>
                          ))}
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Add loading screen styles to Home.css
const loadingStyles = `
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-content {
  text-align: center;
  color: #fff;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  margin: 20px auto;
  border: 3px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
`;

// Inject styles
const styleElement = document.createElement('style');
styleElement.innerHTML = loadingStyles;
document.head.appendChild(styleElement);