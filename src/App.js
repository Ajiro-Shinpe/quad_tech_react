import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const locoScrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.1,
      multiplier: 1,
      inertia: 0.7,
      touchMultiplier: 2,
      firefoxMultiplier: 50,
      chromeMultiplier: 1,
      safariMultiplier: 1.2,
      edgeMultiplier: 1,
      scrollFromAnywhere: false,
      smoothMobile: true,
      getDirection: true,
      getSpeed: true,
      resetNativeScroll: true,
      reloadOnContextChange: true,
      smartphone: {
        smooth: true,
        breakpoint: 768,
        lerp: 0.15,
        inertia: 0.7
      },
      tablet: {
        smooth: true,
        breakpoint: 1024,
        lerp: 0.12,
        inertia: 0.7
      }
    });

    locoScrollRef.current = locoScroll;

    // Setup GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length 
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: containerRef.current.style.transform ? "transform" : "fixed"
    });

    // Update on resize
    const onResize = () => {
      locoScroll.update();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
        locoScrollRef.current = null;
      }
      window.removeEventListener('resize', onResize);
      ScrollTrigger.clearMatchMedia();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    if (locoScrollRef.current) {
      // Add small timeout to ensure DOM is ready
      setTimeout(() => {
        locoScrollRef.current.scrollTo(0, { 
          duration: 0,
          disableLerp: true,
          immediate: true
        });
        locoScrollRef.current.update();
      }, 50);
    }
  }, [location]);

  // Add resize handler for better cross-device support
  useEffect(() => {
    const handleResize = () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.update();
        ScrollTrigger.refresh();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    // Add GSAP animations here if needed
  });

  return (
    <div
      className="App"
      ref={containerRef}
      data-scroll-container
      data-scroll-direction="vertical"
      data-scroll-speed="1"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;