/*
  # Add user history functionality

  1. New Tables
    - `user_history`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `action_type` (text)
      - `action_details` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS
    - Add policies for authenticated users to manage their history
*/

CREATE TABLE IF NOT EXISTS user_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  action_type text NOT NULL,
  action_details jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_history ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own history"
  ON user_history
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add history entries"
  ON user_history
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);