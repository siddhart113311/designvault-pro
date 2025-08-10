import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterSidebar from './components/FilterSidebar';
import SearchBar from './components/SearchBar';
import ViewToggle from './components/ViewToggle';
import SortDropdown from './components/SortDropdown';
import ProjectGrid from './components/ProjectGrid';
import FeaturedSection from './components/FeaturedSection';

const PortfolioGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('newest');
  const [viewType, setViewType] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [showFeatured, setShowFeatured] = useState(true);

  // Mock project data
  const mockProjects = [
    {
      id: 1,
      title: "Modern Luxury Penthouse",
      location: "Manhattan, NY",
      type: "residential",
      styles: ["modern", "luxury", "minimalist"],
      heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      squareFootage: 3500,
      completionYear: 2024,
      duration: "8 months",
      keyMaterial: "Marble & Steel",
      budgetRange: "over-500k",
      description: `A stunning penthouse transformation featuring floor-to-ceiling windows, custom millwork, and premium finishes throughout. The open-concept design maximizes natural light while creating distinct living zones.`,
      isRecent: true,
      isEditorsPick: true,
      isFavorite: false
    },
    {
      id: 2,
      title: "Contemporary Family Home",
      location: "Beverly Hills, CA",
      type: "residential",
      styles: ["contemporary", "family-friendly"],
      heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      squareFootage: 4200,
      completionYear: 2024,
      duration: "10 months",
      keyMaterial: "Natural Stone",
      budgetRange: "250k-500k",
      description: `A complete renovation of a 1960s ranch home, transforming it into a contemporary family sanctuary with seamless indoor-outdoor living and sustainable design elements.`,
      isRecent: true,
      isEditorsPick: false,
      isFavorite: false
    },
    {
      id: 3,
      title: "Industrial Loft Conversion",
      location: "Brooklyn, NY",
      type: "residential",
      styles: ["industrial", "loft", "urban"],
      heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      squareFootage: 2800,
      completionYear: 2023,
      duration: "6 months",
      keyMaterial: "Exposed Brick",
      budgetRange: "100k-250k",
      description: `Converting a former warehouse space into a modern loft while preserving original architectural elements like exposed brick walls and steel beams.`,
      isRecent: false,
      isEditorsPick: true,
      isFavorite: false
    },
    {
      id: 4,
      title: "Boutique Hotel Lobby",
      location: "Miami, FL",
      type: "commercial",
      styles: ["luxury", "hospitality", "tropical"],
      heroImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      squareFootage: 1500,
      completionYear: 2023,
      duration: "4 months",
      keyMaterial: "Terrazzo & Brass",
      budgetRange: "250k-500k",
      description: `A sophisticated hotel lobby design featuring custom terrazzo flooring, tropical plants, and brass accents that reflect Miami's vibrant culture.`,
      isRecent: false,
      isEditorsPick: true,
      isFavorite: false
    },
    {
      id: 5,
      title: "Zen Garden Retreat",
      location: "Malibu, CA",
      type: "landscape",
      styles: ["zen", "minimalist", "outdoor"],
      heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      squareFootage: 5000,
      completionYear: 2024,
      duration: "5 months",
      keyMaterial: "Natural Stone",
      budgetRange: "100k-250k",
      description: `A tranquil outdoor space designed for meditation and relaxation, featuring native plants, water features, and sustainable landscaping practices.`,
      isRecent: true,
      isEditorsPick: false,
      isFavorite: false
    },
    {
      id: 6,
      title: "Traditional Farmhouse Kitchen",
      location: "Napa Valley, CA",
      type: "residential",
      styles: ["traditional", "farmhouse", "rustic"],
      heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      squareFootage: 800,
      completionYear: 2023,
      duration: "3 months",
      keyMaterial: "Reclaimed Wood",
      budgetRange: "50k-100k",
      description: `A charming farmhouse kitchen renovation featuring reclaimed wood beams, vintage fixtures, and modern appliances seamlessly integrated with traditional design.`,
      isRecent: false,
      isEditorsPick: false,
      isFavorite: false
    },
    {
      id: 7,
      title: "Corporate Office Redesign",
      location: "San Francisco, CA",
      type: "commercial",
      styles: ["modern", "corporate", "tech"],
      heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      squareFootage: 12000,
      completionYear: 2024,
      duration: "12 months",
      keyMaterial: "Glass & Steel",
      budgetRange: "over-500k",
      description: `A complete transformation of a tech company's headquarters, creating collaborative spaces that foster innovation while maintaining professional elegance.`,
      isRecent: true,
      isEditorsPick: false,
      isFavorite: false
    },
    {
      id: 8,
      title: "Transitional Master Suite",
      location: "Austin, TX",
      type: "residential",
      styles: ["transitional", "luxury", "spa-like"],
      heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
      squareFootage: 1200,
      completionYear: 2023,
      duration: "4 months",
      keyMaterial: "Marble & Linen",
      budgetRange: "100k-250k",
      description: `A serene master suite renovation combining traditional comfort with contemporary luxury, featuring a spa-like bathroom and custom walk-in closet.`,
      isRecent: false,
      isEditorsPick: true,
      isFavorite: false
    }
  ];

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = mockProjects;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.location?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.styles?.some(style => style?.toLowerCase()?.includes(searchQuery?.toLowerCase())) ||
        project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Apply category filters
    Object.entries(filters)?.forEach(([category, values]) => {
      if (values && values?.length > 0) {
        filtered = filtered?.filter(project => {
          switch (category) {
            case 'type':
              return values?.includes(project?.type);
            case 'style':
              return project?.styles?.some(style => values?.includes(style));
            case 'budget':
              return values?.includes(project?.budgetRange);
            case 'timeline':
              return values?.includes(project?.completionYear?.toString()) || 
                     (values?.includes('older') && project?.completionYear < 2020);
            default:
              return true;
          }
        });
      }
    });

    // Apply sorting
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b?.completionYear - a?.completionYear;
        case 'oldest':
          return a?.completionYear - b?.completionYear;
        case 'alphabetical':
          return a?.title?.localeCompare(b?.title);
        case 'reverse-alphabetical':
          return b?.title?.localeCompare(a?.title);
        case 'budget-high':
          const budgetOrderHigh = ['over-500k', '250k-500k', '100k-250k', '50k-100k', 'under-50k'];
          return budgetOrderHigh?.indexOf(a?.budgetRange) - budgetOrderHigh?.indexOf(b?.budgetRange);
        case 'budget-low':
          const budgetOrderLow = ['under-50k', '50k-100k', '100k-250k', '250k-500k', 'over-500k'];
          return budgetOrderLow?.indexOf(a?.budgetRange) - budgetOrderLow?.indexOf(b?.budgetRange);
        case 'size-large':
          return b?.squareFootage - a?.squareFootage;
        case 'size-small':
          return a?.squareFootage - b?.squareFootage;
        default:
          return 0;
      }
    });

    return filtered;
  }, [mockProjects, searchQuery, filters, sortBy]);

  const recentProjects = mockProjects?.filter(project => project?.isRecent);
  const editorsPicks = mockProjects?.filter(project => project?.isEditorsPick);

  const handleFilterChange = (category, values) => {
    setFilters(prev => ({
      ...prev,
      [category]: values
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  const handleFavoriteToggle = (projectId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites?.has(projectId)) {
        newFavorites?.delete(projectId);
      } else {
        newFavorites?.add(projectId);
      }
      return newFavorites;
    });
  };

  // Update project favorite status
  const projectsWithFavorites = filteredAndSortedProjects?.map(project => ({
    ...project,
    isFavorite: favorites?.has(project?.id)
  }));

  const activeFiltersCount = Object.values(filters)?.flat()?.length + (searchQuery ? 1 : 0);

  return (
    <>
      <Helmet>
        <title>Portfolio Gallery - DesignVault Pro | Premium Interior Design Projects</title>
        <meta name="description" content="Explore our curated collection of premium interior design projects. Filter by style, type, and budget to find inspiration for your next design project." />
        <meta name="keywords" content="interior design portfolio, luxury home design, commercial design, residential projects, design gallery" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-secondary via-background to-surface py-16 lg:py-24">
            <div className="container-brand">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-body font-medium">
                  <Icon name="Sparkles" size={16} />
                  <span>Premium Design Portfolio</span>
                </div>
                
                <h1 className="text-brand-hero text-text-primary">
                  Discover Exceptional
                  <span className="text-accent block">Design Excellence</span>
                </h1>
                
                <p className="text-brand-body text-text-secondary max-w-2xl mx-auto">
                  Explore our curated collection of transformative interior and exterior design projects. 
                  From intimate residential spaces to grand commercial environments, each project tells a unique story of vision, craftsmanship, and innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-cta-primary text-cta-primary-foreground hover:bg-accent"
                    iconName="Search"
                    iconPosition="left"
                    iconSize={20}
                  >
                    Explore Projects
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                    iconName="Filter"
                    iconPosition="left"
                    iconSize={20}
                  >
                    Advanced Filters
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Sections */}
          {showFeatured && (
            <section className="section-brand border-b border-border">
              <div className="container-brand">
                <FeaturedSection 
                  recentProjects={recentProjects}
                  editorsPicks={editorsPicks}
                />
              </div>
            </section>
          )}

          {/* Main Gallery Section */}
          <section className="section-brand">
            <div className="container-brand">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Filter Sidebar */}
                <div className="lg:w-80 flex-shrink-0">
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                    isOpen={isFilterOpen}
                    onToggle={() => setIsFilterOpen(!isFilterOpen)}
                  />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  {/* Search and Controls */}
                  <div className="space-y-6 mb-8">
                    {/* Search Bar */}
                    <SearchBar
                      searchQuery={searchQuery}
                      onSearchChange={setSearchQuery}
                      suggestions={[
                        "kitchen renovation",
                        "modern living room",
                        "luxury bathroom",
                        "outdoor entertaining",
                        "master bedroom suite",
                        "home office design",
                        "dining room makeover",
                        "landscape design"
                      ]}
                    />

                    {/* Controls Bar */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => setIsFilterOpen(!isFilterOpen)}
                          className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-body font-medium text-text-primary hover:bg-muted transition-colors duration-brand-fast"
                        >
                          <Icon name="Filter" size={16} />
                          <span>Filters</span>
                          {activeFiltersCount > 0 && (
                            <span className="px-2 py-1 bg-accent text-white text-xs font-medium rounded-full">
                              {activeFiltersCount}
                            </span>
                          )}
                        </button>

                        <button
                          onClick={() => setShowFeatured(!showFeatured)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors duration-brand-fast ${
                            showFeatured 
                              ? 'bg-accent text-white' :'bg-card border border-border text-text-primary hover:bg-muted'
                          }`}
                        >
                          <Icon name={showFeatured ? "EyeOff" : "Eye"} size={16} />
                          <span>{showFeatured ? 'Hide' : 'Show'} Featured</span>
                        </button>
                      </div>

                      <div className="flex items-center space-x-4">
                        <ViewToggle
                          currentView={viewType}
                          onViewChange={setViewType}
                        />
                        <SortDropdown
                          currentSort={sortBy}
                          onSortChange={setSortBy}
                        />
                      </div>
                    </div>

                    {/* Results Summary */}
                    <div className="flex items-center justify-between text-sm text-text-secondary font-body">
                      <div className="flex items-center space-x-4">
                        <span>
                          {filteredAndSortedProjects?.length} project{filteredAndSortedProjects?.length !== 1 ? 's' : ''} found
                        </span>
                        {activeFiltersCount > 0 && (
                          <span className="flex items-center space-x-1">
                            <Icon name="Filter" size={14} />
                            <span>{activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} active</span>
                          </span>
                        )}
                      </div>
                      
                      {favorites?.size > 0 && (
                        <span className="flex items-center space-x-1 text-accent">
                          <Icon name="Heart" size={14} />
                          <span>{favorites?.size} favorite{favorites?.size !== 1 ? 's' : ''}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Grid */}
                  <ProjectGrid
                    projects={projectsWithFavorites}
                    viewType={viewType}
                    onFavoriteToggle={handleFavoriteToggle}
                  />

                  {/* Load More / Pagination */}
                  {filteredAndSortedProjects?.length > 0 && (
                    <div className="text-center mt-12">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-accent text-accent hover:bg-accent hover:text-white"
                        iconName="Plus"
                        iconPosition="left"
                        iconSize={20}
                      >
                        Load More Projects
                      </Button>
                      <p className="text-sm text-text-muted font-body mt-3">
                        Showing {filteredAndSortedProjects?.length} of {mockProjects?.length} total projects
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="section-brand bg-gradient-to-br from-accent/5 via-background to-cta-primary/5">
            <div className="container-brand">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-brand-heading text-text-primary">
                  Ready to Start Your Design Journey?
                </h2>
                <p className="text-brand-body text-text-secondary">
                  Let's transform your space into something extraordinary. Schedule a consultation 
                  to discuss your vision and explore how we can bring it to life.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-cta-primary text-cta-primary-foreground hover:bg-accent"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={20}
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                    iconName="MessageCircle"
                    iconPosition="left"
                    iconSize={20}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PortfolioGallery;