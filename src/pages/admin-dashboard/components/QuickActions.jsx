import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = () => {
  const quickActions = [
    {
      id: 1,
      title: "Add New Project",
      description: "Upload and showcase your latest design work",
      icon: "Plus",
      color: "bg-blue-500",
      action: "add-project"
    },
    {
      id: 2,
      title: "Create Blog Post",
      description: "Share design insights and industry trends",
      icon: "FileText",
      color: "bg-green-500",
      action: "create-blog"
    },
    {
      id: 3,
      title: "Schedule Consultation",
      description: "Book client meetings and site visits",
      icon: "Calendar",
      color: "bg-purple-500",
      action: "schedule-meeting"
    },
    {
      id: 4,
      title: "Send Newsletter",
      description: "Update clients on latest projects and news",
      icon: "Mail",
      color: "bg-orange-500",
      action: "send-newsletter"
    },
    {
      id: 5,
      title: "Update Portfolio",
      description: "Manage and organize project galleries",
      icon: "Image",
      color: "bg-pink-500",
      action: "update-portfolio"
    },
    {
      id: 6,
      title: "Generate Report",
      description: "Create business performance analytics",
      icon: "BarChart3",
      color: "bg-indigo-500",
      action: "generate-report"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: "Project Updated",
      description: "Modern Penthouse Renovation - Progress updated to 75%",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      icon: "Edit",
      color: "text-blue-500"
    },
    {
      id: 2,
      action: "New Inquiry",
      description: "Emma Rodriguez submitted a residential project inquiry",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      icon: "MessageSquare",
      color: "text-green-500"
    },
    {
      id: 3,
      action: "Portfolio View",
      description: "Luxury Villa Interior project viewed 15 times today",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      icon: "Eye",
      color: "text-purple-500"
    },
    {
      id: 4,
      action: "Client Meeting",
      description: "Consultation scheduled with TechCorp Inc. for tomorrow",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      icon: "Calendar",
      color: "text-orange-500"
    }
  ];

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  const handleQuickAction = (action) => {
    console.log(`Quick action triggered: ${action}`);
    // Handle different quick actions
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions Grid */}
      <div className="bg-card rounded-lg shadow-brand-subtle border border-border">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-headline font-semibold text-text-primary">
            Quick Actions
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            Streamline your workflow with one-click actions
          </p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions?.map((action) => (
              <button
                key={action?.id}
                onClick={() => handleQuickAction(action?.action)}
                className="p-4 border border-border rounded-lg hover:shadow-brand-subtle hover:border-accent/50 transition-all duration-brand-normal text-left group"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 ${action?.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-brand-normal`}>
                    <Icon name={action?.icon} size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body font-medium text-text-primary group-hover:text-accent transition-brand-fast">
                      {action?.title}
                    </h4>
                    <p className="text-sm text-text-secondary mt-1">
                      {action?.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="bg-card rounded-lg shadow-brand-subtle border border-border">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-headline font-semibold text-text-primary">
              Recent Activity
            </h3>
            <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
              View All
            </Button>
          </div>
        </div>
        
        <div className="divide-y divide-border">
          {recentActivities?.map((activity) => (
            <div key={activity?.id} className="p-6 hover:bg-muted/50 transition-brand-fast">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Icon name={activity?.icon} size={20} className={activity?.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-body font-medium text-text-primary">
                      {activity?.action}
                    </h4>
                    <span className="text-xs text-text-secondary">
                      {formatTimeAgo(activity?.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">
                    {activity?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-border bg-muted/30">
          <Button variant="ghost" fullWidth className="text-accent hover:text-accent/80">
            <Icon name="Clock" size={16} className="mr-2" />
            View Activity Log
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;