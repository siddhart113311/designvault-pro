import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecentInquiries = () => {
  const inquiries = [
    {
      id: 1,
      name: "Emma Rodriguez",
      email: "emma.rodriguez@email.com",
      projectType: "Residential",
      budget: "$50,000 - $75,000",
      message: `Looking for a complete home renovation for our 3-bedroom house. We love modern minimalist design with natural elements.\n\nWe're particularly interested in open-plan living and sustainable materials.`,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      status: "new",
      priority: "high"
    },
    {
      id: 2,
      name: "David Park",
      email: "d.park@techstartup.com",
      projectType: "Commercial",
      budget: "$100,000+",
      message: `Need office space design for our growing tech startup. Looking for creative, collaborative spaces that inspire innovation.\n\nWe have 5000 sq ft and want to accommodate 50 employees with room for growth.`,
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      status: "contacted",
      priority: "high"
    },
    {
      id: 3,
      name: "Lisa Thompson",
      email: "lisa.thompson@gmail.com",
      projectType: "Landscape",
      budget: "$25,000 - $50,000",
      message: `Interested in landscape design for our backyard. We want to create an outdoor entertainment area with garden spaces.\n\nLooking for low-maintenance plants and modern outdoor furniture integration.`,
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      status: "scheduled",
      priority: "medium"
    },
    {
      id: 4,
      name: "Robert Kim",
      email: "robert.kim@email.com",
      projectType: "Residential",
      budget: "$75,000 - $100,000",
      message: `Kitchen and bathroom renovation for our family home. We want to modernize while keeping some traditional elements.\n\nTimeline is flexible, quality is our main priority.`,
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      status: "quoted",
      priority: "medium"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-orange-100 text-orange-800';
      case 'scheduled': return 'bg-green-100 text-green-800';
      case 'quoted': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return { icon: 'AlertTriangle', color: 'text-red-500' };
      case 'medium': return { icon: 'Clock', color: 'text-orange-500' };
      case 'low': return { icon: 'Minus', color: 'text-green-500' };
      default: return { icon: 'Circle', color: 'text-gray-500' };
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return 'Just now';
  };

  return (
    <div className="bg-card rounded-lg shadow-brand-subtle border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-headline font-semibold text-text-primary">
            Recent Inquiries
          </h3>
          <Button variant="outline" size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Add Manual Entry
          </Button>
        </div>
      </div>
      <div className="divide-y divide-border">
        {inquiries?.map((inquiry) => {
          const priorityInfo = getPriorityIcon(inquiry?.priority);
          
          return (
            <div key={inquiry?.id} className="p-6 hover:bg-muted/50 transition-brand-fast">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="font-body font-medium text-text-primary mr-3">
                      {inquiry?.name}
                    </h4>
                    <Icon 
                      name={priorityInfo?.icon} 
                      size={16} 
                      className={`mr-2 ${priorityInfo?.color}`} 
                    />
                    <span className={`px-2 py-1 rounded-full text-xs font-body font-medium ${getStatusColor(inquiry?.status)}`}>
                      {inquiry?.status?.charAt(0)?.toUpperCase() + inquiry?.status?.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-1">
                    {inquiry?.email}
                  </p>
                  <div className="flex items-center text-sm text-text-secondary space-x-4">
                    <span className="flex items-center">
                      <Icon name="Tag" size={14} className="mr-1" />
                      {inquiry?.projectType}
                    </span>
                    <span className="flex items-center">
                      <Icon name="DollarSign" size={14} className="mr-1" />
                      {inquiry?.budget}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {formatTimeAgo(inquiry?.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-text-primary leading-relaxed whitespace-pre-line">
                  {inquiry?.message?.length > 150 
                    ? `${inquiry?.message?.substring(0, 150)}...` 
                    : inquiry?.message
                  }
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button variant="default" size="sm">
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    Reply
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Schedule
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Quote
                  </Button>
                </div>
                
                <div className="flex items-center space-x-1">
                  <button className="p-2 hover:bg-muted rounded transition-brand-fast">
                    <Icon name="Star" size={16} className="text-text-secondary" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded transition-brand-fast">
                    <Icon name="Archive" size={16} className="text-text-secondary" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded transition-brand-fast">
                    <Icon name="MoreHorizontal" size={16} className="text-text-secondary" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-4 border-t border-border bg-muted/30">
        <Button variant="ghost" fullWidth className="text-accent hover:text-accent/80">
          View All Inquiries ({inquiries?.length + 4} total)
        </Button>
      </div>
    </div>
  );
};

export default RecentInquiries;