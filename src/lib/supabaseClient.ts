import { createClient } from '@supabase/supabase-js';

// Use environment variables from Vercel/deployment
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Using fallback.');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

export interface VisitSchedule {
  id?: string;
  parent_name: string;
  parent_phone: string;
  child_name: string;
  child_age: number;
  preferred_date: string;
  preferred_time: string;
  message: string;
  created_at?: string;
}

// Create the table if it doesn't exist
export const initializeTable = async () => {
  try {
    // Check if table exists by trying to query it
    const { error } = await supabase
      .from('visit_schedules')
      .select('id')
      .limit(1);

    if (error && error.code === 'PGRST116') {
      // Table doesn't exist, create it
      console.log('Creating visit_schedules table...');
      const { error: createError } = await supabase.rpc('create_visits_table_if_not_exists');
      
      if (createError) {
        console.warn('Could not create table via RPC, will use direct insert which will fail gracefully:', createError);
      }
    }
  } catch (error) {
    console.error('Error initializing table:', error);
  }
};

export const addVisitSchedule = async (visit: VisitSchedule) => {
  try {
    const { data, error } = await supabase
      .from('visit_schedules')
      .insert([
        {
          parent_name: visit.parent_name,
          parent_phone: visit.parent_phone,
          child_name: visit.child_name,
          child_age: visit.child_age,
          preferred_date: visit.preferred_date,
          preferred_time: visit.preferred_time,
          message: visit.message,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Error adding visit schedule:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to add visit schedule:', error);
    throw error;
  }
};

export const getVisitSchedules = async () => {
  try {
    const { data, error } = await supabase
      .from('visit_schedules')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching visit schedules:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch visit schedules:', error);
    return [];
  }
};

export const deleteVisitSchedule = async (id: string) => {
  try {
    const { error } = await supabase
      .from('visit_schedules')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting visit schedule:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Failed to delete visit schedule:', error);
    throw error;
  }
};
