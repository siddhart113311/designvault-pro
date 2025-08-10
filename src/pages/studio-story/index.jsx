import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import DesignPhilosophy from './components/DesignPhilosophy';
import TeamSection from './components/TeamSection';
import AwardsRecognition from './components/AwardsRecognition';
import CommunityImpact from './components/CommunityImpact';
import CallToAction from './components/CallToAction';

const StudioStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Studio Story - DesignVault Pro | Premium Interior Design</title>
        <meta 
          name="description" 
          content="Discover the story behind DesignVault Pro - our design philosophy, talented team, awards, and commitment to creating transformative spaces that enhance lives." 
        />
        <meta name="keywords" content="interior design studio, design philosophy, design team, awards, sustainable design, luxury interiors" />
        <meta property="og:title" content="Our Studio Story - DesignVault Pro" />
        <meta property="og:description" content="Meet the passionate team behind DesignVault Pro and learn about our award-winning approach to interior design." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://designvaultpro.com/studio-story" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 lg:pt-20">
          <HeroSection />
          <DesignPhilosophy />
          <TeamSection />
          <AwardsRecognition />
          <CommunityImpact />
          <CallToAction />
        </main>

        <footer className="bg-primary text-white py-12">
          <div className="container-brand">
            <div className="text-center">
              <p className="text-white/80">
                © {new Date()?.getFullYear()} DesignVault Pro. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default StudioStory;