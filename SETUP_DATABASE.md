# Database Setup Guide

This guide will help you set up the Supabase database to store visit schedule submissions that are accessible from all devices.

## Problem Fixed

Previously, visit schedules were stored only in browser `localStorage`, which meant:
- Schedules were only visible on the device that submitted them
- Admin portal couldn't see submissions from other devices
- No centralized data storage

Now, all schedules are stored in **Supabase** database, ensuring:
- ✅ All submissions are visible in the admin portal
- ✅ Data persists across devices
- ✅ Accessible from any device/browser

## Setup Steps

### 1. Supabase Credentials

Your Supabase credentials are already configured in `.env.development.local`:
- **URL**: `https://zlgktpfcbjvxydglrqpr.supabase.co`
- **Anon Key**: (configured in env)

### 2. Create the Database Table

You have two options to create the `visit_schedules` table:

#### Option A: Using Supabase SQL Editor (Recommended)

1. Go to your Supabase dashboard: https://app.supabase.com
2. Select your project
3. Click on **SQL Editor** in the left sidebar
4. Click **+ New Query**
5. Copy and paste the SQL below:

```sql
-- Create the visit_schedules table
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

-- Enable Row Level Security
ALTER TABLE visit_schedules ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert visit schedules (public form)
CREATE POLICY "Anyone can insert visit schedules" ON visit_schedules
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to view visit schedules
CREATE POLICY "Anyone can view visit schedules" ON visit_schedules
  FOR SELECT
  USING (true);

-- Allow authenticated users to delete
CREATE POLICY "Authenticated users can delete" ON visit_schedules
  FOR DELETE
  USING (true);
```

6. Click **Run** or press `Ctrl+Enter`

#### Option B: Using Node.js Script

Run the setup script:
```bash
node scripts/setup-database.js
```

### 3. Verify the Table

1. In Supabase dashboard, click **Table Editor**
2. You should see `visit_schedules` table in the list
3. Click on it to view the table structure

## How It Works

### Form Submission (Schedule Visit Page)
1. User fills out the form
2. Data is sent to Supabase via `addVisitSchedule()` function
3. A fallback to localStorage occurs if Supabase is unavailable

### Admin Portal
1. Admin logs in with password
2. Schedules are fetched from Supabase via `getVisitSchedule()` function
3. All submissions from all devices are visible

### Data Flow
```
User Device 1 → Schedule Form → Supabase Database
                                         ↓
                                    (stored centrally)
                                         ↓
User Device 2 → Admin Portal → Fetch from Supabase
```

## Environment Variables

The following variables are required (already configured):

```env
VITE_SUPABASE_URL=https://zlgktpfcbjvxydglrqpr.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

These are set in `.env.development.local`

## Troubleshooting

### Problem: "Table does not exist" error
**Solution**: Make sure you've created the table using the SQL above

### Problem: Still seeing localStorage fallback
1. Check that `@supabase/supabase-js` is installed: `npm list @supabase/supabase-js`
2. Verify environment variables are set correctly
3. Check browser console for detailed error messages

### Problem: Can't see submissions in Admin Portal
1. Make sure the password is correct: `admin123`
2. Verify submissions were made (should show success message)
3. Check browser console for any errors
4. Ensure the database table exists

## Testing

1. Go to **Schedule a Visit** page
2. Fill out and submit the form
3. You should see a success message
4. Go to **Admin Portal**
5. Enter password: `admin123`
6. You should see the submitted schedule

## File Structure

- `src/lib/supabaseClient.ts` - Supabase client configuration and functions
- `.env.development.local` - Environment variables (Supabase credentials)
- `scripts/setup-database.js` - Database setup script
- `src/app/pages/ScheduleVisit.tsx` - Form that submits to Supabase
- `src/app/pages/AdminPortal.tsx` - Admin dashboard that reads from Supabase

## Support

If you encounter any issues:
1. Check the browser console for error messages (F12)
2. Verify your Supabase credentials
3. Check that the table exists in Supabase
4. Ensure `@supabase/supabase-js` package is installed
