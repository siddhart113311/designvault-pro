import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-accent/10 to-cta-primary/10 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-headline font-semibold text-text-primary mb-2">
          Welcome to Our Community!
        </h3>
        <p className="text-text-secondary mb-6">
          Thank you for subscribing. You'll receive our latest design insights and exclusive content directly in your inbox.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubscribed(false)}
          className="border-accent text-accent hover:bg-accent hover:text-white"
        >
          Subscribe Another Email
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-accent/5 to-cta-primary/5 rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-headline font-semibold text-text-primary mb-2">
          Stay Inspired
        </h3>
        <p className="text-text-secondary">
          Get exclusive design insights, early project reveals, and expert tips delivered to your inbox monthly.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          required
          className="text-center"
        />
        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isLoading}
          disabled={!email}
          className="bg-cta-primary text-cta-primary-foreground hover:bg-accent"
        >
          Subscribe to Newsletter
        </Button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-xs text-text-secondary">
          Join 2,500+ design enthusiasts. Unsubscribe anytime.
        </p>
        <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Shield" size={12} />
            <span>Privacy Protected</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Zap" size={12} />
            <span>No Spam</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Gift" size={12} />
            <span>Exclusive Content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;