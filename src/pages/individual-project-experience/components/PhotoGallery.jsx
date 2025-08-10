import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PhotoGallery = ({ project }) => {
  const [selectedRoom, setSelectedRoom] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const rooms = ['all', ...new Set(project.gallery.map(image => image.room))];
  
  const filteredImages = selectedRoom === 'all' 
    ? project?.gallery 
    : project?.gallery?.filter(image => image?.room === selectedRoom);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages?.length;
    setLightboxImage(filteredImages?.[nextIndex]);
    setLightboxIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = lightboxIndex === 0 ? filteredImages?.length - 1 : lightboxIndex - 1;
    setLightboxImage(filteredImages?.[prevIndex]);
    setLightboxIndex(prevIndex);
  };

  return (
    <section className="section-brand bg-secondary">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-brand-heading text-text-primary mb-4">
            Complete Photo Gallery
          </h2>
          <p className="text-brand-body text-text-secondary max-w-2xl mx-auto">
            Explore every detail of this stunning transformation through our comprehensive 
            photo collection, organized by room and design element.
          </p>
        </div>

        {/* Room Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {rooms?.map((room) => (
            <button
              key={room}
              onClick={() => setSelectedRoom(room)}
              className={`px-6 py-3 rounded-full font-body font-medium capitalize transition-brand-fast ${
                selectedRoom === room
                  ? 'bg-accent text-white shadow-brand-moderate'
                  : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-accent border border-border'
              }`}
            >
              {room === 'all' ? 'All Rooms' : room}
            </button>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="flex justify-center items-center space-x-8 mb-12 text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="Image" size={16} />
            <span className="text-sm font-body">
              {filteredImages?.length} {filteredImages?.length === 1 ? 'Photo' : 'Photos'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Home" size={16} />
            <span className="text-sm font-body">
              {rooms?.length - 1} {rooms?.length - 1 === 1 ? 'Room' : 'Rooms'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="ZoomIn" size={16} />
            <span className="text-sm font-body">Click to enlarge</span>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages?.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative rounded-xl overflow-hidden shadow-brand-moderate hover-lift">
                <Image
                  src={image?.url}
                  alt={image?.alt}
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-brand-fast flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-brand-fast">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name="ZoomIn" size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-brand-fast">
                    <p className="text-white text-sm font-body font-medium mb-1">
                      {image?.room}
                    </p>
                    <p className="text-white/80 text-xs">
                      {image?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Camera" size={32} className="text-accent" />
            </div>
            <h3 className="text-lg font-headline font-semibold text-text-primary mb-2">
              Professional Photography
            </h3>
            <p className="text-brand-body text-text-secondary">
              High-resolution images captured by professional architectural photographers
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Layers" size={32} className="text-accent" />
            </div>
            <h3 className="text-lg font-headline font-semibold text-text-primary mb-2">
              Multiple Angles
            </h3>
            <p className="text-brand-body text-text-secondary">
              Every room captured from various perspectives to showcase the complete design
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Download" size={32} className="text-accent" />
            </div>
            <h3 className="text-lg font-headline font-semibold text-text-primary mb-2">
              High Resolution
            </h3>
            <p className="text-brand-body text-text-secondary">
              Full-size images available for detailed viewing and professional use
            </p>
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-brand-fast z-10"
            >
              <Icon name="X" size={24} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-brand-fast"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-brand-fast"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            {/* Image */}
            <div className="max-w-7xl max-h-[90vh] mx-4">
              <Image
                src={lightboxImage?.url}
                alt={lightboxImage?.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="text-white font-body font-medium mb-1">
                  {lightboxImage?.room}
                </p>
                <p className="text-white/80 text-sm">
                  {lightboxImage?.description}
                </p>
                <p className="text-white/60 text-xs mt-2">
                  {lightboxIndex + 1} of {filteredImages?.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;