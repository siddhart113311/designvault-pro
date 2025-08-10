import React, { useState } from 'react';
import { portfolioService } from '../../services/portfolioService';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    project_type: '',
    budget_range: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await portfolioService?.submitContact(formData);
      
      if (result?.error) {
        setError(result?.error?.message);
        return;
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        project_type: '',
        budget_range: ''
      });
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Contact us to discuss your interior and exterior design project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Start Your Project</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">hello@designstudio.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">123 Design Street, Creative District</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Office Hours</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By appointment only</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                <p>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-6">
                <span className="block sm:inline">{error}</span>
                <button
                  type="button"
                  onClick={() => navigator.clipboard?.writeText(error)}
                  className="absolute top-0 bottom-0 right-0 px-4 py-3 hover:bg-red-100"
                  title="Copy error message"
                >
                  📋
                </button>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData?.phone}
                  onChange={handleInputChange}
                />
                <select
                  name="project_type"
                  value={formData?.project_type}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Project Type</option>
                  <option value="residential_interior">Residential Interior</option>
                  <option value="residential_exterior">Residential Exterior</option>
                  <option value="commercial_interior">Commercial Interior</option>
                  <option value="commercial_exterior">Commercial Exterior</option>
                  <option value="landscape">Landscape Design</option>
                  <option value="consultation">Design Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData?.subject}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="budget_range"
                  value={formData?.budget_range}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Budget Range</option>
                  <option value="under_10k">Under $10,000</option>
                  <option value="10k_25k">$10,000 - $25,000</option>
                  <option value="25k_50k">$25,000 - $50,000</option>
                  <option value="50k_100k">$50,000 - $100,000</option>
                  <option value="over_100k">Over $100,000</option>
                  <option value="consultation">Just a consultation</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                value={formData?.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2"
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600 mb-4">Project timelines vary based on scope and complexity. Residential projects typically take 4-12 weeks, while commercial projects may take 2-6 months.</p>
              
              <h3 className="font-semibold mb-2">Do you provide 3D renderings?</h3>
              <p className="text-gray-600 mb-4">Yes, we provide detailed 3D renderings and visualizations to help you envision your space before implementation.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What is your design process?</h3>
              <p className="text-gray-600 mb-4">Our process includes consultation, concept development, design refinement, material selection, and project management through completion.</p>
              
              <h3 className="font-semibold mb-2">Do you work with existing furniture?</h3>
              <p className="text-gray-600">Absolutely! We love incorporating pieces that have sentimental value or work well with the new design direction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;