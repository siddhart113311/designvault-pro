import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const AwardsRecognition = () => {
  const awards = [
    {
      id: 1,
      title: "Best Residential Interior Design",
      organization: "American Society of Interior Designers",
      year: "2024",
      project: "Manhattan Penthouse Renovation",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      category: "Gold Award"
    },
    {
      id: 2,
      title: "Sustainable Design Excellence",
      organization: "Green Building Council",
      year: "2023",
      project: "Eco-Luxury Residence",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      category: "Platinum Recognition"
    },
    {
      id: 3,
      title: "Innovation in Space Planning",
      organization: "Interior Design Magazine",
      year: "2023",
      project: "Compact Urban Living Solution",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      category: "Editor\'s Choice"
    },
    {
      id: 4,
      title: "Luxury Design of the Year",
      organization: "Architectural Digest",
      year: "2022",
      project: "Hamptons Estate Redesign",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=300&h=200&fit=crop",
      category: "Featured Project"
    }
  ];

  const pressFeatures = [
    {
      publication: "Architectural Digest",
      title: "Rising Stars in Interior Design",
      date: "March 2024",
      quote: "Sarah Mitchell\'s approach to luxury design sets new standards for the industry.",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=50&fit=crop"
    },
    {
      publication: "Elle Decor",
      title: "Sustainable Luxury Homes",
      date: "January 2024",
      quote: "DesignVault Pro proves that eco-conscious design doesn't compromise on elegance.",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=50&fit=crop"
    },
    {
      publication: "House Beautiful",
      title: "The Future of Interior Design",
      date: "November 2023",
      quote: "Mitchell's team consistently delivers spaces that are both beautiful and livable.",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=50&fit=crop"
    }
  ];

  const certifications = [
    { name: "NCIDQ Certified", icon: "Award" },
    { name: "LEED AP Interior Design", icon: "Leaf" },
    { name: "ASID Professional Member", icon: "Users" },
    { name: "IIDA Member", icon: "Building" },
    { name: "Certified Aging-in-Place Specialist", icon: "Heart" },
    { name: "Kitchen & Bath Design Certified", icon: "Home" }
  ];

  return (
    <section className="section-brand bg-surface">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-brand-heading text-text-primary mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to design excellence has been recognized by leading industry organizations and publications.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {awards?.map((award) => (
            <div key={award?.id} className="bg-card rounded-xl overflow-hidden shadow-brand-subtle hover-lift">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={award?.image}
                  alt={`${award?.project} - ${award?.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
                    {award?.category}
                  </span>
                  <span className="text-sm text-text-secondary font-medium">
                    {award?.year}
                  </span>
                </div>
                
                <h3 className="font-headline font-semibold text-text-primary text-sm">
                  {award?.title}
                </h3>
                
                <p className="text-xs text-text-secondary">
                  {award?.organization}
                </p>
                
                <p className="text-xs text-accent font-medium">
                  {award?.project}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Press Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-headline font-semibold text-text-primary text-center mb-12">
            Featured In
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pressFeatures?.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-brand-subtle">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-6 bg-muted rounded overflow-hidden">
                    <Image
                      src={feature?.logo}
                      alt={`${feature?.publication} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-text-primary text-sm">
                      {feature?.publication}
                    </h4>
                    <p className="text-xs text-text-secondary">
                      {feature?.date}
                    </p>
                  </div>
                </div>
                
                <h5 className="font-body font-medium text-text-primary mb-3">
                  {feature?.title}
                </h5>
                
                <blockquote className="text-sm text-text-secondary italic">
                  "{feature?.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-subtle">
          <h3 className="text-2xl font-headline font-semibold text-text-primary text-center mb-8">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={cert?.icon} size={20} className="text-accent" />
                </div>
                <span className="font-body font-medium text-text-primary">
                  {cert?.name}
                </span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-brand-body text-text-secondary">
              Committed to continuous education and maintaining the highest professional standards in interior design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;