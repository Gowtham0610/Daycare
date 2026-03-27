// Simple localStorage-based storage solution
// Can be upgraded to Supabase when environment variables are configured

const hasSupabase = false; // Using localStorage for now

console.log('[v0] Using localStorage for visit schedules storage.');

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



export const addVisitSchedule = async (visit: VisitSchedule) => {
  // Use localStorage as fallback if Supabase is not available
  if (!hasSupabase || !supabase) {
    const existingSubmissions = JSON.parse(localStorage.getItem('visitSchedules') || '[]');
    const newSubmission = {
      ...visit,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
    };
    existingSubmissions.push(newSubmission);
    localStorage.setItem('visitSchedules', JSON.stringify(existingSubmissions));
    console.log('[v0] Visit scheduled (localStorage):', newSubmission);
    return [newSubmission];
  }

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
      console.error('[v0] Error adding visit schedule to Supabase:', error);
      throw error;
    }

    console.log('[v0] Visit scheduled (Supabase):', data);
    return data;
  } catch (error) {
    console.error('[v0] Failed to add visit schedule:', error);
    throw error;
  }
};

export const getVisitSchedules = async () => {
  // Use localStorage as fallback if Supabase is not available
  if (!hasSupabase || !supabase) {
    const schedules = JSON.parse(localStorage.getItem('visitSchedules') || '[]');
    // Sort by most recent first
    schedules.sort((a: any, b: any) => 
      new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
    );
    console.log('[v0] Fetched schedules (localStorage):', schedules);
    return schedules;
  }

  try {
    const { data, error } = await supabase
      .from('visit_schedules')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[v0] Error fetching visit schedules:', error);
      return [];
    }

    console.log('[v0] Fetched schedules (Supabase):', data);
    return data || [];
  } catch (error) {
    console.error('[v0] Failed to fetch visit schedules:', error);
    return [];
  }
};

export const deleteVisitSchedule = async (id: string) => {
  // Use localStorage as fallback if Supabase is not available
  if (!hasSupabase || !supabase) {
    const schedules = JSON.parse(localStorage.getItem('visitSchedules') || '[]');
    const filtered = schedules.filter((s: any) => String(s.id) !== String(id));
    localStorage.setItem('visitSchedules', JSON.stringify(filtered));
    console.log('[v0] Schedule deleted (localStorage):', id);
    return true;
  }

  try {
    const { error } = await supabase
      .from('visit_schedules')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('[v0] Error deleting visit schedule:', error);
      throw error;
    }

    console.log('[v0] Schedule deleted (Supabase):', id);
    return true;
  } catch (error) {
    console.error('[v0] Failed to delete visit schedule:', error);
    throw error;
  }
};
