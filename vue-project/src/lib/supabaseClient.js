import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://iyeixawrxvzmoxxbpzxe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5ZWl4YXdyeHZ6bW94eGJwenhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwMzY5MjcsImV4cCI6MTk5ODYxMjkyN30.9FM4Ttf_ephzJkxIhH5Q9kpG0oYSdkw7AvTW-On89lk'
)

