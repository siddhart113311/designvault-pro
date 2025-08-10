import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ProjectHero from './components/ProjectHero';
import ProjectOverview from './components/ProjectOverview';
import DesignJourney from './components/DesignJourney';
import TransformationStory from './components/TransformationStory';
import MaterialsLibrary from './components/MaterialsLibrary';
import ClientTestimonials from './components/ClientTestimonials';
import PhotoGallery from './components/PhotoGallery';
import RelatedProjects from './components/RelatedProjects';
import InquiryForm from './components/InquiryForm';

const IndividualProjectExperience = () => {
  const [searchParams] = useSearchParams();
  const projectSlug = searchParams?.get('project') || 'luxury-penthouse-manhattan';
  const [currentProject, setCurrentProject] = useState(null);

  // Mock project data
  const projectsData = {
    'luxury-penthouse-manhattan': {
      title: "Luxury Penthouse Manhattan",
      subtitle: "A sophisticated urban sanctuary combining contemporary elegance with timeless comfort, featuring panoramic city views and bespoke interior solutions.",
      category: "Residential",
      location: "Manhattan, NY",
      duration: "8 months",
      sqft: "3,200 sq ft",
      teamSize: 6,
      featuredImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      heroImages: [
        {
          url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
          alt: "Luxury penthouse living room with city views"
        },
        {
          url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
          alt: "Modern kitchen with marble countertops"
        },
        {
          url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
          alt: "Master bedroom with panoramic windows"
        }
      ],
      overview: {
        description: "This stunning Manhattan penthouse transformation represents the perfect marriage of contemporary sophistication and livable luxury. Our clients, a successful finance executive and renowned artist, sought to create a space that would serve as both an elegant entertaining venue and a peaceful retreat from the bustling city below.",
        challenge: "The primary challenge lay in maximizing the spectacular 270-degree city views while creating intimate, functional spaces within the open floor plan. The existing layout felt disconnected, and the previous design failed to capitalize on the apartment's most valuable asset - its breathtaking vistas of Central Park and the Manhattan skyline.",
        clientGoals: [
          "Create seamless indoor-outdoor living experience",
          "Design sophisticated entertaining spaces",
          "Maximize natural light and city views",
          "Incorporate sustainable, high-quality materials",
          "Establish distinct zones within open floor plan"
        ],
        designVision: "Our vision centered on creating a 'floating sanctuary' - a space that feels suspended above the city while remaining grounded in comfort and functionality. We employed a palette of warm neutrals, natural textures, and carefully curated art pieces to create an environment that celebrates both the urban energy outside and the tranquil sophistication within."
      },
      details: {
        location: "Upper East Side, Manhattan",
        completionDate: "March 2024",
        sqft: "3,200 sq ft",
        duration: "8 months",
        projectTypes: ["Full Interior Design", "Space Planning", "Custom Millwork"],
        team: [
          { name: "Sarah Mitchell", role: "Lead Designer" },
          { name: "David Chen", role: "Project Manager" },
          { name: "Maria Rodriguez", role: "Interior Stylist" },
          { name: "James Wilson", role: "Lighting Designer" }
        ],
        sustainability: ["Energy-efficient lighting", "Sustainable materials", "Low-VOC finishes", "Recycled content furniture"]
      },
      designJourney: {
        phases: [
          {
            title: "Discovery & Vision",
            icon: "Search",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
            description: "Our journey began with extensive client interviews and lifestyle analysis. We spent time understanding how the space would be used for both daily living and entertaining, identifying key functional requirements and aesthetic preferences.",
            keyDecisions: [
              "Prioritize city views in all major living spaces",
              "Create flexible entertaining zones",
              "Integrate smart home technology seamlessly"
            ],
            collaborators: ["Client Lifestyle Consultant", "Feng Shui Specialist"]
          },
          {
            title: "Concept Development",
            icon: "Lightbulb",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
            description: "We developed three distinct design concepts, each exploring different approaches to luxury urban living. The selected concept emphasized clean lines, natural materials, and sophisticated color palettes that complement the city views.",
            keyDecisions: [
              "Select warm neutral palette with accent colors",
              "Incorporate natural stone and wood elements",
              "Design custom storage solutions"
            ],
            collaborators: ["3D Visualization Artist", "Color Consultant"]
          },
          {
            title: "Material Selection",
            icon: "Palette",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
            description: "Every material was carefully chosen for its quality, sustainability, and contribution to the overall design narrative. We sourced unique pieces from artisan craftspeople and established luxury brands.",
            keyDecisions: [
              "Source sustainable hardwood flooring",
              "Select Italian marble for kitchen island",
              "Commission custom art pieces"
            ],
            collaborators: ["Material Sourcing Specialist", "Local Artisans"]
          },
          {
            title: "Implementation",
            icon: "Hammer",
            image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop",
            description: "The construction phase required meticulous coordination to minimize disruption while achieving the highest quality results. Our project management team ensured every detail was executed to perfection.",
            keyDecisions: [
              "Coordinate with building management",
              "Implement dust containment protocols",
              "Schedule deliveries during optimal times"
            ],
            collaborators: ["General Contractor", "Specialty Trades", "Building Management"]
          }
        ],
        timeline: [
          {
            date: "June 2023",
            title: "Project Kickoff",
            description: "Initial client meeting and site assessment completed",
            icon: "Calendar"
          },
          {
            date: "July 2023",
            title: "Design Development",
            description: "Concept approval and detailed design documentation",
            icon: "FileText"
          },
          {
            date: "August 2023",
            title: "Permits & Approvals",
            description: "Building permits obtained and contractor selection",
            icon: "CheckCircle"
          },
          {
            date: "September 2023",
            title: "Construction Begins",
            description: "Demolition and structural work commenced",
            icon: "Hammer"
          },
          {
            date: "January 2024",
            title: "Installation Phase",
            description: "Custom millwork and finish installation",
            icon: "Package"
          },
          {
            date: "March 2024",
            title: "Project Completion",
            description: "Final styling and client walkthrough",
            icon: "Home"
          }
        ]
      },
      transformation: {
        comparisons: [
          {
            room: "Living Room",
            before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&sat=-100",
            after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
            description: "The living room transformation opened up the space to showcase stunning city views while creating intimate conversation areas."
          },
          {
            room: "Kitchen",
            before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&sat=-100",
            after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
            description: "The kitchen evolved from a closed-off workspace to an open culinary theater with premium appliances and marble surfaces."
          },
          {
            room: "Master Bedroom",
            before: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&sat=-100",
            after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
            description: "The master bedroom became a serene sanctuary with custom built-ins and panoramic park views."
          }
        ],
        constructionHighlights: [
          {
            title: "Custom Millwork Installation",
            description: "Precision-crafted built-in storage solutions maximize space while maintaining clean lines.",
            image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop",
            date: "January 2024",
            icon: "Package"
          },
          {
            title: "Marble Countertop Installation",
            description: "Italian Carrara marble kitchen island installed as the centerpiece of the open floor plan.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
            date: "February 2024",
            icon: "Square"
          },
          {
            title: "Smart Home Integration",
            description: "Seamless integration of lighting, climate, and security systems with intuitive controls.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
            date: "February 2024",
            icon: "Smartphone"
          }
        ],
        achievements: [
          {
            icon: "TrendingUp",
            value: "40%",
            label: "Property Value Increase",
            description: "Estimated increase in property value"
          },
          {
            icon: "Zap",
            value: "30%",
            label: "Energy Efficiency",
            description: "Improvement in energy consumption"
          },
          {
            icon: "Clock",
            value: "8",
            label: "Months",
            description: "Completed on schedule"
          },
          {
            icon: "Award",
            value: "100%",
            label: "Client Satisfaction",
            description: "Exceeded all expectations"
          }
        ]
      },
      materials: [
        {
          name: "Carrara Marble",
          brand: "Italian Stone Works",
          category: "stone",
          application: "Kitchen island and bathroom vanities",
          image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=300&h=300&fit=crop",
          sustainable: false,
          specifications: ["12mm thickness", "Honed finish", "Book-matched slabs"],
          supplier: {
            name: "Premium Stone NYC",
            contact: "info@premiumstone.com"
          }
        },
        {
          name: "European White Oak",
          brand: "Sustainable Hardwoods",
          category: "flooring",
          application: "Main living areas and bedrooms",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
          sustainable: true,
          specifications: ["7-inch wide planks", "Wire-brushed texture", "Natural oil finish"],
          supplier: {
            name: "EcoFloor Solutions",
            contact: "sales@ecofloor.com"
          }
        },
        {
          name: "Custom Brass Hardware",
          brand: "Artisan Metalworks",
          category: "hardware",
          application: "Cabinet pulls and door handles",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
          sustainable: true,
          specifications: ["Brushed brass finish", "Custom dimensions", "Antimicrobial coating"],
          supplier: {
            name: "NYC Metalworks",
            contact: "custom@nycmetal.com"
          }
        },
        {
          name: "Italian Leather Upholstery",
          brand: "Luxury Textiles Co",
          category: "textiles",
          application: "Dining chairs and accent seating",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
          sustainable: false,
          specifications: ["Full-grain leather", "Aniline dye", "Scotchgard protection"],
          supplier: {
            name: "Designer Fabrics NYC",
            contact: "orders@designerfabrics.com"
          }
        }
      ],
      suppliers: [
        {
          name: "Premium Stone NYC",
          specialty: "Natural Stone & Marble",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
          website: true,
          showroom: true
        },
        {
          name: "EcoFloor Solutions",
          specialty: "Sustainable Hardwood Flooring",
          logo: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=100&h=100&fit=crop",
          website: true,
          showroom: false
        },
        {
          name: "Designer Fabrics NYC",
          specialty: "Luxury Textiles & Upholstery",
          logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
          website: true,
          showroom: true
        }
      ],
      testimonials: [
        {
          clientName: "Alexandra & Michael Thompson",
          clientTitle: "Penthouse Owners",
          clientPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
          rating: 5,
          quote: "DesignVault Pro transformed our penthouse into a masterpiece that exceeds every expectation. The attention to detail and understanding of our lifestyle created a space that truly feels like home.",
          highlights: [
            "Exceptional project management and communication",
            "Beautiful integration of city views with interior design",
            "High-quality materials and craftsmanship",
            "Completed on time and within budget"
          ],
          videoUrl: "https://example.com/testimonial-video"
        }
      ],
      impact: [
        {
          icon: "Home",
          value: "3,200",
          label: "Square Feet Transformed",
          description: "Complete interior renovation"
        },
        {
          icon: "Users",
          value: "15+",
          label: "Artisans Involved",
          description: "Skilled craftspeople and specialists"
        },
        {
          icon: "Leaf",
          value: "85%",
          label: "Sustainable Materials",
          description: "Eco-friendly material selection"
        }
      ],
      clientJourney: [
        {
          title: "Initial Consultation",
          description: "Comprehensive lifestyle assessment and vision alignment session",
          timeframe: "Week 1",
          icon: "MessageCircle",
          clientFeedback: "The team immediately understood our vision and lifestyle needs."
        },
        {
          title: "Design Development",
          description: "Collaborative design process with multiple concept iterations",
          timeframe: "Weeks 2-4",
          icon: "Palette",
          clientFeedback: "Every design decision was explained and we felt involved throughout."
        },
        {
          title: "Construction Phase",
          description: "Daily updates and quality control throughout the build process",
          timeframe: "Months 2-7",
          icon: "Hammer",
          clientFeedback: "The project management was exceptional - no surprises, just results."
        },
        {
          title: "Final Reveal",
          description: "Complete styling and walkthrough of the finished space",
          timeframe: "Month 8",
          icon: "Star",
          clientFeedback: "The final result exceeded our wildest dreams. It\'s absolutely perfect."
        }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop",
          alt: "Living room with city views",
          room: "living room",
          description: "Main living area with panoramic city views"
        },
        {
          url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
          alt: "Modern kitchen design",
          room: "kitchen",
          description: "Open kitchen with marble island"
        },
        {
          url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=600&fit=crop",
          alt: "Master bedroom sanctuary",
          room: "bedroom",
          description: "Serene master bedroom with park views"
        },
        {
          url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=900&fit=crop",
          alt: "Dining area elegance",
          room: "dining room",
          description: "Elegant dining space for entertaining"
        },
        {
          url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
          alt: "Custom built-in storage",
          room: "living room",
          description: "Custom millwork and storage solutions"
        },
        {
          url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=700&fit=crop",
          alt: "Luxury bathroom design",
          room: "bathroom",
          description: "Spa-like master bathroom with marble finishes"
        }
      ]
    }
  };

  // Related projects data
  const relatedProjectsData = [
    {
      slug: "modern-townhouse-brooklyn",
      title: "Modern Townhouse Brooklyn",
      category: "Residential",
      location: "Brooklyn, NY",
      description: "Contemporary family home featuring sustainable materials and smart home integration throughout four levels of thoughtful design.",
      featuredImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop",
      sqft: "2,800 sq ft",
      duration: "6 months",
      rating: "4.9"
    },
    {
      slug: "luxury-condo-soho",
      title: "Luxury Condo SoHo",
      category: "Residential",
      location: "SoHo, NY",
      description: "Industrial chic meets modern luxury in this stunning loft conversion with exposed brick and contemporary finishes.",
      featuredImage: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
      sqft: "2,200 sq ft",
      duration: "5 months",
      rating: "5.0"
    },
    {
      slug: "executive-office-midtown",
      title: "Executive Office Midtown",
      category: "Commercial",
      location: "Midtown, NY",
      description: "Sophisticated corporate headquarters design that balances productivity with executive presence and client entertainment.",
      featuredImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      sqft: "5,000 sq ft",
      duration: "4 months",
      rating: "4.8"
    }
  ];

  useEffect(() => {
    // Set current project based on URL parameter
    const project = projectsData?.[projectSlug];
    if (project) {
      setCurrentProject(project);
    } else {
      // Default to first project if slug not found
      setCurrentProject(projectsData?.['luxury-penthouse-manhattan']);
    }
  }, [projectSlug]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-brand-body text-text-secondary">Loading project details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Project Hero Section */}
      <ProjectHero project={currentProject} />
      
      {/* Project Overview */}
      <ProjectOverview project={currentProject} />
      
      {/* Design Journey */}
      <DesignJourney project={currentProject} />
      
      {/* Transformation Story */}
      <TransformationStory project={currentProject} />
      
      {/* Materials Library */}
      <MaterialsLibrary project={currentProject} />
      
      {/* Client Testimonials */}
      <ClientTestimonials project={currentProject} />
      
      {/* Photo Gallery */}
      <PhotoGallery project={currentProject} />
      
      {/* Related Projects */}
      <RelatedProjects relatedProjects={relatedProjectsData} />
      
      {/* Inquiry Form */}
      <InquiryForm project={currentProject} />
    </div>
  );
};

export default IndividualProjectExperience;