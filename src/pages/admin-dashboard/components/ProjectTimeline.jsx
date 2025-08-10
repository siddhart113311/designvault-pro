import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectTimeline = () => {
  const projects = [
    {
      id: 1,
      name: "Modern Penthouse Renovation",
      client: "Sarah Johnson",
      status: "In Progress",
      progress: 75,
      dueDate: "2025-01-15",
      priority: "high",
      lastUpdate: "2 hours ago"
    },
    {
      id: 2,
      name: "Corporate Office Design",
      client: "TechCorp Inc.",
      status: "Design Phase",
      progress: 45,
      dueDate: "2025-02-28",
      priority: "medium",
      lastUpdate: "1 day ago"
    },
    {
      id: 3,
      name: "Luxury Villa Interior",
      client: "Michael Chen",
      status: "Material Selection",
      progress: 60,
      dueDate: "2025-01-30",
      priority: "high",
      lastUpdate: "3 hours ago"
    },
    {
      id: 4,
      name: "Restaurant Redesign",
      client: "Bella Vista Restaurant",
      status: "Planning",
      progress: 25,
      dueDate: "2025-03-15",
      priority: "low",
      lastUpdate: "2 days ago"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-orange-500 bg-orange-50';
      case 'low': return 'text-green-500 bg-green-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'In Progress': return 'Clock';
      case 'Design Phase': return 'Palette';
      case 'Material Selection': return 'Package';
      case 'Planning': return 'FileText';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-brand-subtle border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-headline font-semibold text-text-primary">
            Active Projects
          </h3>
          <button className="text-accent hover:text-accent/80 text-sm font-body font-medium transition-brand-fast">
            View All
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {projects?.map((project) => (
            <div
              key={project?.id}
              className="border border-border rounded-lg p-4 hover:shadow-brand-subtle transition-brand-normal"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-body font-medium text-text-primary mb-1">
                    {project?.name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Client: {project?.client}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-body font-medium ${getPriorityColor(project?.priority)}`}>
                  {project?.priority?.charAt(0)?.toUpperCase() + project?.priority?.slice(1)}
                </span>
              </div>
              
              <div className="flex items-center mb-3">
                <Icon name={getStatusIcon(project?.status)} size={16} className="text-accent mr-2" />
                <span className="text-sm font-body text-text-primary mr-4">
                  {project?.status}
                </span>
                <span className="text-sm font-body text-text-secondary">
                  Due: {new Date(project.dueDate)?.toLocaleDateString()}
                </span>
              </div>
              
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-body text-text-secondary">Progress</span>
                  <span className="text-sm font-body font-medium text-text-primary">
                    {project?.progress}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-brand-normal"
                    style={{ width: `${project?.progress}%` }}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">
                  Last update: {project?.lastUpdate}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-1 hover:bg-muted rounded transition-brand-fast">
                    <Icon name="MessageSquare" size={16} className="text-text-secondary" />
                  </button>
                  <button className="p-1 hover:bg-muted rounded transition-brand-fast">
                    <Icon name="Edit" size={16} className="text-text-secondary" />
                  </button>
                  <button className="p-1 hover:bg-muted rounded transition-brand-fast">
                    <Icon name="MoreHorizontal" size={16} className="text-text-secondary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;