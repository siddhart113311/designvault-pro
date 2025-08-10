import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RoomGuideCard = ({ guide }) => {
  return (
    <div className="group bg-card rounded-lg shadow-brand-subtle hover:shadow-brand-moderate transition-all duration-brand-normal overflow-hidden">
      <div className="aspect-brand-portfolio overflow-hidden relative">
        <Image
          src={guide?.image}
          alt={guide?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-brand-slow"
        />
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
            <Icon name={guide?.icon} size={16} className="text-accent" />
            <span className="text-sm font-medium text-text-primary">{guide?.room}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
            {guide?.difficulty}
          </span>
          <div className="flex items-center space-x-1 text-text-secondary">
            <Icon name="Clock" size={14} />
            <span className="text-sm">{guide?.readTime} min read</span>
          </div>
        </div>
        <h3 className="text-xl font-headline font-semibold mb-2 text-text-primary group-hover:text-accent transition-colors">
          {guide?.title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-2">
          {guide?.description}
        </p>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Budget Range</span>
            <span className="text-text-primary font-medium">{guide?.budgetRange}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Key Tips</span>
            <span className="text-accent font-medium">{guide?.tipCount} tips</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <Link
            to={`/guides/${guide?.slug}`}
            className="inline-flex items-center space-x-2 text-accent hover:text-primary transition-colors font-medium"
          >
            <span>Read Full Guide</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomGuideCard;