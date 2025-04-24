
import { createClient } from '@supabase/supabase-js';

// Replace these placeholder values with your actual Supabase URL and anon key
// For production deployment, you should set these values in your hosting provider's environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
