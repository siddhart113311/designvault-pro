import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioService } from '../../services/portfolioService';
import { Search, Grid, List, Star } from 'lucide-react';

const PublicPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [projectsResult, categoriesResult] = await Promise.all([
        portfolioService?.getProjects(),
        portfolioService?.getCategories()
      ]);

      setProjects(projectsResult?.data || []);
      setCategories(categoriesResult?.data || []);
    } catch (error) {
      console.error('Failed to load portfolio data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects
    ?.filter(project => {
      if (searchTerm && !project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) && 
          !project?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
        return false;
      }
      if (selectedCategory && project?.category_id !== selectedCategory) {
        return false;
      }
      if (selectedType && project?.project_type !== selectedType) {
        return false;
      }
      return true;
    })
    ?.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b?.created_at) - new Date(a?.created_at);
        case 'featured':
          return (b?.is_featured ? 1 : 0) - (a?.is_featured ? 1 : 0);
        case 'alphabetical':
          return (a?.title || '')?.localeCompare(b?.title || '');
        default:
          return (a?.display_order || 0) - (b?.display_order || 0);
      }
    });

  const getPrimaryImage = (project) => {
    const primaryImage = project?.project_images?.find(img => img?.is_primary);
    return primaryImage ? primaryImage?.url : project?.project_images?.[0]?.url;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading portfolio...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Design Portfolio</h1>
            <p className="text-xl text-gray-600">Transforming spaces with innovative interior and exterior design</p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e?.target?.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-4 items-center flex-wrap">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e?.target?.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Categories</option>
                {categories?.map(category => (
                  <option key={category?.id} value={category?.id}>
                    {category?.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e?.target?.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Types</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="landscape">Landscape</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e?.target?.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="display_order">Default Order</option>
                <option value="recent">Most Recent</option>
                <option value="featured">Featured First</option>
                <option value="alphabetical">A-Z</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Grid/List */}
      <div className="container mx-auto px-4 py-8">
        {filteredProjects?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :'space-y-6'
          }>
            {filteredProjects?.map(project => (
              <div key={project?.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${viewMode === 'list' ? 'flex' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-80 flex-shrink-0' : 'h-64'}`}>
                  {getPrimaryImage(project) ? (
                    <img
                      src={getPrimaryImage(project)}
                      alt={project?.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-lg">No Image</span>
                    </div>
                  )}
                  
                  {project?.is_featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full flex items-center gap-1">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-medium">Featured</span>
                    </div>
                  )}
                  
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {project?.project_type}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project?.title}</h3>
                    <span className="text-sm text-gray-500 capitalize">
                      {categories?.find(c => c?.id === project?.category_id)?.name}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{project?.description}</p>
                  
                  {project?.location && (
                    <p className="text-sm text-gray-500 mb-3">📍 {project?.location}</p>
                  )}

                  {/* Tags */}
                  {project?.project_tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project?.project_tags?.slice(0, 3)?.map(tag => (
                        <span key={tag?.tag_name} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag?.tag_name}
                        </span>
                      ))}
                      {project?.project_tags?.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{project?.project_tags?.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {project?.project_images?.length || 0} images • {project?.project_materials?.length || 0} materials
                    </div>
                    
                    <Link
                      to={`/project/${project?.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicPortfolio;