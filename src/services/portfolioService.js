import { supabase } from '../lib/supabase';

export const portfolioService = {
  // Projects CRUD
  async getProjects() {
    try {
      const { data, error } = await supabase?.from('projects')?.select(`
          *,
          project_categories(name, slug),
          project_images(id, url, caption, is_primary, display_order),
          project_materials(id, name, description, image_url),
          project_tags(tag_name)
        `)?.order('display_order', { ascending: true });
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async getProject(id) {
    try {
      const { data, error } = await supabase?.from('projects')?.select(`
          *,
          project_categories(name, slug),
          project_images(id, url, caption, is_primary, display_order),
          project_materials(id, name, description, image_url),
          project_tags(tag_name)
        `)?.eq('id', id)?.single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async createProject(projectData) {
    try {
      const { data, error } = await supabase?.from('projects')?.insert([projectData])?.select()?.single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async updateProject(id, updates) {
    try {
      const { data, error } = await supabase?.from('projects')?.update(updates)?.eq('id', id)?.select()?.single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async deleteProject(id) {
    try {
      const { error } = await supabase?.from('projects')?.delete()?.eq('id', id);
      
      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  },

  // Project Images
  async addProjectImage(imageData) {
    try {
      const { data, error } = await supabase?.from('project_images')?.insert([imageData])?.select()?.single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async deleteProjectImage(imageId) {
    try {
      const { error } = await supabase?.from('project_images')?.delete()?.eq('id', imageId);
      
      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  },

  // Project Materials
  async addProjectMaterial(materialData) {
    try {
      const { data, error } = await supabase?.from('project_materials')?.insert([materialData])?.select()?.single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  // Categories
  async getCategories() {
    try {
      const { data, error } = await supabase?.from('project_categories')?.select('*')?.order('name', { ascending: true });
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async createCategory(categoryData) {
    try {
      const { data, error } = await supabase?.from('project_categories')?.insert([categoryData])?.select()?.single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  // Contact form
  async submitContact(contactData) {
    try {
      const { data, error } = await supabase?.from('contact_inquiries')?.insert([contactData])?.select()?.single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  // File storage
  async uploadFile(bucket, filePath, file) {
    try {
      const { data, error } = await supabase?.storage?.from(bucket)?.upload(filePath, file, {
          upsert: false
        });
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async getFileUrl(bucket, filePath) {
    try {
      const { data } = supabase?.storage?.from(bucket)?.getPublicUrl(filePath);
      
      return { data: data?.publicUrl, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },

  async deleteFile(bucket, filePath) {
    try {
      const { data, error } = await supabase?.storage?.from(bucket)?.remove([filePath]);
      
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }
};