'use server';

import { createClient } from '@supabase/supabase-js';

export async function joinWaitlist(formData: FormData) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  
  const supabase = createClient(supabaseUrl, supabaseKey);

  const email = formData.get('email') as string;
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const reason = formData.get('reason') as string;
  const source = formData.get('source') as string;

  const { error } = await supabase
    .from('waitlist_signups')
    .insert({
      email,
      name,
      phone: phone || null,
      reason: reason || null,
      source: source || null,
    });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

