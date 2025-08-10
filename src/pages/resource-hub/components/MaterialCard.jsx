import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const MaterialCard = ({ material }) => {
  const getSustainabilityIcon = (rating) => {
    if (rating >= 4) return 'Leaf';
    if (rating >= 3) return 'Recycle';
    return 'AlertCircle';
  };

  const getSustainabilityColor = (rating) => {
    if (rating >= 4) return 'text-green-600';
    if (rating >= 3) return 'text-blue-600';
    return 'text-orange-600';
  };

  return (
    <div className="group bg-card rounded-lg shadow-brand-subtle hover:shadow-brand-moderate transition-all duration-brand-normal overflow-hidden">
      <div className="aspect-brand-portfolio overflow-hidden relative">
        <Image
          src={material?.image}
          alt={material?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-brand-slow"
        />
        <div className="absolute top-4 left-4">
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm ${getSustainabilityColor(material?.sustainability)}`}>
            <Icon name={getSustainabilityIcon(material?.sustainability)} size={14} />
            <span className="text-xs font-medium">Eco {material?.sustainability}/5</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
            {material?.category}
          </span>
          <span className="text-sm font-medium text-text-primary">{material?.priceRange}</span>
        </div>
        <h3 className="text-lg font-headline font-semibold mb-2 text-text-primary group-hover:text-accent transition-colors">
          {material?.name}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {material?.description}
        </p>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Durability</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={12}
                  className={i < material?.durability ? 'text-accent fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Maintenance</span>
            <span className="text-text-primary font-medium capitalize">{material?.maintenance}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-secondary">Supplier</span>
            <span className="text-sm font-medium text-accent">{material?.supplier}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;