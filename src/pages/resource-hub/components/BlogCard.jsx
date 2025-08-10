import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const BlogCard = ({ post, featured = false }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const readingTime = Math.ceil(post?.content?.split(' ')?.length / 200);

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-xl bg-card shadow-brand-moderate hover:shadow-brand-elevated transition-all duration-brand-normal">
        <div className="aspect-brand-hero overflow-hidden">
          <Image
            src={post?.image}
            alt={post?.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-brand-slow"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-white">
              {post?.category}
            </span>
            <span className="text-sm opacity-90">{formatDate(post?.publishedAt)}</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-headline font-semibold mb-3 leading-tight">
            {post?.title}
          </h2>
          <p className="text-base opacity-90 mb-4 line-clamp-2">
            {post?.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={post?.author?.avatar}
                alt={post?.author?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium">{post?.author?.name}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm opacity-90">
              <span className="flex items-center space-x-1">
                <Icon name="Clock" size={16} />
                <span>{readingTime} min read</span>
              </span>
              <Link
                to={`/blog/${post?.slug}`}
                className="inline-flex items-center space-x-1 text-accent hover:text-white transition-colors"
              >
                <span>Read More</span>
                <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-card rounded-lg shadow-brand-subtle hover:shadow-brand-moderate transition-all duration-brand-normal overflow-hidden">
      <div className="aspect-brand-portfolio overflow-hidden">
        <Image
          src={post?.image}
          alt={post?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-brand-slow"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
            {post?.category}
          </span>
          <span className="text-sm text-text-secondary">{formatDate(post?.publishedAt)}</span>
        </div>
        <h3 className="text-xl font-headline font-semibold mb-2 text-text-primary group-hover:text-accent transition-colors">
          {post?.title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-3">
          {post?.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={post?.author?.avatar}
              alt={post?.author?.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm text-text-secondary">{post?.author?.name}</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <span className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{readingTime} min</span>
            </span>
            <Link
              to={`/blog/${post?.slug}`}
              className="inline-flex items-center space-x-1 text-accent hover:text-primary transition-colors"
            >
              <span>Read</span>
              <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;