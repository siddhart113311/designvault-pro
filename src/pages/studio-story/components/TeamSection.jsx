import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Principal Designer & Founder",
      bio: "With 15+ years of experience, Sarah leads our design vision and client relationships. Her work has been featured in Architectural Digest and Elle Decor.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      specialties: ["Residential Design", "Space Planning", "Color Theory"],
      credentials: ["NCIDQ Certified", "LEED AP", "ASID Professional Member"]
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Senior Project Manager",
      bio: "Marcus ensures every project runs smoothly from concept to completion. His attention to detail and vendor relationships are unmatched.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialties: ["Project Management", "Vendor Relations", "Quality Control"],
      credentials: ["PMP Certified", "Construction Management", "10+ Years Experience"]
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Design Associate",
      bio: "Elena brings fresh perspectives and technical expertise to our team. She specializes in sustainable design and 3D visualization.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialties: ["3D Visualization", "Sustainable Design", "Material Research"],
      credentials: ["M.Arch Interior Design", "LEED Green Associate", "AutoCAD Expert"]
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Senior Craftsman Partner",
      bio: "James leads our trusted network of craftspeople and contractors, ensuring the highest quality execution of our designs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialties: ["Custom Millwork", "Fine Carpentry", "Installation"],
      credentials: ["Master Craftsman", "20+ Years Experience", "Licensed Contractor"]
    }
  ];

  return (
    <section className="section-brand bg-background">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-brand-heading text-text-primary mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Behind every exceptional design is a team of passionate professionals dedicated to bringing your vision to life with expertise and care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="bg-card rounded-2xl p-8 shadow-brand-subtle hover-lift">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-brand-moderate">
                    <Image
                      src={member?.image}
                      alt={`${member?.name} - ${member?.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-headline font-semibold text-text-primary">
                      {member?.name}
                    </h3>
                    <p className="text-accent font-body font-medium">
                      {member?.role}
                    </p>
                  </div>

                  <p className="text-brand-body text-text-secondary">
                    {member?.bio}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-body font-semibold text-text-primary mb-2">
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member?.specialties?.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-body font-semibold text-text-primary mb-2">
                        Credentials
                      </h4>
                      <div className="space-y-1">
                        {member?.credentials?.map((credential, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Icon name="CheckCircle" size={14} className="text-accent" />
                            <span className="text-xs text-text-secondary">
                              {credential}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Network */}
        <div className="mt-20 bg-secondary rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-headline font-semibold text-text-primary mb-4">
              Our Trusted Network
            </h3>
            <p className="text-brand-body text-text-secondary max-w-2xl mx-auto">
              We work with a carefully curated network of artisans, contractors, and specialists who share our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Master Craftspeople",
                count: "12+",
                description: "Skilled artisans specializing in custom millwork, metalwork, and fine finishes"
              },
              {
                category: "Licensed Contractors",
                count: "8+",
                description: "Trusted general contractors with proven track records in luxury residential work"
              },
              {
                category: "Specialty Vendors",
                count: "25+",
                description: "Curated suppliers of premium materials, fixtures, and furnishings"
              }
            ]?.map((network, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-headline font-semibold text-accent">
                    {network?.count}
                  </span>
                </div>
                <h4 className="text-lg font-headline font-semibold text-text-primary mb-2">
                  {network?.category}
                </h4>
                <p className="text-sm text-text-secondary">
                  {network?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;