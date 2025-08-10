import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import BlogCard from './components/BlogCard';
import TrendCard from './components/TrendCard';
import MaterialCard from './components/MaterialCard';
import InspirationGallery from './components/InspirationGallery';
import RoomGuideCard from './components/RoomGuideCard';
import NewsletterSignup from './components/NewsletterSignup';
import SearchFilters from './components/SearchFilters';

const ResourceHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [activeTab, setActiveTab] = useState('all');

  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Materials: The Future of Interior Design",
      excerpt: "Exploring eco-friendly alternatives that don't compromise on style or durability. From reclaimed wood to recycled metals, discover how sustainable choices are reshaping modern interiors.",
      content: `In today's design landscape, sustainability isn't just a trend—it's a responsibility. As designers, we have the power to create beautiful spaces while protecting our environment. This comprehensive guide explores the latest sustainable materials that are revolutionizing interior design.\n\nReclaimed wood offers character and history that new materials simply cannot match. Each piece tells a story, bringing warmth and authenticity to modern spaces. Beyond its aesthetic appeal, using reclaimed wood prevents deforestation and reduces waste.\n\nRecycled metals are another game-changer in sustainable design. From aluminum fixtures to steel furniture frames, these materials offer durability and style while reducing environmental impact. The patina and texture of recycled metals add unique character to any space.\n\nBamboo continues to gain popularity as a sustainable flooring and furniture option. Its rapid growth rate and natural antibacterial properties make it an ideal choice for eco-conscious designers. Modern bamboo products rival traditional hardwoods in both appearance and durability.`,
      category: "Sustainability",
      publishedAt: "2024-08-05",
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      slug: "sustainable-materials-future-interior-design"
    },
    {
      id: 2,
      title: "Color Psychology in Modern Living Spaces",
      excerpt: "Understanding how colors influence mood and behavior in residential design. Learn to create spaces that not only look beautiful but also enhance well-being and productivity.",
      content: `Color is one of the most powerful tools in a designer's arsenal. It can transform a space, influence emotions, and even affect productivity levels. Understanding color psychology is essential for creating environments that truly serve their inhabitants.\n\nWarm colors like reds, oranges, and yellows create energy and intimacy. They're perfect for social spaces like dining rooms and living areas where you want to encourage conversation and connection. However, these colors should be used thoughtfully—too much can feel overwhelming.\n\nCool colors such as blues, greens, and purples promote calm and focus. They're ideal for bedrooms, home offices, and meditation spaces. Blue, in particular, has been shown to lower blood pressure and reduce stress levels.\n\nNeutral colors provide a sophisticated backdrop that allows other design elements to shine. They create a sense of balance and can make spaces feel larger and more open. The key is layering different neutral tones to avoid monotony.`,
      category: "Design Theory",
      publishedAt: "2024-08-02",
      author: {
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      slug: "color-psychology-modern-living-spaces"
    },
    {
      id: 3,
      title: "Small Space Solutions: Maximizing Every Square Foot",
      excerpt: "Creative strategies for making small spaces feel larger and more functional. From multi-purpose furniture to clever storage solutions, discover how to optimize compact living.",
      content: `Small spaces present unique challenges, but they also offer opportunities for creative problem-solving. With thoughtful design, even the tiniest apartment can feel spacious and luxurious.\n\nVertical storage is your best friend in small spaces. Floor-to-ceiling shelving draws the eye upward, creating the illusion of height while maximizing storage capacity. Consider built-in solutions that blend seamlessly with your walls.\n\nMulti-functional furniture is essential for small space living. Ottoman storage benches, expandable dining tables, and murphy beds allow you to adapt your space to different needs throughout the day.\n\nLight colors and mirrors can dramatically impact how spacious a room feels. Light reflects off pale surfaces, bouncing around the room and creating an airy atmosphere. Strategic mirror placement can double the visual space and bring in more natural light.`,
      category: "Space Planning",
      publishedAt: "2024-07-28",
      author: {
        name: "Emma Thompson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      slug: "small-space-solutions-maximizing-square-foot"
    }
  ];

  // Mock data for trends
  const trends = [
    {
      id: 1,
      title: "Curved Furniture Renaissance",
      description: "Soft, organic shapes are replacing sharp angles in modern furniture design, creating more inviting and comfortable living spaces.",
      category: "Furniture",
      type: "rising",
      season: "Fall",
      popularity: 87,
      colorPalette: ["#E8D5C4", "#A0826D", "#6B4E3D"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Maximalist Wallpapers",
      description: "Bold, statement wallpapers are making a comeback, adding personality and drama to accent walls and powder rooms.",
      category: "Wall Treatments",
      type: "rising",
      season: "Winter",
      popularity: 73,
      colorPalette: ["#2C5F2D", "#97BC62", "#F4E4BC"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Terrazzo Comeback",
      description: "This classic material is being reimagined in contemporary colors and applications, from countertops to decorative objects.",
      category: "Materials",
      type: "stable",
      season: "Spring",
      popularity: 65,
      colorPalette: ["#F5F5DC", "#8B7355", "#D2B48C"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
    }
  ];

  // Mock data for materials
  const materials = [
    {
      id: 1,
      name: "Reclaimed Teak Flooring",
      description: "Sustainably sourced teak with rich patina and unique character marks. Perfect for creating warm, sophisticated interiors with environmental consciousness.",
      category: "Flooring",
      sustainability: 5,
      durability: 5,
      maintenance: "low",
      priceRange: "$15-25/sq ft",
      supplier: "EcoWood Solutions",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Carrara Marble Slabs",
      description: "Classic Italian marble with distinctive veining patterns. Timeless elegance for countertops, backsplashes, and statement walls.",
      category: "Stone",
      sustainability: 3,
      durability: 4,
      maintenance: "high",
      priceRange: "$60-80/sq ft",
      supplier: "Stone Heritage Co.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Recycled Glass Tiles",
      description: "Eco-friendly tiles made from post-consumer glass. Available in various colors and finishes for creative backsplash and accent applications.",
      category: "Tiles",
      sustainability: 4,
      durability: 4,
      maintenance: "low",
      priceRange: "$8-15/sq ft",
      supplier: "GreenTile Innovations",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
    }
  ];

  // Mock data for room guides
  const roomGuides = [
    {
      id: 1,
      title: "Kitchen Functionality Masterclass",
      description: "Transform your kitchen into a chef's paradise with smart layout planning, storage solutions, and workflow optimization techniques.",
      room: "Kitchen",
      icon: "ChefHat",
      difficulty: "Intermediate",
      readTime: 12,
      budgetRange: "$5K - $50K",
      tipCount: 15,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      slug: "kitchen-functionality-masterclass"
    },
    {
      id: 2,
      title: "Bedroom Sanctuary Creation",
      description: "Design a peaceful retreat that promotes rest and relaxation through color, lighting, and thoughtful furniture placement.",
      room: "Bedroom",
      icon: "Bed",
      difficulty: "Beginner",
      readTime: 8,
      budgetRange: "$1K - $10K",
      tipCount: 12,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      slug: "bedroom-sanctuary-creation"
    },
    {
      id: 3,
      title: "Home Office Productivity Hub",
      description: "Create an inspiring workspace that boosts productivity while maintaining style and comfort for long working hours.",
      room: "Office",
      icon: "Briefcase",
      difficulty: "Intermediate",
      readTime: 10,
      budgetRange: "$2K - $15K",
      tipCount: 18,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      slug: "home-office-productivity-hub"
    }
  ];

  // Mock data for inspiration galleries
  const inspirationGalleries = [
    {
      title: "Autumn Color Palettes",
      images: [
        {
          src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
          alt: "Warm autumn living room",
          tag: "Warm Tones",
          caption: "Rich burgundy and gold create a cozy autumn atmosphere"
        },
        {
          src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
          alt: "Rustic autumn bedroom",
          tag: "Rustic",
          caption: "Natural textures and earth tones for seasonal comfort"
        },
        {
          src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
          alt: "Modern autumn kitchen",
          tag: "Modern",
          caption: "Contemporary design with autumn-inspired accents"
        },
        {
          src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
          alt: "Autumn dining room",
          tag: "Dining",
          caption: "Elegant dining space with seasonal color story"
        }
      ]
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Resources', icon: 'Grid3X3' },
    { id: 'blog', label: 'Design Insights', icon: 'BookOpen' },
    { id: 'trends', label: 'Trends', icon: 'TrendingUp' },
    { id: 'materials', label: 'Materials', icon: 'Package' },
    { id: 'guides', label: 'Room Guides', icon: 'Home' },
    { id: 'inspiration', label: 'Inspiration', icon: 'Palette' }
  ];

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedType('all');
  };

  const filteredContent = () => {
    let content = [];
    
    if (activeTab === 'all' || activeTab === 'blog') {
      content = [...content, ...blogPosts?.map(post => ({ ...post, type: 'blog' }))];
    }
    if (activeTab === 'all' || activeTab === 'trends') {
      content = [...content, ...trends?.map(trend => ({ ...trend, type: 'trend' }))];
    }
    if (activeTab === 'all' || activeTab === 'materials') {
      content = [...content, ...materials?.map(material => ({ ...material, type: 'material' }))];
    }
    if (activeTab === 'all' || activeTab === 'guides') {
      content = [...content, ...roomGuides?.map(guide => ({ ...guide, type: 'guide' }))];
    }

    // Apply search filter
    if (searchQuery) {
      content = content?.filter(item => 
        item?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        item?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        item?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        item?.excerpt?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      content = content?.filter(item => 
        item?.category?.toLowerCase() === selectedCategory?.toLowerCase()
      );
    }

    return content;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary to-surface">
        <div className="container-brand">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-brand-hero text-text-primary mb-6">
              Design Resource Hub
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Explore our curated collection of design insights, trend analysis, material guides, and inspiration galleries. 
              Stay ahead of the curve with expert knowledge and practical advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-cta-primary text-cta-primary-foreground hover:bg-accent"
                iconName="BookOpen"
                iconPosition="left"
              >
                Browse All Resources
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white"
                iconName="Mail"
                iconPosition="left"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-brand">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-brand-fast ${
                  activeTab === tab?.id
                    ? 'bg-accent text-white shadow-brand-subtle'
                    : 'text-text-secondary hover:text-accent hover:bg-accent/5'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Search and Filters */}
      <section className="py-8">
        <div className="container-brand">
          <SearchFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            onClearFilters={handleClearFilters}
          />
        </div>
      </section>
      {/* Featured Content */}
      {activeTab === 'all' && (
        <section className="py-12">
          <div className="container-brand">
            <div className="text-center mb-12">
              <h2 className="text-brand-heading text-text-primary mb-4">
                Featured This Week
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Handpicked content from our latest design insights and trending topics
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <BlogCard post={blogPosts?.[0]} featured={true} />
              <div className="space-y-6">
                <BlogCard post={blogPosts?.[1]} />
                <BlogCard post={blogPosts?.[2]} />
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Main Content Grid */}
      <section className="py-12">
        <div className="container-brand">
          {activeTab === 'blog' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-brand-heading text-text-primary mb-4">
                  Design Insights Blog
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Expert perspectives on design trends, materials, and space optimization strategies
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts?.map((post) => (
                  <BlogCard key={post?.id} post={post} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'trends' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-brand-heading text-text-primary mb-4">
                  Trend Analysis
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Stay ahead with forward-looking perspectives on design evolution and lifestyle trends
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trends?.map((trend) => (
                  <TrendCard key={trend?.id} trend={trend} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'materials' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-brand-heading text-text-primary mb-4">
                  Materials Library
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Comprehensive guide to premium materials with sustainability ratings and supplier information
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {materials?.map((material) => (
                  <MaterialCard key={material?.id} material={material} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'guides' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-brand-heading text-text-primary mb-4">
                  Room-by-Room Guides
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Practical advice for optimizing every space in your home with professional insights
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {roomGuides?.map((guide) => (
                  <RoomGuideCard key={guide?.id} guide={guide} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'inspiration' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-brand-heading text-text-primary mb-4">
                  Inspiration Galleries
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Curated visual collections showcasing seasonal trends and style explorations
                </p>
              </div>
              <div className="space-y-16">
                {inspirationGalleries?.map((gallery, index) => (
                  <InspirationGallery
                    key={index}
                    images={gallery?.images}
                    title={gallery?.title}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'all' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-brand-heading text-text-primary mb-4">
                  All Resources
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Complete collection of design insights, trends, materials, and guides
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredContent()?.map((item, index) => {
                  if (item?.type === 'blog') {
                    return <BlogCard key={`blog-${item?.id}`} post={item} />;
                  } else if (item?.type === 'trend') {
                    return <TrendCard key={`trend-${item?.id}`} trend={item} />;
                  } else if (item?.type === 'material') {
                    return <MaterialCard key={`material-${item?.id}`} material={item} />;
                  } else if (item?.type === 'guide') {
                    return <RoomGuideCard key={`guide-${item?.id}`} guide={item} />;
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="py-16 bg-secondary">
        <div className="container-brand">
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>
      {/* Related Resources */}
      <section className="py-16">
        <div className="container-brand">
          <div className="text-center mb-12">
            <h2 className="text-brand-heading text-text-primary mb-4">
              Explore More
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Continue your design journey with our portfolio and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/portfolio-gallery"
              className="group bg-card rounded-lg shadow-brand-subtle hover:shadow-brand-moderate transition-all duration-brand-normal p-8 text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon name="Image" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                View Portfolio
              </h3>
              <p className="text-text-secondary">
                Explore our completed projects and design transformations
              </p>
            </Link>

            <Link
              to="/studio-story"
              className="group bg-card rounded-lg shadow-brand-subtle hover:shadow-brand-moderate transition-all duration-brand-normal p-8 text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon name="Users" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                Our Story
              </h3>
              <p className="text-text-secondary">
                Learn about our design philosophy and creative process
              </p>
            </Link>

            <Link
              to="/homepage"
              className="group bg-card rounded-lg shadow-brand-subtle hover:shadow-brand-moderate transition-all duration-brand-normal p-8 text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon name="MessageCircle" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                Start Consultation
              </h3>
              <p className="text-text-secondary">
                Ready to transform your space? Let's discuss your project
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container-brand">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-cta-primary rounded-lg flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-2xl font-headline font-semibold">DesignVault Pro</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Transforming spaces, enhancing lives through thoughtful design and expert craftsmanship.
            </p>
            <div className="flex items-center justify-center space-x-6 mb-6">
              <Link to="/portfolio-gallery" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Portfolio
              </Link>
              <Link to="/studio-story" className="text-primary-foreground/80 hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/resource-hub" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Resources
              </Link>
              <Link to="/homepage" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              © {new Date()?.getFullYear()} DesignVault Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResourceHub;