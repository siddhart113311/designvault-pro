import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CommunityImpact = () => {
  const communityProjects = [
    {
      id: 1,
      title: "Habitat for Humanity Design Partnership",
      description: "Providing pro-bono interior design services for affordable housing projects, helping families create beautiful, functional homes.",
      impact: "25 Families Served",
      year: "2020-2024",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop",
      category: "Housing Initiative"
    },
    {
      id: 2,
      title: "Senior Living Center Renovation",
      description: "Complete redesign of common areas at Sunset Manor, focusing on accessibility, comfort, and creating spaces that promote social connection.",
      impact: "150 Residents Benefited",
      year: "2023",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      category: "Senior Care"
    },
    {
      id: 3,
      title: "Children\'s Hospital Healing Spaces",
      description: "Designing calming, colorful environments in pediatric wards to reduce anxiety and promote healing for young patients and their families.",
      impact: "500+ Children Served",
      year: "2022-2023",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      category: "Healthcare"
    }
  ];

  const sustainabilityInitiatives = [
    {
      icon: "Recycle",
      title: "Material Reclamation Program",
      description: "Salvaging and repurposing materials from renovation projects to reduce waste and create unique design elements."
    },
    {
      icon: "TreePine",
      title: "Carbon Neutral Operations",
      description: "Offsetting our carbon footprint through partnerships with reforestation projects and sustainable material sourcing."
    },
    {
      icon: "Droplets",
      title: "Water Conservation Design",
      description: "Implementing water-saving fixtures and greywater systems in all applicable projects."
    },
    {
      icon: "Sun",
      title: "Renewable Energy Integration",
      description: "Incorporating solar panels and energy-efficient systems to reduce environmental impact."
    }
  ];

  const mentorshipProgram = {
    title: "Next Generation Designers",
    description: "Our mentorship program supports emerging interior designers through internships, workshops, and career guidance.",
    stats: [
      { number: "15", label: "Mentees Annually" },
      { number: "8", label: "Full-time Placements" },
      { number: "50+", label: "Workshop Attendees" }
    ]
  };

  return (
    <section className="section-brand bg-background">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-brand-heading text-text-primary mb-6">
            Community Impact
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We believe great design should benefit everyone. Through charitable work, sustainability initiatives, and mentorship programs, we're committed to making a positive impact beyond our client projects.
          </p>
        </div>

        {/* Community Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-headline font-semibold text-text-primary text-center mb-12">
            Charitable Design Work
          </h3>
          
          <div className="space-y-12">
            {communityProjects?.map((project, index) => (
              <div key={project?.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {project?.category}
                      </span>
                      <span className="text-sm text-text-secondary">
                        {project?.year}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-headline font-semibold text-text-primary">
                      {project?.title}
                    </h4>
                  </div>
                  
                  <p className="text-brand-body text-text-secondary">
                    {project?.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Icon name="Heart" size={20} className="text-accent" />
                    <span className="font-body font-semibold text-accent">
                      {project?.impact}
                    </span>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="aspect-brand-portfolio overflow-hidden rounded-2xl shadow-brand-elevated">
                    <Image
                      src={project?.image}
                      alt={project?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <div className="mb-20">
          <div className="bg-secondary rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-headline font-semibold text-text-primary text-center mb-12">
              Sustainability Commitment
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {sustainabilityInitiatives?.map((initiative, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={initiative?.icon} size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-headline font-semibold text-text-primary mb-2">
                      {initiative?.title}
                    </h4>
                    <p className="text-brand-body text-text-secondary">
                      {initiative?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 pt-8 border-t border-border">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                <Icon name="Leaf" size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">
                  Carbon Neutral Studio Since 2022
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mentorship Program */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-subtle">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-headline font-semibold text-text-primary">
                {mentorshipProgram?.title}
              </h3>
              
              <p className="text-brand-body text-text-secondary">
                {mentorshipProgram?.description}
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                {mentorshipProgram?.stats?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-headline font-semibold text-accent">
                      {stat?.number}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat?.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-accent">
                <Icon name="GraduationCap" size={20} />
                <span className="font-body font-medium">
                  Applications open annually in September
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-brand-golden overflow-hidden rounded-xl shadow-brand-moderate">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=600&fit=crop"
                  alt="Design mentorship workshop session"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-xl shadow-brand-moderate">
                <div className="text-lg font-headline font-semibold">100%</div>
                <div className="text-xs">Job Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;