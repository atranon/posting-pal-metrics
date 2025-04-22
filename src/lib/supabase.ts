
import { createClient } from '@supabase/supabase-js';

// These are public keys and do not need to be hidden
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
