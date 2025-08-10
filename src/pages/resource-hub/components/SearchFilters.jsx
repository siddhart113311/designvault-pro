import React from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const SearchFilters = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  selectedType, 
  setSelectedType,
  onClearFilters 
}) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'design-insights', label: 'Design Insights' },
    { value: 'trends', label: 'Trends & Analysis' },
    { value: 'materials', label: 'Materials Library' },
    { value: 'room-guides', label: 'Room Guides' },
    { value: 'inspiration', label: 'Inspiration' }
  ];

  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'article', label: 'Articles' },
    { value: 'guide', label: 'Guides' },
    { value: 'gallery', label: 'Galleries' },
    { value: 'video', label: 'Videos' },
    { value: 'resource', label: 'Resources' }
  ];

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedType !== 'all';

  return (
    <div className="bg-card rounded-lg shadow-brand-subtle p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-headline font-semibold text-text-primary">
          Search & Filter
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-text-secondary hover:text-accent"
          >
            <Icon name="X" size={16} className="mr-1" />
            Clear All
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <Input
            type="search"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            className="w-full"
          />
        </div>
        
        <div className="md:col-span-1">
          <Select
            options={categoryOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
            placeholder="Select category"
          />
        </div>
        
        <div className="md:col-span-1">
          <Select
            options={typeOptions}
            value={selectedType}
            onChange={setSelectedType}
            placeholder="Select type"
          />
        </div>
      </div>
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {searchQuery && (
            <div className="flex items-center space-x-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
              <Icon name="Search" size={14} />
              <span>"{searchQuery}"</span>
              <button
                onClick={() => setSearchQuery('')}
                className="ml-1 hover:text-primary transition-colors"
              >
                <Icon name="X" size={12} />
              </button>
            </div>
          )}
          
          {selectedCategory !== 'all' && (
            <div className="flex items-center space-x-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
              <Icon name="Tag" size={14} />
              <span>{categoryOptions?.find(opt => opt?.value === selectedCategory)?.label}</span>
              <button
                onClick={() => setSelectedCategory('all')}
                className="ml-1 hover:text-primary transition-colors"
              >
                <Icon name="X" size={12} />
              </button>
            </div>
          )}
          
          {selectedType !== 'all' && (
            <div className="flex items-center space-x-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
              <Icon name="Filter" size={14} />
              <span>{typeOptions?.find(opt => opt?.value === selectedType)?.label}</span>
              <button
                onClick={() => setSelectedType('all')}
                className="ml-1 hover:text-primary transition-colors"
              >
                <Icon name="X" size={12} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilters;