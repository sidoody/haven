import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey
  });
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

export type WaitlistSignup = {
  name: string;
  email: string;
  phone?: string;
  reason?: string;
  source?: string;
};

export async function addToWaitlist(data: WaitlistSignup) {
  // Check if Supabase is configured
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase is not configured. Please check your environment variables.');
  }

  const { data: result, error } = await supabase
    .from('waitlist_signups')
    .insert([data])
    .select();

  if (error) {
    console.error('Supabase error details:', {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code
    });
    throw new Error(error.message || 'Failed to add to waitlist');
  }

  return result;
}

