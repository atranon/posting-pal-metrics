
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env file');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type SocialPost = {
  id: string;
  user_id: string;
  content: string;
  image_url?: string;
  scheduled_for: string;
  platforms: string[];
  status: 'draft' | 'queued' | 'sent' | 'failed';
  created_at: string;
};

export type SocialAccount = {
  id: string;
  user_id: string;
  platform: string;
  access_token: string;
  platform_user_id: string;
  username: string;
  created_at: string;
};
