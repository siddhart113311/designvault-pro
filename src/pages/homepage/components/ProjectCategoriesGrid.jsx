import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProjectCategoriesGrid = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Residential Sanctuaries",
      subtitle: "Intimate spaces that reflect personal style",
      description: "From cozy apartments to sprawling estates, we create homes that nurture and inspire daily living.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
      projectCount: 47,
      icon: "Home",
      features: ["Custom Furniture", "Lighting Design", "Space Planning", "Material Selection"],
      route: "/portfolio-gallery?category=residential"
    },
    {
      id: 2,
      title: "Commercial Environments",
      subtitle: "Professional spaces that drive success",
      description: "Offices, retail spaces, and hospitality venues designed to enhance productivity and brand identity.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      projectCount: 23,
      icon: "Building",
      features: ["Brand Integration", "Workflow Optimization", "Acoustic Design", "Technology Integration"],
      route: "/portfolio-gallery?category=commercial"
    },
    {
      id: 3,
      title: "Outdoor Escapes",
      subtitle: "Landscapes that extend living beyond walls",
      description: "Gardens, patios, and outdoor living spaces that create seamless indoor-outdoor experiences.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&h=400&fit=crop",
      projectCount: 31,
      icon: "Trees",
      features: ["Sustainable Design", "Native Plantings", "Water Features", "Outdoor Kitchens"],
      route: "/portfolio-gallery?category=landscape"
    }
  ];

  return (
    <section className="section-brand bg-secondary">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-heading text-text-primary mb-6">
            Explore Our Design Universe
          </h2>
          <p className="text-brand-body text-text-secondary leading-relaxed">
            Every space tells a story. Discover how we transform environments across residential, commercial, 
            and landscape design, creating experiences that enhance the way people live, work, and connect.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {categories?.map((category) => (
            <div
              key={category?.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-brand-subtle hover:shadow-brand-elevated transition-all duration-brand-slow hover-lift"
              onMouseEnter={() => setHoveredCategory(category?.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-brand-portfolio overflow-hidden">
                <Image
                  src={hoveredCategory === category?.id ? category?.hoverImage : category?.image}
                  alt={category?.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-brand-normal"></div>
                
                {/* Project Count Badge */}
                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-body font-medium">
                  {category?.projectCount} Projects
                </div>

                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-brand-normal transform translate-y-2 group-hover:translate-y-0">
                  <Icon name={category?.icon} size={24} className="text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-headline font-semibold text-text-primary group-hover:text-accent transition-colors duration-brand-fast">
                    {category?.title}
                  </h3>
                  <p className="text-brand-caption text-text-secondary">
                    {category?.subtitle}
                  </p>
                </div>

                <p className="text-brand-body text-text-primary leading-relaxed">
                  {category?.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-body font-semibold text-text-primary">
                    Key Specialties:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm text-text-secondary font-body">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link
                    to={category?.route}
                    className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-body font-medium text-sm transition-colors duration-brand-fast group/link"
                  >
                    <span>Explore {category?.title}</span>
                    <Icon 
                      name="ArrowRight" 
                      size={16} 
                      className="transition-transform duration-brand-fast group-hover/link:translate-x-1" 
                    />
                  </Link>
                </div>
              </div>

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-brand-normal pointer-events-none">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-headline font-semibold mb-1">
                        View Portfolio
                      </h4>
                      <p className="text-sm text-white/80">
                        {category?.projectCount} completed projects
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="ArrowRight" size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            to="/portfolio-gallery"
            className="inline-flex items-center space-x-3 bg-cta-primary text-cta-primary-foreground px-8 py-4 rounded-lg font-body font-medium hover:bg-accent transition-colors duration-brand-fast hover-lift"
          >
            <span>View Complete Portfolio</span>
            <Icon name="ExternalLink" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategoriesGrid;