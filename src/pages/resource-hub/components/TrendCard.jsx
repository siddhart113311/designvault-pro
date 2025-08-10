import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TrendCard = ({ trend }) => {
  const getTrendIcon = (type) => {
    switch (type) {
      case 'rising': return 'TrendingUp';
      case 'stable': return 'Minus';
      case 'declining': return 'TrendingDown';
      default: return 'TrendingUp';
    }
  };

  const getTrendColor = (type) => {
    switch (type) {
      case 'rising': return 'text-green-600';
      case 'stable': return 'text-blue-600';
      case 'declining': return 'text-orange-600';
      default: return 'text-green-600';
    }
  };

  return (
    <div className="group bg-card rounded-lg shadow-brand-subtle hover:shadow-brand-moderate transition-all duration-brand-normal overflow-hidden">
      <div className="aspect-brand-square overflow-hidden relative">
        <Image
          src={trend?.image}
          alt={trend?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-brand-slow"
        />
        <div className="absolute top-4 right-4">
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm ${getTrendColor(trend?.type)}`}>
            <Icon name={getTrendIcon(trend?.type)} size={14} />
            <span className="text-xs font-medium capitalize">{trend?.type}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
            {trend?.category}
          </span>
          <span className="text-sm text-text-secondary">{trend?.season} 2024</span>
        </div>
        <h3 className="text-lg font-headline font-semibold mb-2 text-text-primary group-hover:text-accent transition-colors">
          {trend?.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {trend?.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: trend?.colorPalette?.[0] }} />
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: trend?.colorPalette?.[1] }} />
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: trend?.colorPalette?.[2] }} />
            <span className="text-xs text-text-secondary ml-2">Palette</span>
          </div>
          <div className="flex items-center space-x-1 text-accent">
            <span className="text-sm font-medium">{trend?.popularity}%</span>
            <Icon name="Heart" size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;