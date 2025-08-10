import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      id: 1,
      title: "Modern Penthouse Renovation",
      status: "published",
      views: 1247,
      lastModified: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      category: "Residential",
      featured: true,
      images: 12
    },
    {
      id: 2,
      title: "Corporate Office Design",
      status: "draft",
      views: 0,
      lastModified: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      category: "Commercial",
      featured: false,
      images: 8
    },
    {
      id: 3,
      title: "Luxury Villa Interior",
      status: "published",
      views: 892,
      lastModified: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      category: "Residential",
      featured: true,
      images: 15
    },
    {
      id: 4,
      title: "Restaurant Redesign",
      status: "review",
      views: 0,
      lastModified: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      category: "Commercial",
      featured: false,
      images: 6
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "2025 Interior Design Trends: What\'s Coming Next",
      status: "published",
      views: 2341,
      lastModified: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      category: "Trends",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Sustainable Materials in Modern Design",
      status: "draft",
      views: 0,
      lastModified: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      category: "Sustainability",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Color Psychology in Interior Spaces",
      status: "scheduled",
      views: 0,
      lastModified: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      category: "Design Tips",
      readTime: "4 min read"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'review': return 'bg-orange-100 text-orange-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const tabs = [
    { id: 'projects', label: 'Projects', icon: 'Image', count: projects?.length },
    { id: 'blog', label: 'Blog Posts', icon: 'FileText', count: blogPosts?.length },
    { id: 'media', label: 'Media Library', icon: 'Folder', count: 156 },
    { id: 'seo', label: 'SEO Settings', icon: 'Search', count: null }
  ];

  return (
    <div className="bg-card rounded-lg shadow-brand-subtle border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-headline font-semibold text-text-primary">
            Content Management
          </h3>
          <div className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search content..."
              className="w-64"
            />
            <Button variant="default" size="sm">
              <Icon name="Plus" size={16} className="mr-2" />
              Create New
            </Button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex space-x-1 bg-muted rounded-lg p-1">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-body font-medium transition-brand-fast ${
                activeTab === tab?.id
                  ? 'bg-card text-text-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
              {tab?.count !== null && (
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab?.id ? 'bg-accent text-white' : 'bg-muted text-text-secondary'
                }`}>
                  {tab?.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        {activeTab === 'projects' && (
          <div className="space-y-4">
            {projects?.map((project) => (
              <div
                key={project?.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-brand-subtle transition-brand-normal"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <Icon name="Image" size={20} className="text-text-secondary" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-body font-medium text-text-primary">
                        {project?.title}
                      </h4>
                      {project?.featured && (
                        <Icon name="Star" size={16} className="text-yellow-500" />
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-body font-medium ${getStatusColor(project?.status)}`}>
                        {project?.status?.charAt(0)?.toUpperCase() + project?.status?.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center">
                        <Icon name="Tag" size={14} className="mr-1" />
                        {project?.category}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Image" size={14} className="mr-1" />
                        {project?.images} images
                      </span>
                      <span className="flex items-center">
                        <Icon name="Eye" size={14} className="mr-1" />
                        {project?.views} views
                      </span>
                      <span>Modified {formatDate(project?.lastModified)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Eye" size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="MoreHorizontal" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'blog' && (
          <div className="space-y-4">
            {blogPosts?.map((post) => (
              <div
                key={post?.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-brand-subtle transition-brand-normal"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <Icon name="FileText" size={20} className="text-text-secondary" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-body font-medium text-text-primary">
                        {post?.title}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-body font-medium ${getStatusColor(post?.status)}`}>
                        {post?.status?.charAt(0)?.toUpperCase() + post?.status?.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center">
                        <Icon name="Tag" size={14} className="mr-1" />
                        {post?.category}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {post?.readTime}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Eye" size={14} className="mr-1" />
                        {post?.views} views
                      </span>
                      <span>Modified {formatDate(post?.lastModified)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Eye" size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="MoreHorizontal" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'media' && (
          <div className="text-center py-12">
            <Icon name="Folder" size={48} className="text-text-secondary mx-auto mb-4" />
            <h4 className="font-headline font-medium text-text-primary mb-2">
              Media Library
            </h4>
            <p className="text-text-secondary mb-4">
              Manage your images, videos, and other media files
            </p>
            <Button variant="default">
              <Icon name="Upload" size={16} className="mr-2" />
              Upload Media
            </Button>
          </div>
        )}
        
        {activeTab === 'seo' && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
            <h4 className="font-headline font-medium text-text-primary mb-2">
              SEO Settings
            </h4>
            <p className="text-text-secondary mb-4">
              Optimize your content for search engines
            </p>
            <Button variant="default">
              <Icon name="Settings" size={16} className="mr-2" />
              Configure SEO
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManagement;