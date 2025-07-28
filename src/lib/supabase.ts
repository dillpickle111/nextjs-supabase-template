import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tzyckqleaiarujmnficn.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6eWNrcWxlYWlhcnVqbW5maWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MzI0MjEsImV4cCI6MjA2OTMwODQyMX0.9WUPensK9PT3oH6XW1ofx3fMv875N5JgZ08C8rcRRI8'

// Client-side Supabase client
export const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey)

// Server-side Supabase client
export async function createClient() {
  const cookieStore = await cookies()
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tzyckqleaiarujmnficn.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6eWNrcWxlYWlhcnVqbW5maWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MzI0MjEsImV4cCI6MjA2OTMwODQyMX0.9WUPensK9PT3oH6XW1ofx3fMv875N5JgZ08C8rcRRI8',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
} 