import React, { useState } from 'react';
import Header from '../../components/ui/Header';

import DashboardStats from './components/DashboardStats';
import ProjectTimeline from './components/ProjectTimeline';
import RecentInquiries from './components/RecentInquiries';
import AnalyticsChart from './components/AnalyticsChart';
import QuickActions from './components/QuickActions';
import ContentManagement from './components/ContentManagement';
import ProjectManagement from "./components/ProjectManagement";

const AdminDashboard = () => {
  const currentDate = new Date()?.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-brand-surface">
      <Header />
      {/* Main Content */}
      <main className="pt-20 lg:pt-24">
        <div className="container-brand">
          {/* Navigation Tabs */}
          <div className="bg-card shadow-brand-moderate rounded-lg mb-8">
            <div className="border-b border-border">
              <nav className="-mb-px flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`py-4 px-1 border-b-2 font-body font-medium text-sm transition-brand-fast ${
                    activeTab === 'projects' 
                      ? 'border-accent text-accent' 
                      : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
                  }`}
                >
                  Project Management
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`py-4 px-1 border-b-2 font-body font-medium text-sm transition-brand-fast ${
                    activeTab === 'analytics' 
                      ? 'border-accent text-accent' 
                      : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
                  }`}
                >
                  Analytics
                </button>
                <button
                  onClick={() => setActiveTab('content')}
                  className={`py-4 px-1 border-b-2 font-body font-medium text-sm transition-brand-fast ${
                    activeTab === 'content' 
                      ? 'border-accent text-accent' 
                      : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
                  }`}
                >
                  Content
                </button>
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-brand-xl">
            {activeTab === 'projects' && <ProjectManagement />}
            
            {activeTab === 'analytics' && (
              <div className="space-brand-lg">
               <DashboardStats />
               <AnalyticsChart />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
               
                <RecentInquiries />
                <ProjectTimeline />
              </div>
              </div>
            )}
            
            {activeTab === 'content' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ContentManagement />
                <QuickActions />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;