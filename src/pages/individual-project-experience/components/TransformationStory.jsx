import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TransformationStory = ({ project }) => {
  const [activeComparison, setActiveComparison] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  return (
    <section className="section-brand bg-background">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-brand-heading text-text-primary mb-4">
            Transformation Story
          </h2>
          <p className="text-brand-body text-text-secondary max-w-2xl mx-auto">
            Witness the remarkable transformation from initial state to stunning completion, 
            showcasing the power of thoughtful design and expert execution.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-muted p-1 rounded-lg">
              <button
                onClick={() => setShowBefore(true)}
                className={`px-6 py-2 rounded-md font-body font-medium transition-brand-fast ${
                  showBefore
                    ? 'bg-accent text-white shadow-brand-subtle'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setShowBefore(false)}
                className={`px-6 py-2 rounded-md font-body font-medium transition-brand-fast ${
                  !showBefore
                    ? 'bg-accent text-white shadow-brand-subtle'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                After
              </button>
            </div>
          </div>

          {/* Room Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {project?.transformation?.comparisons?.map((room, index) => (
              <button
                key={index}
                onClick={() => setActiveComparison(index)}
                className={`px-4 py-2 rounded-full font-body font-medium transition-brand-fast ${
                  activeComparison === index
                    ? 'bg-accent/10 text-accent border border-accent' :'bg-card text-text-secondary hover:bg-accent/5 hover:text-accent border border-border'
                }`}
              >
                {room?.room}
              </button>
            ))}
          </div>

          {/* Comparison Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-brand-hero shadow-brand-elevated">
            <Image
              src={showBefore 
                ? project?.transformation?.comparisons?.[activeComparison]?.before
                : project?.transformation?.comparisons?.[activeComparison]?.after
              }
              alt={`${project?.transformation?.comparisons?.[activeComparison]?.room} ${showBefore ? 'before' : 'after'}`}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Label */}
            <div className="absolute top-6 left-6">
              <span className={`px-4 py-2 rounded-full font-body font-medium text-white backdrop-blur-sm ${
                showBefore ? 'bg-red-500/80' : 'bg-green-500/80'
              }`}>
                {showBefore ? 'Before' : 'After'}
              </span>
            </div>

            {/* Room Label */}
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-full font-body font-medium">
                {project?.transformation?.comparisons?.[activeComparison]?.room}
              </span>
            </div>
          </div>

          {/* Comparison Description */}
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-brand-body text-text-primary leading-relaxed">
              {project?.transformation?.comparisons?.[activeComparison]?.description}
            </p>
          </div>
        </div>

        {/* Construction Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-headline font-semibold text-text-primary text-center mb-12">
            Construction Highlights
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project?.transformation?.constructionHighlights?.map((highlight, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-brand-moderate hover-lift">
                <div className="aspect-brand-portfolio overflow-hidden">
                  <Image
                    src={highlight?.image}
                    alt={highlight?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name={highlight?.icon} size={20} className="text-accent" />
                    <h4 className="text-lg font-headline font-semibold text-text-primary">
                      {highlight?.title}
                    </h4>
                  </div>
                  <p className="text-brand-body text-text-secondary mb-4">
                    {highlight?.description}
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-text-muted">
                    <Icon name="Calendar" size={14} />
                    <span>{highlight?.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-accent/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-headline font-semibold text-text-primary text-center mb-8">
            Project Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project?.transformation?.achievements?.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={achievement?.icon} size={32} className="text-accent" />
                </div>
                <div className="text-3xl font-headline font-bold text-accent mb-2">
                  {achievement?.value}
                </div>
                <div className="text-brand-body text-text-primary font-medium mb-1">
                  {achievement?.label}
                </div>
                <div className="text-sm text-text-secondary">
                  {achievement?.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationStory;