import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Icon from '../../components/AppIcon';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);
    setError('');

    // Simple authentication check
    if (username === 'viraj' && password === 'viraj12345') {
      // Store admin session
      sessionStorage.setItem('adminAuthenticated', 'true');
      sessionStorage.setItem('adminUser', username);
      
      // Redirect to admin dashboard
      navigate('/admin-dashboard');
    } else {
      setError('Invalid username or password. Please try again.');
    }
    
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - DesignVault Pro</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-brand-surface py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-cta-primary rounded-xl flex items-center justify-center mb-6">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            
            <h2 className="text-brand-heading font-headline text-text-primary">
              Admin Access
            </h2>
            <p className="text-brand-body text-text-secondary mt-2">
              Enter your credentials to access the admin dashboard
            </p>
          </div>
          
          <div className="bg-card rounded-lg shadow-brand-moderate p-8 border border-border">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-body font-medium text-text-primary mb-2">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e?.target?.value)}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-body font-medium text-text-primary mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e?.target?.value)}
                  required
                  className="w-full"
                />
              </div>

              {error && (
                <div className="bg-error/10 border border-error/20 text-error px-4 py-3 rounded-lg">
                  <div className="flex items-center">
                    <Icon name="AlertCircle" size={16} className="mr-2" />
                    <span className="font-body">{error}</span>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-cta-primary text-cta-primary-foreground hover:bg-accent"
              >
                {loading ? (
                  <div className="flex items-center">
                    <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Sign In
                  </div>
                )}
              </Button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-sm text-text-muted font-body">
              <Icon name="Lock" size={14} className="inline mr-1" />
              Secure admin access only
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
