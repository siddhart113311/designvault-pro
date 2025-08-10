import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioService } from '../../services/portfolioService';
import { ArrowLeft, Calendar, MapPin, Tag, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    loadProject();
  }, [id]);

  const loadProject = async () => {
    try {
      setLoading(true);
      const result = await portfolioService?.getProject(id);
      
      if (result?.error) {
        setError(result?.error?.message);
      } else {
        setProject(result?.data);
      }
    } catch (err) {
      setError('Failed to load project details');
    } finally {
      setLoading(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === (project?.project_images?.length - 1) ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? (project?.project_images?.length - 1) : prev - 1
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link to="/portfolio" className="text-blue-600 hover:text-blue-700">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Project not found</p>
          <Link to="/portfolio" className="text-blue-600 hover:text-blue-700">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/portfolio"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Project Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-gray-900">{project?.title}</h1>
                {project?.is_featured && (
                  <div className="bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                )}
              </div>
              
              <p className="text-xl text-gray-600 mb-6">{project?.description}</p>

              {/* Project Meta */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {project?.project_categories && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Tag size={20} />
                    <span>{project?.project_categories?.name}</span>
                  </div>
                )}
                
                {project?.location && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={20} />
                    <span>{project?.location}</span>
                  </div>
                )}
                
                {project?.completion_date && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={20} />
                    <span>{formatDate(project?.completion_date)}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {project?.project_tags?.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.project_tags?.map(tag => (
                      <span key={tag?.tag_name} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {tag?.tag_name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Project Stats */}
            <div className="lg:w-80">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="capitalize font-medium">{project?.project_type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Images:</span>
                    <span className="font-medium">{project?.project_images?.length || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Materials:</span>
                    <span className="font-medium">{project?.project_materials?.length || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Layout Style:</span>
                    <span className="capitalize font-medium">{project?.layout_style}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Gallery */}
      {project?.project_images?.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          
          {/* Main Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project?.project_images?.map((image, index) => (
              <div
                key={image?.id}
                className="relative group cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setShowImageModal(true);
                }}
              >
                <img
                  src={image?.url}
                  alt={image?.caption || project?.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white bg-black bg-opacity-50 px-3 py-1 rounded text-sm">
                      Click to view
                    </span>
                  </div>
                </div>
                {image?.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                    <p className="text-white text-sm">{image?.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Detailed Notes */}
      {project?.detailed_notes && (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Story</h2>
            <div className="prose max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {project?.detailed_notes}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Materials Used */}
      {project?.project_materials?.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Materials Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project?.project_materials?.map(material => (
              <div key={material?.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {material?.image_url && (
                  <img
                    src={material?.image_url}
                    alt={material?.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{material?.name}</h3>
                  {material?.description && (
                    <p className="text-gray-600">{material?.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Image Modal */}
      {showImageModal && project?.project_images?.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-screen-lg max-h-screen-lg">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              ✕
            </button>
            
            <img
              src={project?.project_images?.[currentImageIndex]?.url}
              alt={project?.project_images?.[currentImageIndex]?.caption || project?.title}
              className="max-w-full max-h-full object-contain"
            />
            
            {project?.project_images?.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <ChevronLeft size={48} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <ChevronRight size={48} />
                </button>
              </>
            )}
            
            {project?.project_images?.[currentImageIndex]?.caption && (
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="bg-black bg-opacity-50 px-4 py-2 rounded">
                  {project?.project_images?.[currentImageIndex]?.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;