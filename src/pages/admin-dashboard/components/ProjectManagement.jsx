import React, { useState, useEffect } from 'react';
import { portfolioService } from '../../../services/portfolioService';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    detailed_notes: '',
    category_id: '',
    tags: '',
    project_type: 'residential',
    location: '',
    completion_date: '',
    custom_colors: {
      primary: '#3B82F6',
      secondary: '#10B981',
      background: '#F9FAFB'
    },
    layout_style: 'modern',
    is_featured: false,
    display_order: 0
  });

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

      if (projectsResult?.error) {
        setError(projectsResult?.error?.message);
      } else {
        setProjects(projectsResult?.data || []);
      }

      if (!categoriesResult?.error) {
        setCategories(categoriesResult?.data || []);
      }
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setError(null);

    try {
      const projectData = {
        ...formData,
        tags: formData?.tags?.split(',')?.map(tag => tag?.trim())?.filter(Boolean)
      };

      let result;
      if (editingProject) {
        result = await portfolioService?.updateProject(editingProject?.id, projectData);
      } else {
        result = await portfolioService?.createProject(projectData);
      }

      if (result?.error) {
        setError(result?.error?.message);
        return;
      }

      setShowForm(false);
      setEditingProject(null);
      resetForm();
      loadData();
    } catch (err) {
      setError('Failed to save project');
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project?.title || '',
      description: project?.description || '',
      detailed_notes: project?.detailed_notes || '',
      category_id: project?.category_id || '',
      tags: project?.project_tags?.map(t => t?.tag_name)?.join(', ') || '',
      project_type: project?.project_type || 'residential',
      location: project?.location || '',
      completion_date: project?.completion_date || '',
      custom_colors: project?.custom_colors || {
        primary: '#3B82F6',
        secondary: '#10B981',
        background: '#F9FAFB'
      },
      layout_style: project?.layout_style || 'modern',
      is_featured: project?.is_featured || false,
      display_order: project?.display_order || 0
    });
    setShowForm(true);
  };

  const handleDelete = async (projectId) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      let result = await portfolioService?.deleteProject(projectId);
      if (result?.error) {
        setError(result?.error?.message);
        return;
      }
      loadData();
    } catch (err) {
      setError('Failed to delete project');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      detailed_notes: '',
      category_id: '',
      tags: '',
      project_type: 'residential',
      location: '',
      completion_date: '',
      custom_colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        background: '#F9FAFB'
      },
      layout_style: 'modern',
      is_featured: false,
      display_order: 0
    });
  };

  if (loading) {
    return <div className="flex justify-center items-center h-32 text-text-secondary font-body">Loading projects...</div>;
  }

  return (
    <div className="space-brand-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-brand-heading font-headline text-text-primary">Project Management</h2>
        <Button
          onClick={() => {
            setShowForm(true);
            setEditingProject(null);
            resetForm();
          }}
          className="flex items-center gap-2 bg-cta-primary text-cta-primary-foreground hover:bg-accent"
        >
          <Plus size={16} />
          Add Project
        </Button>
      </div>
      {error && (
        <div className="bg-error/10 border border-error/20 text-error px-4 py-3 rounded-lg relative">
          <span className="block sm:inline font-body">{error}</span>
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(error)}
            className="absolute top-0 bottom-0 right-0 px-4 py-3 hover:bg-error/20 rounded-r-lg"
            title="Copy error message"
          >
            📋
          </button>
        </div>
      )}
      {showForm && (
        <div className="bg-card p-6 rounded-lg shadow-brand-moderate">
          <h3 className="text-brand-subheading font-headline text-text-primary mb-4">
            {editingProject ? 'Edit Project' : 'Add New Project'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Project Title"
                value={formData?.title}
                onChange={(e) => setFormData({ ...formData, title: e?.target?.value })}
                required
              />
              
              <select
                value={formData?.category_id}
                onChange={(e) => setFormData({ ...formData, category_id: e?.target?.value })}
                className="px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-input text-text-primary font-body"
                required
              >
                <option value="">Select Category</option>
                {categories?.map(cat => (
                  <option key={cat?.id} value={cat?.id}>
                    {cat?.name}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              placeholder="Project Description"
              value={formData?.description}
              onChange={(e) => setFormData({ ...formData, description: e?.target?.value })}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-input text-text-primary font-body h-24"
              required
            />

            <textarea
              placeholder="Detailed Project Notes"
              value={formData?.detailed_notes}
              onChange={(e) => setFormData({ ...formData, detailed_notes: e?.target?.value })}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-input text-text-primary font-body h-32"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Location"
                value={formData?.location}
                onChange={(e) => setFormData({ ...formData, location: e?.target?.value })}
              />
              
              <Input
                type="date"
                placeholder="Completion Date"
                value={formData?.completion_date}
                onChange={(e) => setFormData({ ...formData, completion_date: e?.target?.value })}
              />
            </div>

            <Input
              type="text"
              placeholder="Tags (comma-separated)"
              value={formData?.tags}
              onChange={(e) => setFormData({ ...formData, tags: e?.target?.value })}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                value={formData?.project_type}
                onChange={(e) => setFormData({ ...formData, project_type: e?.target?.value })}
                className="px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-input text-text-primary font-body"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="landscape">Landscape</option>
              </select>

              <select
                value={formData?.layout_style}
                onChange={(e) => setFormData({ ...formData, layout_style: e?.target?.value })}
                className="px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-input text-text-primary font-body"
              >
                <option value="modern">Modern</option>
                <option value="classic">Classic</option>
                <option value="minimal">Minimal</option>
                <option value="elegant">Elegant</option>
              </select>

              <Input
                type="number"
                placeholder="Display Order"
                value={formData?.display_order}
                onChange={(e) => setFormData({ ...formData, display_order: parseInt(e?.target?.value) || 0 })}
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 font-body text-text-primary">
                <input
                  type="checkbox"
                  checked={formData?.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e?.target?.checked })}
                  className="rounded border-border focus:ring-accent"
                />
                Featured Project
              </label>
            </div>

            <div className="flex gap-3">
              <Button type="submit" className="bg-cta-primary text-cta-primary-foreground hover:bg-accent">
                {editingProject ? 'Update Project' : 'Create Project'}
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingProject(null);
                  resetForm();
                }}
                variant="outline"
                className="border-border text-text-secondary hover:bg-muted"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
      {/* Projects List */}
      <div className="bg-card rounded-lg shadow-brand-moderate">
        <div className="p-6">
          <h3 className="text-brand-subheading font-headline text-text-primary mb-4">Existing Projects</h3>
          
          {projects?.length === 0 ? (
            <p className="text-text-secondary text-center py-8 font-body">No projects yet. Add your first project to get started!</p>
          ) : (
            <div className="grid gap-4">
              {projects?.map(project => (
                <div key={project?.id} className="border border-border rounded-lg p-4 hover:shadow-brand-subtle transition-brand-fast">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-headline font-semibold text-lg text-text-primary">{project?.title}</h4>
                      <p className="text-text-secondary mt-1 font-body">{project?.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project?.project_tags?.map(tag => (
                          <span key={tag?.tag_name} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-body">
                            {tag?.tag_name}
                          </span>
                        ))}
                      </div>
                      <div className="mt-2 flex items-center gap-4 text-sm text-text-muted font-body">
                        <span className="capitalize">{project?.project_type}</span>
                        {project?.location && <span>{project?.location}</span>}
                        <span>{project?.project_images?.length || 0} images</span>
                        <span>{project?.project_materials?.length || 0} materials</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <Button
                        onClick={() => handleEdit(project)}
                        className="p-2 bg-accent hover:bg-accent/90 text-white"
                        title="Edit project"
                      >
                        <Edit2 size={16} />
                      </Button>
                      <Button
                        onClick={() => handleDelete(project?.id)}
                        className="p-2 bg-error hover:bg-error/90 text-white"
                        title="Delete project"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;