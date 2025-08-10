import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Portfolio', path: '/portfolio-gallery', icon: 'Image' },
    { name: 'Projects', path: '/individual-project-experience', icon: 'Layers' },
    { name: 'Studio', path: '/studio-story', icon: 'Users' },
    { name: 'Resources', path: '/resource-hub', icon: 'BookOpen' }
  ];

  const secondaryItems = [
    { name: 'Admin', path: '/admin-dashboard', icon: 'Settings' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-header transition-all duration-brand-normal ${
        isScrolled 
          ? 'glass-morphism shadow-brand-moderate' 
          : 'bg-background/95'
      }`}
    >
      <div className="container-brand">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 hover:opacity-80 transition-brand-fast"
            onClick={closeMobileMenu}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-accent to-cta-primary rounded-lg flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-headline font-semibold text-text-primary">
                DesignVault Pro
              </h1>
              <p className="text-xs text-text-secondary font-body">
                Premium Interior Design
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-body font-medium transition-brand-fast ${
                  isActivePath(item?.path)
                    ? 'text-accent bg-accent/10' :'text-text-primary hover:text-accent hover:bg-accent/5'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-body font-medium text-text-primary hover:text-accent hover:bg-accent/5 transition-brand-fast">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-card shadow-brand-elevated rounded-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-brand-normal">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-body hover:bg-muted transition-brand-fast first:rounded-t-lg last:rounded-b-lg ${
                      isActivePath(item?.path)
                        ? 'text-accent bg-accent/10' :'text-text-primary'
                    }`}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-white"
            >
              View Portfolio
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-cta-primary text-cta-primary-foreground hover:bg-accent"
            >
              Start Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="lg:hidden p-2 rounded-md text-text-primary hover:text-accent hover:bg-accent/5 transition-brand-fast"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-brand-elevated border-t border-border">
            <nav className="py-4 space-y-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-6 py-3 text-base font-body font-medium transition-brand-fast ${
                    isActivePath(item?.path)
                      ? 'text-accent bg-accent/10 border-r-2 border-accent' :'text-text-primary hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-border mt-4 pt-4">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-6 py-3 text-base font-body font-medium transition-brand-fast ${
                      isActivePath(item?.path)
                        ? 'text-accent bg-accent/10 border-r-2 border-accent' :'text-text-primary hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    <Icon name={item?.icon} size={20} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-border mt-4 pt-4 px-6 space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                  onClick={closeMobileMenu}
                >
                  View Portfolio
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  className="bg-cta-primary text-cta-primary-foreground hover:bg-accent"
                  onClick={closeMobileMenu}
                >
                  Start Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;