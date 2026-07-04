import React, { useEffect } from 'react';
import { env } from '@/config/env';

export interface MetaProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogUrl?: string;
  noIndex?: boolean;
}

/**
 * Reusable SEO Meta configuration updater.
 */
export const Meta: React.FC<MetaProps> = ({
  title,
  description = 'Premium commercial general contracting and architectural building solutions.',
  keywords = 'commercial construction, architectural design, builder, developer, general contractor',
  ogImage = '/og-image.jpg', // Default OG image path
  ogType = 'website',
  ogUrl,
  noIndex = false,
}) => {
  const siteTitle = `${title} | ${env.appName}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = siteTitle;

    // Helper to find or create meta tag
    const updateMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', contentVal);
    };

    // 2. Update Standard Meta Tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // 3. Update Robots Indexing
    updateMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // 4. Update OpenGraph Metadata
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:url', ogUrl || window.location.href);

    // 5. Update Twitter Cards
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Clean up if component unmounts - optional, but standard
  }, [title, description, keywords, ogImage, ogType, ogUrl, noIndex, siteTitle]);

  return null; // Side-effect only component
};

Meta.displayName = 'Meta';
export default Meta;
