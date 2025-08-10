import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) => {
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    style: true,
    budget: true,
    timeline: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev?.[section]
    }));
  };

  const handleFilterChange = (category, value, checked) => {
    const currentValues = filters?.[category] || [];
    const newValues = checked 
      ? [...currentValues, value]
      : currentValues?.filter(v => v !== value);
    
    onFilterChange(category, newValues);
  };

  const filterSections = [
    {
      key: 'type',
      title: 'Project Type',
      icon: 'Building',
      options: [
        { value: 'residential', label: 'Residential', count: 24 },
        { value: 'commercial', label: 'Commercial', count: 18 },
        { value: 'landscape', label: 'Landscape', count: 12 },
        { value: 'renovation', label: 'Renovation', count: 15 }
      ]
    },
    {
      key: 'style',
      title: 'Design Style',
      icon: 'Palette',
      options: [
        { value: 'modern', label: 'Modern', count: 20 },
        { value: 'traditional', label: 'Traditional', count: 16 },
        { value: 'transitional', label: 'Transitional', count: 14 },
        { value: 'contemporary', label: 'Contemporary', count: 12 },
        { value: 'minimalist', label: 'Minimalist', count: 8 },
        { value: 'industrial', label: 'Industrial', count: 6 }
      ]
    },
    {
      key: 'budget',
      title: 'Budget Range',
      icon: 'DollarSign',
      options: [
        { value: 'under-50k', label: 'Under $50K', count: 8 },
        { value: '50k-100k', label: '$50K - $100K', count: 15 },
        { value: '100k-250k', label: '$100K - $250K', count: 18 },
        { value: '250k-500k', label: '$250K - $500K', count: 12 },
        { value: 'over-500k', label: 'Over $500K', count: 9 }
      ]
    },
    {
      key: 'timeline',
      title: 'Completion Year',
      icon: 'Calendar',
      options: [
        { value: '2024', label: '2024', count: 8 },
        { value: '2023', label: '2023', count: 12 },
        { value: '2022', label: '2022', count: 15 },
        { value: '2021', label: '2021', count: 10 },
        { value: '2020', label: '2020', count: 8 },
        { value: 'older', label: 'Before 2020', count: 9 }
      ]
    }
  ];

  const activeFiltersCount = Object.values(filters)?.flat()?.length;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      {/* Sidebar */}
      <div className={`fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 bg-card border-r border-border z-50 lg:z-auto transform transition-transform duration-brand-normal lg:transform-none ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <Icon name="Filter" size={20} className="text-accent" />
              <h2 className="text-lg font-headline font-semibold text-text-primary">
                Filters
              </h2>
              {activeFiltersCount > 0 && (
                <span className="px-2 py-1 bg-accent text-white text-xs font-body font-medium rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            
            <button
              onClick={onToggle}
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors duration-brand-fast"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          
          {/* Filters Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClearFilters}
                  className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={16}
                >
                  Clear All Filters
                </Button>
              )}
              
              {/* Filter Sections */}
              {filterSections?.map((section) => (
                <div key={section?.key} className="space-y-3">
                  <button
                    onClick={() => toggleSection(section?.key)}
                    className="flex items-center justify-between w-full text-left group"
                  >
                    <div className="flex items-center space-x-2">
                      <Icon name={section?.icon} size={16} className="text-accent" />
                      <h3 className="font-body font-medium text-text-primary group-hover:text-accent transition-colors duration-brand-fast">
                        {section?.title}
                      </h3>
                    </div>
                    <Icon 
                      name="ChevronDown" 
                      size={16} 
                      className={`text-text-secondary transition-transform duration-brand-fast ${
                        expandedSections?.[section?.key] ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {expandedSections?.[section?.key] && (
                    <div className="space-y-2 pl-6">
                      {section?.options?.map((option) => (
                        <div key={option?.value} className="flex items-center justify-between">
                          <Checkbox
                            label={option?.label}
                            checked={(filters?.[section?.key] || [])?.includes(option?.value)}
                            onChange={(e) => handleFilterChange(section?.key, option?.value, e?.target?.checked)}
                            className="flex-1"
                          />
                          <span className="text-xs text-text-muted font-body ml-2">
                            {option?.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-6 border-t border-border">
            <div className="text-center">
              <p className="text-sm text-text-secondary font-body">
                Showing filtered results
              </p>
              <p className="text-xs text-text-muted font-body mt-1">
                Use filters to refine your search
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;