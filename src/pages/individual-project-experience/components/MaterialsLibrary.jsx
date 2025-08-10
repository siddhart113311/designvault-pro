import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const MaterialsLibrary = ({ project }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const categories = ['all', ...new Set(project.materials.map(material => material.category))];
  
  const filteredMaterials = activeCategory === 'all' 
    ? project?.materials 
    : project?.materials?.filter(material => material?.category === activeCategory);

  return (
    <section className="section-brand bg-secondary">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-brand-heading text-text-primary mb-4">
            Materials Library
          </h2>
          <p className="text-brand-body text-text-secondary max-w-2xl mx-auto">
            Explore the carefully curated selection of materials, finishes, and furnishings 
            that bring this design vision to life.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-body font-medium capitalize transition-brand-fast ${
                activeCategory === category
                  ? 'bg-accent text-white shadow-brand-moderate'
                  : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-accent border border-border'
              }`}
            >
              {category === 'all' ? 'All Materials' : category}
            </button>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredMaterials?.map((material, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-brand-moderate hover-lift cursor-pointer"
              onClick={() => setSelectedMaterial(material)}
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={material?.image}
                  alt={material?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-body font-medium rounded capitalize">
                    {material?.category}
                  </span>
                  {material?.sustainable && (
                    <Icon name="Leaf" size={16} className="text-green-600" />
                  )}
                </div>
                <h3 className="text-lg font-headline font-semibold text-text-primary mb-1">
                  {material?.name}
                </h3>
                <p className="text-sm text-text-secondary mb-2">
                  {material?.brand}
                </p>
                <p className="text-xs text-text-muted">
                  {material?.application}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Suppliers Section */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-moderate">
          <h3 className="text-2xl font-headline font-semibold text-text-primary text-center mb-8">
            Trusted Suppliers & Partners
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project?.suppliers?.map((supplier, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <Image
                    src={supplier?.logo}
                    alt={supplier?.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h4 className="text-lg font-headline font-semibold text-text-primary mb-2">
                  {supplier?.name}
                </h4>
                <p className="text-brand-body text-text-secondary mb-3">
                  {supplier?.specialty}
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-text-muted">
                  {supplier?.website && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Globe" size={14} />
                      <span>Website</span>
                    </div>
                  )}
                  {supplier?.showroom && (
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>Showroom</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Material Detail Modal */}
        {selectedMaterial && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedMaterial(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-brand-fast z-10"
                >
                  <Icon name="X" size={20} />
                </button>
                
                <div className="aspect-brand-hero overflow-hidden rounded-t-2xl">
                  <Image
                    src={selectedMaterial?.image}
                    alt={selectedMaterial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-body font-medium rounded capitalize">
                    {selectedMaterial?.category}
                  </span>
                  {selectedMaterial?.sustainable && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <Icon name="Leaf" size={16} />
                      <span className="text-sm font-body">Sustainable</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-headline font-semibold text-text-primary mb-2">
                  {selectedMaterial?.name}
                </h3>
                <p className="text-brand-body text-accent mb-4">
                  {selectedMaterial?.brand}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-headline font-semibold text-text-primary mb-2">
                      Application
                    </h4>
                    <p className="text-brand-body text-text-secondary">
                      {selectedMaterial?.application}
                    </p>
                  </div>
                  
                  {selectedMaterial?.specifications && (
                    <div>
                      <h4 className="text-lg font-headline font-semibold text-text-primary mb-2">
                        Specifications
                      </h4>
                      <ul className="space-y-1">
                        {selectedMaterial?.specifications?.map((spec, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="ArrowRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-brand-body text-text-secondary">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedMaterial?.supplier && (
                    <div>
                      <h4 className="text-lg font-headline font-semibold text-text-primary mb-2">
                        Supplier Information
                      </h4>
                      <div className="bg-muted rounded-lg p-4">
                        <p className="text-brand-body text-text-primary font-medium">
                          {selectedMaterial?.supplier?.name}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {selectedMaterial?.supplier?.contact}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MaterialsLibrary;