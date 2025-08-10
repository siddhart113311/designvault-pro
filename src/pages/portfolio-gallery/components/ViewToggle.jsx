import React from 'react';
import Icon from '../../../components/AppIcon';

const ViewToggle = ({ currentView, onViewChange }) => {
  const viewOptions = [
    { key: 'grid', icon: 'Grid3X3', label: 'Grid View' },
    { key: 'masonry', icon: 'LayoutGrid', label: 'Masonry View' },
    { key: 'list', icon: 'List', label: 'List View' }
  ];

  return (
    <div className="flex items-center bg-muted rounded-lg p-1">
      {viewOptions?.map((option) => (
        <button
          key={option?.key}
          onClick={() => onViewChange(option?.key)}
          className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-body font-medium transition-all duration-brand-fast ${
            currentView === option?.key
              ? 'bg-card text-accent shadow-brand-subtle'
              : 'text-text-secondary hover:text-text-primary hover:bg-card/50'
          }`}
          title={option?.label}
        >
          <Icon name={option?.icon} size={16} />
          <span className="hidden sm:inline">{option?.label?.split(' ')?.[0]}</span>
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;