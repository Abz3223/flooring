export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  flooring_type?: string;
  message?: string;
  source_page?: string;
  status: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  flooring_type?: string;
  featured: boolean;
  project_value?: number;
  verified: boolean;
  photos?: string[];
  response?: string;
  helpful_count: number;
  gmb_synced: boolean;
  neighborhood?: string;
  created_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  sort_order: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  meta_description?: string;
  content: string;
  featured_image?: string;
  author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  slug: string;
  description?: string;
  latitude?: number;
  longitude?: number;
  postal_codes?: string;
  featured: boolean;
  average_home_value?: number;
  target_demographic?: string;
  meta_title?: string;
  meta_description?: string;
  created_at: string;
}

export interface AffluentNeighborhood {
  id: string;
  name: string;
  slug: string;
  description?: string;
  average_home_value: number;
  postal_codes?: string[];
  latitude?: number;
  longitude?: number;
  featured: boolean;
  meta_title?: string;
  meta_description?: string;
  content?: string;
  landmarks?: string[];
  demographics?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface ReviewRequest {
  id: string;
  lead_id?: string;
  email: string;
  phone?: string;
  status: string;
  token: string;
  sent_at?: string;
  completed_at?: string;
  created_at: string;
}
