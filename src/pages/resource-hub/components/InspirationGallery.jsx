import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const InspirationGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage?.index;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === images?.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? images?.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage({ ...images?.[newIndex], index: newIndex });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-headline font-semibold text-text-primary">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images?.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(image, index)}
          >
            <Image
              src={image?.src}
              alt={image?.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-brand-normal"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-brand-normal flex items-center justify-center">
              <Icon
                name="ZoomIn"
                size={24}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-brand-normal"
              />
            </div>
            {image?.tag && (
              <div className="absolute bottom-2 left-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-text-primary">
                  {image?.tag}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
            
            <Image
              src={selectedImage?.src}
              alt={selectedImage?.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {selectedImage?.caption && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-sm bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                  {selectedImage?.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InspirationGallery;