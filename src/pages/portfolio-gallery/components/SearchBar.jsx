import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';


const SearchBar = ({ searchQuery, onSearchChange, suggestions = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const popularSearches = [
    "kitchen renovation",
    "modern living room",
    "outdoor entertaining",
    "master bedroom",
    "bathroom design",
    "home office",
    "dining room",
    "landscape design"
  ];

  const recentSearches = [
    "contemporary kitchen",
    "luxury bathroom",
    "outdoor patio"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef?.current && !inputRef?.current?.contains(event?.target) &&
          suggestionsRef?.current && !suggestionsRef?.current?.contains(event?.target)) {
        setShowSuggestions(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    onSearchChange(value);
    setShowSuggestions(value?.length > 0 || isExpanded);
    setSelectedSuggestion(-1);
  };

  const handleInputFocus = () => {
    setIsExpanded(true);
    setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    const allSuggestions = searchQuery?.length > 0 ? suggestions : [...recentSearches, ...popularSearches];
    
    if (e?.key === 'ArrowDown') {
      e?.preventDefault();
      setSelectedSuggestion(prev => 
        prev < allSuggestions?.length - 1 ? prev + 1 : prev
      );
    } else if (e?.key === 'ArrowUp') {
      e?.preventDefault();
      setSelectedSuggestion(prev => prev > 0 ? prev - 1 : -1);
    } else if (e?.key === 'Enter') {
      e?.preventDefault();
      if (selectedSuggestion >= 0) {
        onSearchChange(allSuggestions?.[selectedSuggestion]);
      }
      setShowSuggestions(false);
      setIsExpanded(false);
      inputRef?.current?.blur();
    } else if (e?.key === 'Escape') {
      setShowSuggestions(false);
      setIsExpanded(false);
      inputRef?.current?.blur();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    setShowSuggestions(false);
    setIsExpanded(false);
    inputRef?.current?.blur();
  };

  const handleClearSearch = () => {
    onSearchChange('');
    inputRef?.current?.focus();
  };

  const filteredSuggestions = searchQuery?.length > 0 
    ? suggestions?.filter(s => s?.toLowerCase()?.includes(searchQuery?.toLowerCase()))
    : [];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div ref={inputRef} className="relative">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onKeyDown={handleKeyDown}
            placeholder="Search projects... (e.g., kitchen renovation, modern living room)"
            className={`w-full pl-12 pr-12 py-4 bg-card border border-border rounded-xl text-text-primary placeholder-text-muted font-body transition-all duration-brand-normal focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent ${
              isExpanded ? 'rounded-b-none border-b-0' : ''
            }`}
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors duration-brand-fast"
            >
              <Icon name="X" size={16} className="text-text-secondary" />
            </button>
          )}
        </div>
      </div>
      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 bg-card border border-border border-t-0 rounded-b-xl shadow-brand-elevated z-50 max-h-96 overflow-y-auto"
        >
          {searchQuery?.length > 0 ? (
            // Search Results
            (<div className="p-2">
              {filteredSuggestions?.length > 0 ? (
                <>
                  <div className="px-3 py-2 text-xs font-body font-medium text-text-secondary uppercase tracking-wide">
                    Suggestions
                  </div>
                  {filteredSuggestions?.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={`w-full text-left px-3 py-2 rounded-md font-body transition-colors duration-brand-fast flex items-center space-x-3 ${
                        selectedSuggestion === index 
                          ? 'bg-accent text-white' :'text-text-primary hover:bg-muted'
                      }`}
                    >
                      <Icon name="Search" size={16} />
                      <span>{suggestion}</span>
                    </button>
                  ))}
                </>
              ) : (
                <div className="px-3 py-8 text-center text-text-secondary font-body">
                  <Icon name="Search" size={24} className="mx-auto mb-2 opacity-50" />
                  <p>No suggestions found</p>
                  <p className="text-sm text-text-muted mt-1">Try different keywords</p>
                </div>
              )}
            </div>)
          ) : (
            // Default Suggestions
            (<div className="p-2">
              {recentSearches?.length > 0 && (
                <>
                  <div className="px-3 py-2 text-xs font-body font-medium text-text-secondary uppercase tracking-wide flex items-center space-x-2">
                    <Icon name="Clock" size={12} />
                    <span>Recent Searches</span>
                  </div>
                  {recentSearches?.map((search, index) => (
                    <button
                      key={`recent-${index}`}
                      onClick={() => handleSuggestionClick(search)}
                      className={`w-full text-left px-3 py-2 rounded-md font-body transition-colors duration-brand-fast flex items-center space-x-3 ${
                        selectedSuggestion === index 
                          ? 'bg-accent text-white' :'text-text-primary hover:bg-muted'
                      }`}
                    >
                      <Icon name="Clock" size={16} />
                      <span>{search}</span>
                    </button>
                  ))}
                  <div className="border-t border-border my-2" />
                </>
              )}
              <div className="px-3 py-2 text-xs font-body font-medium text-text-secondary uppercase tracking-wide flex items-center space-x-2">
                <Icon name="TrendingUp" size={12} />
                <span>Popular Searches</span>
              </div>
              {popularSearches?.map((search, index) => (
                <button
                  key={`popular-${index}`}
                  onClick={() => handleSuggestionClick(search)}
                  className={`w-full text-left px-3 py-2 rounded-md font-body transition-colors duration-brand-fast flex items-center space-x-3 ${
                    selectedSuggestion === (recentSearches?.length + index) 
                      ? 'bg-accent text-white' :'text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name="TrendingUp" size={16} />
                  <span>{search}</span>
                </button>
              ))}
            </div>)
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;