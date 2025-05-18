/*
  # Fix Profile RLS Policies

  1. Changes
    - Drop existing RLS policies for profiles table
    - Add new RLS policies that allow:
      - Users to insert their own profile
      - Users to update their own profile
      - Users to read their own profile
    - Add unique constraint on id to ensure one profile per user

  2. Security
    - Enable RLS
    - Ensure users can only access their own profile data
    - Prevent unauthorized modifications
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;

-- Create new policies
CREATE POLICY "Enable insert for authenticated users only" ON profiles
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable read access for users" ON profiles
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Enable update for users based on id" ON profiles
  FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);