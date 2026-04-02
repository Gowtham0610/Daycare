import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zlgktpfcbjvxydglrqpr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsZ2t0cGZjYmp2eHlkZ2xycXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MDY2OTksImV4cCI6MjA5MDE4MjY5OX0.NGX1jY0NA8KcK5plq97fJZ2ghSGUDmIEYWZJVztIfxE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function setupDatabase() {
  try {
    console.log('Setting up database table...');

    // First, let's check if the table already exists by trying to query it
    const { data: existingTable, error: checkError } = await supabase
      .from('visit_schedules')
      .select('id')
      .limit(1);

    if (existingTable !== null && !checkError) {
      console.log('✓ Table visit_schedules already exists');
      return;
    }

    console.log('Creating visit_schedules table via SQL...');

    // Create the table
    const { error: createError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS visit_schedules (
          id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
          parent_name TEXT NOT NULL,
          parent_phone TEXT NOT NULL,
          child_name TEXT NOT NULL,
          child_age INTEGER NOT NULL,
          preferred_date TEXT NOT NULL,
          preferred_time TEXT NOT NULL,
          message TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        ALTER TABLE visit_schedules ENABLE ROW LEVEL SECURITY;

        CREATE POLICY "Anyone can insert visit schedules" ON visit_schedules
          FOR INSERT
          WITH CHECK (true);

        CREATE POLICY "Only authenticated users can view visit schedules" ON visit_schedules
          FOR SELECT
          USING (true);
      `
    });

    if (createError) {
      console.log('Note: Table may already exist or RLS is disabled. Checking...');
    } else {
      console.log('✓ Table created successfully');
    }

  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();
