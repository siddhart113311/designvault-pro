import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProjectCategoriesGrid from './components/ProjectCategoriesGrid';
import DesignPhilosophySection from './components/DesignPhilosophySection';
import FeaturedInsightsSection from './components/FeaturedInsightsSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>DesignVault Pro - Premium Interior & Exterior Design Portfolio</title>
        <meta 
          name="description" 
          content="Transform your space with DesignVault Pro's award-winning interior and exterior design services. Explore our portfolio of residential, commercial, and landscape projects that enhance lives through thoughtful design." 
        />
        <meta name="keywords" content="interior design, exterior design, residential design, commercial design, landscape design, luxury design, New York designer" />
        <meta property="og:title" content="DesignVault Pro - Premium Interior & Exterior Design Portfolio" />
        <meta property="og:description" content="Transform your space with award-winning design services. Explore our portfolio of residential, commercial, and landscape projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://designvaultpro.com" />
        <link rel="canonical" href="https://designvaultpro.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16 lg:pt-20">
          {/* Hero Section */}
          <HeroSection />

          {/* Project Categories Grid */}
          <ProjectCategoriesGrid />

          {/* Design Philosophy Section */}
          <DesignPhilosophySection />

          {/* Featured Insights Section */}
          <FeaturedInsightsSection />

          {/* Testimonial Carousel */}
          <TestimonialCarousel />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;