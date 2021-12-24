import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VUE_SUPABASE_URL;
const supabaseKey = process.env.VUE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);