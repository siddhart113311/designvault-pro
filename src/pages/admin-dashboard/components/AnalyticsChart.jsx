import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Icon from '../../../components/AppIcon';

const AnalyticsChart = () => {
  const portfolioViewsData = [
    { month: 'Jul', views: 1200, inquiries: 8 },
    { month: 'Aug', views: 1450, inquiries: 12 },
    { month: 'Sep', views: 1800, inquiries: 15 },
    { month: 'Oct', views: 2100, inquiries: 18 },
    { month: 'Nov', views: 2400, inquiries: 22 },
    { month: 'Dec', views: 2847, inquiries: 28 }
  ];

  const projectTypeData = [
    { type: 'Residential', count: 45, percentage: 60 },
    { type: 'Commercial', count: 18, percentage: 24 },
    { type: 'Landscape', count: 12, percentage: 16 }
  ];

  const [activeChart, setActiveChart] = React.useState('views');

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-brand-moderate">
          <p className="font-body font-medium text-text-primary mb-1">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.dataKey === 'views' ? 'Portfolio Views' : 'Inquiries'}: {entry?.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg shadow-brand-subtle border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-headline font-semibold text-text-primary">
            Analytics Overview
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveChart('views')}
              className={`px-3 py-1 rounded-md text-sm font-body font-medium transition-brand-fast ${
                activeChart === 'views' ?'bg-accent text-white' :'text-text-secondary hover:text-text-primary hover:bg-muted'
              }`}
            >
              Portfolio Views
            </button>
            <button
              onClick={() => setActiveChart('projects')}
              className={`px-3 py-1 rounded-md text-sm font-body font-medium transition-brand-fast ${
                activeChart === 'projects' ?'bg-accent text-white' :'text-text-secondary hover:text-text-primary hover:bg-muted'
              }`}
            >
              Project Types
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        {activeChart === 'views' ? (
          <div>
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name="Eye" size={20} className="text-blue-500 mr-2" />
                    <span className="text-sm font-body text-text-secondary">Total Views</span>
                  </div>
                  <p className="text-2xl font-headline font-semibold text-text-primary">
                    11,797
                  </p>
                  <p className="text-sm text-green-500 flex items-center justify-center mt-1">
                    <Icon name="TrendingUp" size={14} className="mr-1" />
                    +24% vs last period
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name="MessageSquare" size={20} className="text-orange-500 mr-2" />
                    <span className="text-sm font-body text-text-secondary">Inquiries</span>
                  </div>
                  <p className="text-2xl font-headline font-semibold text-text-primary">
                    103
                  </p>
                  <p className="text-sm text-green-500 flex items-center justify-center mt-1">
                    <Icon name="TrendingUp" size={14} className="mr-1" />
                    +18% vs last period
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon name="Target" size={20} className="text-green-500 mr-2" />
                    <span className="text-sm font-body text-text-secondary">Conversion Rate</span>
                  </div>
                  <p className="text-2xl font-headline font-semibold text-text-primary">
                    0.87%
                  </p>
                  <p className="text-sm text-green-500 flex items-center justify-center mt-1">
                    <Icon name="TrendingUp" size={14} className="mr-1" />
                    +0.12% vs last period
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full h-80" aria-label="Portfolio Views and Inquiries Chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={portfolioViewsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#666666"
                    fontSize={12}
                    fontFamily="Inter, sans-serif"
                  />
                  <YAxis 
                    stroke="#666666"
                    fontSize={12}
                    fontFamily="Inter, sans-serif"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#B8860B" 
                    strokeWidth={3}
                    dot={{ fill: '#B8860B', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#B8860B', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="inquiries" 
                    stroke="#2C2C2C" 
                    strokeWidth={3}
                    dot={{ fill: '#2C2C2C', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#2C2C2C', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p className="text-sm font-body text-text-secondary mb-4">
                Project distribution by type (Last 6 months)
              </p>
              <div className="space-y-4">
                {projectTypeData?.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded mr-3 ${
                        index === 0 ? 'bg-blue-500' : 
                        index === 1 ? 'bg-orange-500' : 'bg-green-500'
                      }`} />
                      <span className="font-body text-text-primary">{item?.type}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-body text-text-secondary">
                        {item?.count} projects
                      </span>
                      <span className="text-sm font-body font-medium text-text-primary">
                        {item?.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full h-80" aria-label="Project Types Distribution Chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectTypeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                  <XAxis 
                    dataKey="type" 
                    stroke="#666666"
                    fontSize={12}
                    fontFamily="Inter, sans-serif"
                  />
                  <YAxis 
                    stroke="#666666"
                    fontSize={12}
                    fontFamily="Inter, sans-serif"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="count" 
                    fill="#B8860B"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsChart;