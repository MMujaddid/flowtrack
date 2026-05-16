import { createClient } from '@supabase/supabase-js';

// Hardcode your actual credentials directly into the client setup
const supabaseUrl = 'https://qthgnuefbnmzwgxxvrfi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aGdudWVmYm5tendneHh2cmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NTk1MjMsImV4cCI6MjA4OTIzNTUyM30.TxgYlqsH65Fwl7umpUmwbsGJUpJyKhGfr1bomDR3RE0';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);