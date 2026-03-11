import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const portfolioProjects = [
  {
    id: 1,
        title: 'Company Management Portal',
    description: 'We built a centralized management ecosystem that streamlines daily operations by bridging the gap between team productivity and client relations. By consolidating task tracking, real-time employee performance analytics, and automated client management into a single interface, the platform eliminates fragmented workflows. It empowers leaders to make data-driven decisions through live dashboards while keeping teams engaged via an integrated AI chatbot for instant support.',
    images: [
      './assets/images/p6_11.png',
      './assets/images/p6_1.png',
      './assets/images/p6_2.png',
      './assets/images/p6_3.png',
      './assets/images/p6_4.png',
      './assets/images/p6_5.png',
      './assets/images/p6_6.png',
      './assets/images/p6_7.png',
      './assets/images/p6_8.png',
      './assets/images/p6_9.png',
      './assets/images/p6_10.png'
    ]
  },
  {
    id: 2,
    title: 'Vertex AI Chat',
    description: 'Vertex AI Chat is an advanced conversational assistant designed to provide users with instant, intelligent responses to a wide range of inquiries. By leveraging cutting-edge artificial intelligence, the app serves as a versatile tool for creative writing, professional communication, and complex problem-solving. Users can engage in natural, human-like dialogue to generate content, summarize lengthy documents, or receive step-by-step guidance on technical and educational topics. With its intuitive interface and rapid processing capabilities, Vertex AI Chat acts as a 24/7 digital companion, empowering users to boost their productivity and explore new ideas through the power of seamless AI interaction.',
    images: [
      './assets/images/p2_1.png',
      './assets/images/p2_2.png',
      './assets/images/p2_3.png'
    ]
  },
  {
    id: 3,
    title: 'Pride Real Estate',
    description: 'Pride Real Estate is a comprehensive digital marketplace designed to streamline the property search and investment process for buyers, sellers, and renters alike. By offering a vast database of verified residential and commercial listings—ranging from modern apartments and family homes to strategic plots and office spaces—the app serves as a reliable bridge between property seekers and trusted agents. Users can navigate market opportunities with ease thanks to advanced search filters, real-time map integrations, and high-quality visual galleries that provide a clear view of every listing. With a focus on transparency and direct communication, the platform empowers users to make informed decisions and secure their next property investment through a secure, intuitive, and efficient interface.',
    images: [
      './assets/images/p3_1.png',
      './assets/images/p3_2.png',
      './assets/images/p3_3.png',
      './assets/images/p3_4.png',
    ]
  },
  {
    id: 4,
    title: 'Vertex AI Diet Planner',
    description: 'Vertex AI Diet Planner is an intelligent health and nutrition companion designed to simplify the journey toward a balanced lifestyle. By leveraging advanced AI technology, the app provides personalized meal plans, calorie tracking, and nutritional insights tailored to individual fitness goals—whether the objective is weight loss, muscle gain, or maintaining overall wellness. Users can easily log their daily intake, discover diverse recipes, and receive automated suggestions that align with their specific dietary preferences and health targets. With an intuitive interface and data-driven guidance, Vertex AI Diet Planner transforms complex nutritional planning into a manageable, daily routine, empowering users to make informed food choices and achieve sustainable results.',
    images: [
      './assets/images/p4_1.png',
      './assets/images/p4_2.png',
      './assets/images/p4_3.png',
      './assets/images/p4_4.png',
    ]
  },
  {
    id: 5,
    title: 'Triploom - Travel Companion',
    description: 'Triploom is an all-in-one travel companion designed to streamline the entire journey from initial inspiration to final destination. By consolidating itinerary management, real-time updates, and local discovery into a single, intuitive interface, the app simplifies the complexities of modern travel for solo explorers and group travelers alike. Users can effortlessly map out daily activities, track travel expenses across multiple currencies, and access curated recommendations for dining and sightseeing tailored to their specific location. With features like offline access to essential plans and a secure digital vault for travel documents, Triploom ensures a seamless and organized experience, empowering users to focus on the adventure while the app handles the logistics.',
    images: [
      './assets/images/p5_1.png',
      './assets/images/p5_2.png',
      './assets/images/p5_3.png',
      './assets/images/p5_4.png',
    ]
  },
  {
    id: 6,
    title: 'VertexRide',
    description: 'VertexRide is a versatile urban mobility and logistics platform designed to streamline how users navigate their city and handle deliveries. By integrating ride-hailing services with on-demand courier solutions, the app offers a one-stop interface for booking diverse transport options—ranging from budget-friendly motorbikes to comfortable sedans. With a strong emphasis on transparency and safety, VertexRide provides real-time GPS tracking, upfront fare estimates, and verified driver profiles to ensure a reliable experience. Whether you are commuting to work, running errands, or sending a package across town, the app prioritizes efficiency and ease of use, making modern transportation accessible at the touch of a button.',
    images: [
      './assets/images/p1_1.png',
      './assets/images/p1_2.png',
      './assets/images/p1_3.png'
    ]
  }
];

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const projectsPerPage = 2;

  // Auto-slide functionality
  useEffect(() => {
    const intervals = {};
    
    portfolioProjects.forEach((project) => {
      intervals[project.id] = setInterval(() => {
        setCurrentSlide(prev => ({
          ...prev,
          [project.id]: (prev[project.id] || 0) + 1 >= project.images.length ? 0 : (prev[project.id] || 0) + 1
        }));
      }, 3000); // Change slide every 3 seconds
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(portfolioProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = portfolioProjects.slice(startIndex, endIndex);

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // Lazy image loading function with error handling
  const loadImage = (projectId, imageIndex, imageSrc) => {
    if (loadedImages[`${projectId}-${imageIndex}`]) {
      return loadedImages[`${projectId}-${imageIndex}`];
    }

    // Only load current and adjacent images for better performance
    const currentImageIndex = currentSlide[projectId] || 0;
    const shouldLoad = Math.abs(imageIndex - currentImageIndex) <= 1;
    
    if (shouldLoad) {
      // Create a new image object to preload
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [`${projectId}-${imageIndex}`]: imageSrc
        }));
      };
      img.onerror = () => {
        setImageErrors(prev => ({
          ...prev,
          [`${projectId}-${imageIndex}`]: true
        }));
      };
      img.src = imageSrc;
    }
    
    return null; // Return null to prevent loading
  };

  // Preload next image when slide changes
  useEffect(() => {
    portfolioProjects.forEach((project) => {
      const currentIndex = currentSlide[project.id] || 0;
      const nextIndex = (currentIndex + 1) % project.images.length;
      const prevIndex = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
      
      // Preload next and previous images
      setLoadedImages(prev => ({
        ...prev,
        [`${project.id}-${nextIndex}`]: project.images[nextIndex],
        [`${project.id}-${prevIndex}`]: project.images[prevIndex]
      }));
    });
  }, [currentSlide]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  const goToSlide = (projectId, index) => {
    setCurrentSlide(prev => ({
      ...prev,
      [projectId]: index
    }));
  };

  const nextSlide = (project) => {
    setCurrentSlide(prev => ({
      ...prev,
      [project.id]: (prev[project.id] || 0) + 1 >= project.images.length ? 0 : (prev[project.id] || 0) + 1
    }));
  };

  const prevSlide = (project) => {
    setCurrentSlide(prev => ({
      ...prev,
      [project.id]: (prev[project.id] || 0) - 1 < 0 ? project.images.length - 1 : (prev[project.id] || 0) - 1
    }));
  };

  return (
    <section className="portfolio-page" data-scroll-section itemScope itemType="https://schema.org/ItemList">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Explore our latest projects and success stories</p>
      </div>

      <div className="portfolio-container">
        {currentProjects.map((project, i) => (
          <article key={project.id} className="portfolio-section" itemScope itemType="https://schema.org/CreativeWork" itemProp="itemListElement">
            <div className="portfolio-right">
              <div className="carousel-container">
                {/* Navigation Arrows */}
                <button 
                  className="carousel-arrow prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide(project);
                  }}
                >
                  <i className="ri-arrow-left-s-line"></i>
                </button>

                {/* Image Slider */}
                <div className="carousel-slider">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-slide ${index === (currentSlide[project.id] || 0) ? 'active' : ''}`}
                    >
                      <img 
                        src={loadImage(project.id, index, image) || (imageErrors[`${project.id}-${index}`] ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMjIyIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo=' : image)} 
                        alt={`${project.title} - Slide ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        width="100%"
                        height="100%"
                        className={loadedImages[`${project.id}-${index}`] ? 'loaded' : 'loading'}
                        style={{
                          filter: loadedImages[`${project.id}-${index}`] ? 'none' : 'blur(5px)',
                          transition: 'filter 0.3s ease-out'
                        }}
                      />
                    </div>
                  ))}
                </div>

                <button 
                  className="carousel-arrow next"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide(project);
                  }}
                >
                  <i className="ri-arrow-right-s-line"></i>
                </button>

                {/* Dots Indicator */}
                <div className="carousel-dots">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === (currentSlide[project.id] || 0) ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(project.id, index);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="portfolio-left">
              <h3 itemProp="name">{project.title}</h3>
              <p itemProp="description">{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="portfolio-pagination">
        <button 
          className="pagination-btn prev-page"
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          <i className="ri-arrow-left-s-line"></i>
          Previous
        </button>

        <div className="page-numbers">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`page-number ${currentPage === index ? 'active' : ''}`}
              onClick={() => goToPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button 
          className="pagination-btn next-page"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
        >
          Next
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </section>
  );
}