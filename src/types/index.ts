/**
 * Global TypeScript definitions
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface ProjectItem {
  title: string;
  category: 'Commercial' | 'Retail' | 'Industrial';
  location: string;
  badge: 'Completed' | 'In Progress';
  year: string;
  image: string;
  description: string;
}

export interface EstimatingSubmission {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}
