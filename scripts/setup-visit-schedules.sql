-- Create visit_schedules table for storing schedule visit submissions
CREATE TABLE IF NOT EXISTS visit_schedules (
  id BIGSERIAL PRIMARY KEY,
  parent_name VARCHAR(255) NOT NULL,
  parent_phone VARCHAR(20) NOT NULL,
  child_name VARCHAR(255) NOT NULL,
  child_age INTEGER NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(50) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_visit_schedules_created_at ON visit_schedules(created_at DESC);

-- Optional: Add email field if needed in the future
-- ALTER TABLE visit_schedules ADD COLUMN email VARCHAR(255);
