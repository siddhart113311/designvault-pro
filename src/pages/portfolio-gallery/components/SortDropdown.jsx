import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SortDropdown = ({ currentSort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { key: 'newest', label: 'Newest First', icon: 'Calendar' },
    { key: 'oldest', label: 'Oldest First', icon: 'CalendarDays' },
    { key: 'alphabetical', label: 'A to Z', icon: 'ArrowUpAZ' },
    { key: 'reverse-alphabetical', label: 'Z to A', icon: 'ArrowDownZA' },
    { key: 'budget-high', label: 'Budget: High to Low', icon: 'TrendingDown' },
    { key: 'budget-low', label: 'Budget: Low to High', icon: 'TrendingUp' },
    { key: 'size-large', label: 'Size: Large to Small', icon: 'ArrowDownWideNarrow' },
    { key: 'size-small', label: 'Size: Small to Large', icon: 'ArrowUpNarrowWide' }
  ];

  const currentSortOption = sortOptions?.find(option => option?.key === currentSort) || sortOptions?.[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (sortKey) => {
    onSortChange(sortKey);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-body font-medium text-text-primary hover:bg-muted transition-colors duration-brand-fast"
      >
        <Icon name={currentSortOption?.icon} size={16} />
        <span className="hidden sm:inline">Sort by:</span>
        <span className="font-semibold">{currentSortOption?.label}</span>
        <Icon 
          name="ChevronDown" 
          size={16} 
          className={`transition-transform duration-brand-fast ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-card border border-border rounded-lg shadow-brand-elevated z-50">
          <div className="py-2">
            <div className="px-3 py-2 text-xs font-body font-medium text-text-secondary uppercase tracking-wide border-b border-border">
              Sort Options
            </div>
            {sortOptions?.map((option) => (
              <button
                key={option?.key}
                onClick={() => handleSortSelect(option?.key)}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-body transition-colors duration-brand-fast ${
                  currentSort === option?.key
                    ? 'bg-accent text-white' :'text-text-primary hover:bg-muted'
                }`}
              >
                <Icon name={option?.icon} size={16} />
                <span>{option?.label}</span>
                {currentSort === option?.key && (
                  <Icon name="Check" size={16} className="ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;