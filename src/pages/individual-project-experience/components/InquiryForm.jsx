import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Image from '../../../components/AppImage';


const InquiryForm = ({ project }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    similarProject: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypeOptions = [
    { value: 'residential', label: 'Residential Design' },
    { value: 'commercial', label: 'Commercial Space' },
    { value: 'renovation', label: 'Renovation Project' },
    { value: 'consultation', label: 'Design Consultation' },
    { value: 'similar', label: 'Similar to This Project' }
  ];

  const budgetOptions = [
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k-500k', label: '$250,000 - $500,000' },
    { value: '500k+', label: '$500,000+' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const timelineOptions = [
    { value: '3-6months', label: '3-6 Months' },
    { value: '6-12months', label: '6-12 Months' },
    { value: '1year+', label: '1+ Years' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="section-brand bg-accent/5">
        <div className="container-brand">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-green-600" />
            </div>
            <h2 className="text-brand-heading text-text-primary mb-4">
              Thank You for Your Inquiry!
            </h2>
            <p className="text-brand-body text-text-secondary mb-8">
              We've received your project inquiry and will get back to you within 24 hours. 
              Our team is excited to discuss how we can bring your vision to life.
            </p>
            <div className="bg-card rounded-xl p-6 shadow-brand-moderate">
              <h3 className="text-lg font-headline font-semibold text-text-primary mb-4">
                What happens next?
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={16} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-brand-body text-text-primary font-medium">
                      Initial Response (24 hours)
                    </p>
                    <p className="text-sm text-text-secondary">
                      We'll review your project details and schedule a consultation call
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={16} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-brand-body text-text-primary font-medium">
                      Discovery Call (Week 1)
                    </p>
                    <p className="text-sm text-text-secondary">
                      30-minute consultation to understand your vision and requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="FileText" size={16} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-brand-body text-text-primary font-medium">
                      Proposal & Timeline (Week 2)
                    </p>
                    <p className="text-sm text-text-secondary">
                      Detailed project proposal with timeline and investment details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-brand bg-accent/5">
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form Introduction */}
          <div>
            <h2 className="text-brand-heading text-text-primary mb-6">
              Request Similar Design
            </h2>
            <p className="text-brand-body text-text-secondary mb-8">
              Inspired by this project? Let's discuss how we can create a similar 
              transformation for your space. Share your vision and we'll craft a 
              personalized design solution.
            </p>

            {/* Project Reference */}
            <div className="bg-card rounded-xl p-6 shadow-brand-moderate mb-8">
              <h3 className="text-lg font-headline font-semibold text-text-primary mb-4">
                Reference Project
              </h3>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={project?.featuredImage}
                    alt={project?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-brand-body text-text-primary font-medium mb-1">
                    {project?.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {project?.category} • {project?.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={20} className="text-accent" />
                <div>
                  <p className="text-brand-body text-text-primary font-medium">
                    (555) 123-4567
                  </p>
                  <p className="text-sm text-text-secondary">
                    Mon-Fri 9AM-6PM EST
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={20} className="text-accent" />
                <div>
                  <p className="text-brand-body text-text-primary font-medium">
                    hello@designvaultpro.com
                  </p>
                  <p className="text-sm text-text-secondary">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={20} className="text-accent" />
                <div>
                  <p className="text-brand-body text-text-primary font-medium">
                    New York, NY
                  </p>
                  <p className="text-sm text-text-secondary">
                    Serving tri-state area
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-card rounded-2xl p-8 shadow-brand-elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                description="We'll use this for scheduling your consultation call"
              />

              {/* Project Details */}
              <Select
                label="Project Type"
                options={projectTypeOptions}
                value={formData?.projectType}
                onChange={(value) => handleSelectChange('projectType', value)}
                placeholder="Select project type"
                required
              />

              <div className="grid md:grid-cols-2 gap-4">
                <Select
                  label="Budget Range"
                  options={budgetOptions}
                  value={formData?.budget}
                  onChange={(value) => handleSelectChange('budget', value)}
                  placeholder="Select budget range"
                />
                <Select
                  label="Timeline"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleSelectChange('timeline', value)}
                  placeholder="Select timeline"
                />
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-body font-medium text-text-primary mb-2">
                  Project Description
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-brand-fast resize-none"
                  placeholder="Tell us about your space, vision, and what inspired you about this project..."
                  required
                />
              </div>

              {/* Similar Project Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="similarProject"
                  name="similarProject"
                  checked={formData?.similarProject}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-accent border-border rounded focus:ring-accent"
                />
                <label htmlFor="similarProject" className="text-sm text-text-secondary">
                  I'm interested in a design similar to "{project?.title}" and would like to 
                  discuss how this approach could work for my space.
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                className="bg-cta-primary text-cta-primary-foreground hover:bg-accent"
              >
                {isSubmitting ? 'Sending Inquiry...' : 'Send Project Inquiry'}
              </Button>

              {/* Privacy Note */}
              <p className="text-xs text-text-muted text-center">
                By submitting this form, you agree to our privacy policy. 
                We'll never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;