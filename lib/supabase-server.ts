import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://zebcvuevryukefxeokaf.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplYmN2dWV2cnl1a2VmeGVva2FmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTc5OTE5MCwiZXhwIjoyMDkxMzc1MTkwfQ.2-POGkTYo3v6HDusIgo7ZRc9t2UPYYhYa0tR-oY4CUg';

/**
 * Server-side Supabase client using the service role key.
 * Only use this in API routes and server actions — never expose to the browser.
 */
export function createServerSupabaseClient() {
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
    auth: { persistSession: false },
    global: {
      fetch: (url, options) => fetch(url, { ...options, cache: 'no-store' }),
    },
  });
}
