import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FeaturedInsightsSection = () => {
  const featuredInsights = [
    {
      id: 1,
      category: "Design Trends",
      title: "The Rise of Biophilic Design in Modern Homes",
      excerpt: "Discover how incorporating natural elements into interior spaces can improve well-being, productivity, and create more harmonious living environments.",
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&h=400&fit=crop",
      author: "Sarah Mitchell",
      publishDate: "December 15, 2024",
      readTime: "5 min read",
      tags: ["Sustainability", "Wellness", "Interior Design"]
    },
    {
      id: 2,
      category: "Material Innovation",
      title: "Sustainable Luxury: Eco-Friendly Materials That Don\'t Compromise Style",
      excerpt: "Explore the latest sustainable materials that are revolutionizing luxury design, from recycled metals to innovative bio-based textiles.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      author: "Michael Chen",
      publishDate: "December 10, 2024",
      readTime: "7 min read",
      tags: ["Sustainability", "Materials", "Innovation"]
    },
    {
      id: 3,
      category: "Color Psychology",
      title: "How Color Influences Mood and Productivity in Workspace Design",
      excerpt: "Understanding the psychological impact of color choices in commercial spaces and how to create environments that enhance performance and well-being.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
      author: "Emma Rodriguez",
      publishDate: "December 8, 2024",
      readTime: "6 min read",
      tags: ["Commercial Design", "Psychology", "Productivity"]
    }
  ];

  return (
    <section className="section-brand bg-surface">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="space-y-4 mb-8">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-body font-medium">
              Design Insights
            </span>
            <h2 className="text-brand-heading text-text-primary">
              Latest Thoughts on Design & Innovation
            </h2>
          </div>
          <p className="text-brand-body text-text-secondary leading-relaxed">
            Stay informed about the latest trends, materials, and innovations shaping the future of interior design. 
            Our insights help you make informed decisions for your next project.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredInsights?.map((article, index) => (
            <article
              key={article?.id}
              className={`group bg-card rounded-xl overflow-hidden shadow-brand-subtle hover:shadow-brand-elevated transition-all duration-brand-normal hover-lift ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-brand-hero' : 'aspect-brand-portfolio'}`}>
                <Image
                  src={article?.image}
                  alt={article?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-brand-slow"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-body font-medium">
                  {article?.category}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-brand-normal"></div>
              </div>

              {/* Content */}
              <div className={`p-6 space-y-4 ${index === 0 ? 'lg:p-8 lg:space-y-6' : ''}`}>
                {/* Meta Information */}
                <div className="flex items-center space-x-4 text-sm text-text-secondary font-body">
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={16} />
                    <span>{article?.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} />
                    <span>{article?.publishDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>{article?.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`font-headline font-semibold text-text-primary group-hover:text-accent transition-colors duration-brand-fast ${
                  index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  <Link to="/resource-hub" className="hover:underline">
                    {article?.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className={`text-text-secondary leading-relaxed ${
                  index === 0 ? 'text-brand-body lg:text-lg' : 'text-brand-body'
                }`}>
                  {article?.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article?.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-muted text-text-secondary text-xs font-body rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <div className="pt-2">
                  <Link
                    to="/resource-hub"
                    className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-body font-medium text-sm transition-colors duration-brand-fast group/link"
                  >
                    <span>Read Full Article</span>
                    <Icon 
                      name="ArrowRight" 
                      size={16} 
                      className="transition-transform duration-brand-fast group-hover/link:translate-x-1" 
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-card rounded-xl p-8 lg:p-12 shadow-brand-moderate">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-headline font-semibold text-text-primary">
                  Design Insights Newsletter
                </h3>
              </div>
              <p className="text-brand-body text-text-secondary leading-relaxed">
                Get the latest design trends, material innovations, and project insights delivered to your inbox monthly. 
                Join over 5,000 design enthusiasts and industry professionals.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button className="bg-accent text-white px-6 py-3 rounded-lg font-body font-medium hover:bg-accent/90 transition-colors duration-brand-fast whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              <p className="text-xs text-text-muted">
                No spam, unsubscribe at any time. Read our{' '}
                <Link to="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            to="/resource-hub"
            className="inline-flex items-center space-x-3 bg-cta-primary text-cta-primary-foreground px-8 py-4 rounded-lg font-body font-medium hover:bg-accent transition-colors duration-brand-fast hover-lift"
          >
            <span>Explore All Insights</span>
            <Icon name="BookOpen" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;