import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CallToAction = () => {
  return (
    <section className="section-brand bg-gradient-to-br from-primary via-primary to-accent text-white">
      <div className="container-brand">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-brand-heading text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Let's collaborate to create a space that reflects your vision, enhances your lifestyle, and tells your unique story. Every great design begins with a conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
            
            <Link to="/portfolio-gallery">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
                iconName="ArrowRight"
                iconPosition="right"
              >
                View Our Portfolio
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="font-headline font-semibold text-white mb-2">
                Call Us
              </h3>
              <p className="text-white/80">
                (555) 123-4567
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="font-headline font-semibold text-white mb-2">
                Email Us
              </h3>
              <p className="text-white/80">
                hello@designvaultpro.com
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="font-headline font-semibold text-white mb-2">
                Visit Studio
              </h3>
              <p className="text-white/80">
                123 Design District, NYC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;