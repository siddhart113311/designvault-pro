import React from 'react';
import Icon from '../../../components/AppIcon';

const DashboardStats = () => {
  const stats = [
    {
      id: 1,
      title: "Active Projects",
      value: "12",
      change: "+3",
      changeType: "increase",
      icon: "Layers",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Pending Inquiries",
      value: "8",
      change: "+2",
      changeType: "increase",
      icon: "MessageSquare",
      color: "bg-orange-500"
    },
    {
      id: 3,
      title: "This Month Revenue",
      value: "$45,200",
      change: "+12%",
      changeType: "increase",
      icon: "DollarSign",
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Portfolio Views",
      value: "2,847",
      change: "+18%",
      changeType: "increase",
      icon: "Eye",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat) => (
        <div
          key={stat?.id}
          className="bg-card rounded-lg p-6 shadow-brand-subtle border border-border hover:shadow-brand-moderate transition-brand-normal"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-body text-text-secondary mb-1">
                {stat?.title}
              </p>
              <p className="text-2xl font-headline font-semibold text-text-primary">
                {stat?.value}
              </p>
              <div className="flex items-center mt-2">
                <Icon 
                  name={stat?.changeType === 'increase' ? 'TrendingUp' : 'TrendingDown'} 
                  size={16} 
                  className={`mr-1 ${stat?.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}
                />
                <span className={`text-sm font-body ${stat?.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                  {stat?.change}
                </span>
                <span className="text-sm font-body text-text-secondary ml-1">
                  vs last month
                </span>
              </div>
            </div>
            <div className={`w-12 h-12 ${stat?.color} rounded-lg flex items-center justify-center`}>
              <Icon name={stat?.icon} size={24} className="text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;