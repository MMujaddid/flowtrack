import { createClient } from '@supabase/supabase-js';

// Hardcode your actual credentials directly into the client setup
const supabaseUrl = 'https://qthgnuefbnmzwgxxvrfi.supabase.co';
const supabaseAnonKey = 'PASTE_YOUR_ACTUAL_VERY_LONG_ANON_KEY_HERE';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables!");
}

export const supabase = createClient('https://qthgnuefbnmzwgxxvrfi.supabase.co', 'sb_publishable_FBvMYl6OhjokZub93tpNTA_FK6HI-Yp');