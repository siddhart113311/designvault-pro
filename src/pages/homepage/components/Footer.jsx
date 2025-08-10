import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Residential Design", href: "/services/residential" },
        { name: "Commercial Spaces", href: "/services/commercial" },
        { name: "Landscape Design", href: "/services/landscape" },
        { name: "Consultation", href: "/services/consultation" }
      ]
    },
    {
      title: "Portfolio",
      links: [
        { name: "Recent Projects", href: "/portfolio-gallery" },
        { name: "Residential", href: "/portfolio-gallery?category=residential" },
        { name: "Commercial", href: "/portfolio-gallery?category=commercial" },
        { name: "Outdoor Spaces", href: "/portfolio-gallery?category=landscape" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Studio", href: "/studio-story" },
        { name: "Our Process", href: "/studio-story#process" },
        { name: "Team", href: "/studio-story#team" },
        { name: "Careers", href: "/careers" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Design Insights", href: "/resource-hub" },
        { name: "Material Library", href: "/resource-hub#materials" },
        { name: "Inspiration Gallery", href: "/resource-hub#inspiration" },
        { name: "Design Guides", href: "/resource-hub#guides" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", href: "https://instagram.com/designvaultpro" },
    { name: "Pinterest", icon: "ExternalLink", href: "https://pinterest.com/designvaultpro" },
    { name: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com/company/designvaultpro" },
    { name: "Facebook", icon: "Facebook", href: "https://facebook.com/designvaultpro" }
  ];

  const contactInfo = [
    {
      icon: "MapPin",
      title: "Studio Location",
      details: ["123 Design District", "New York, NY 10001"]
    },
    {
      icon: "Phone",
      title: "Phone",
      details: ["+1 (555) 123-4567"]
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["hello@designvaultpro.com"]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container-brand py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/homepage" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-cta-primary rounded-lg flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-headline font-semibold">
                  DesignVault Pro
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  Premium Interior Design
                </p>
              </div>
            </Link>

            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming spaces and enhancing lives through thoughtful design. 
              We create environments that tell your story and inspire your daily experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo?.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-0.5">
                    <Icon name={contact?.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-body font-semibold text-primary-foreground mb-1">
                      {contact?.title}
                    </h4>
                    {contact?.details?.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-primary-foreground/70">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-brand-fast"
                  aria-label={`Follow us on ${social?.name}`}
                >
                  <Icon name={social?.icon} size={20} className="text-primary-foreground hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {footerSections?.map((section) => (
                <div key={section?.title} className="space-y-4">
                  <h4 className="text-lg font-headline font-semibold text-primary-foreground">
                    {section?.title}
                  </h4>
                  <ul className="space-y-3">
                    {section?.links?.map((link) => (
                      <li key={link?.name}>
                        <Link
                          to={link?.href}
                          className="text-primary-foreground/70 hover:text-accent transition-colors duration-brand-fast text-sm"
                        >
                          {link?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-brand py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-headline font-semibold text-primary-foreground">
                Stay Inspired
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Get the latest design insights, project showcases, and exclusive content 
                delivered to your inbox monthly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button className="bg-accent text-white px-6 py-3 rounded-lg font-body font-medium hover:bg-accent/90 transition-colors duration-brand-fast whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-primary-foreground/50">
                No spam, unsubscribe at any time. Read our{' '}
                <Link to="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-brand py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/70">
              <p>© {currentYear} DesignVault Pro. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link to="/privacy" className="hover:text-accent transition-colors duration-brand-fast">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-accent transition-colors duration-brand-fast">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-accent transition-colors duration-brand-fast">
                  Cookie Policy
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-primary-foreground/70">
              <span>Designed & Built with</span>
              <Icon name="Heart" size={16} className="text-accent" />
              <span>in New York</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;