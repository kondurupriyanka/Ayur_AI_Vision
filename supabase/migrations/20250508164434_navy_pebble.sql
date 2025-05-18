/*
  # Add additional profile fields

  1. Changes
    - Add qualification field to profiles table
    - Add specialization field to profiles table
    - Add contact field to profiles table
    - Add website field to profiles table

  2. Security
    - Maintain existing RLS policies
*/

-- Add new columns if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'qualification'
  ) THEN
    ALTER TABLE profiles ADD COLUMN qualification text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'specialization'
  ) THEN
    ALTER TABLE profiles ADD COLUMN specialization text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'contact'
  ) THEN
    ALTER TABLE profiles ADD COLUMN contact text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'website'
  ) THEN
    ALTER TABLE profiles ADD COLUMN website text;
  END IF;
END $$;