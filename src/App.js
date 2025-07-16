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
    if (!containerRef.current) {
      console.error("Container ref is not set");
      return;
    }

    console.log("Initializing Locomotive Scroll");
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.15,
      multiplier: 0.8,
      inertia: 0.9,
      touchMultiplier: 1.5,
      firefoxMultiplier: 35,
      scrollFromAnywhere: true,
      smoothMobile: true,
      smartphone: {
        smooth: true,
        breakpoint: 768,
        lerp: 0.2,
        inertia: 0.85,
      },
      tablet: {
        smooth: true,
        breakpoint: 1024,
        lerp: 0.18,
        inertia: 0.88,
      },
      getDirection: true,
      getSpeed: true,
      resetNativeScroll: true,
      reloadOnContextChange: true,
    });

    locoScrollRef.current = locoScroll;

    locoScroll.on("scroll", (args) => {
      console.log("Scroll position:", args.scroll.y, "Limit:", args.limit.y);
      ScrollTrigger.update();
    });

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
          height: window.innerHeight,
        };
      },
      pinType: containerRef.current.style.transform ? "transform" : "fixed",
    });

    const timeoutId = setTimeout(() => {
      locoScroll.update();
      ScrollTrigger.refresh();
      console.log("Locomotive Scroll updated");
    }, 500);

    const handleResize = () => {
      locoScroll.update();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (locoScrollRef.current) {
      console.log("Resetting scroll to top for route:", location.pathname);
      locoScrollRef.current.scrollTo(0, { immediate: true });
    }
  }, [location]);

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