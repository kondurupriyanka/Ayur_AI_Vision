/*
  # Add favorite plants functionality

  1. New Tables
    - `favorite_plants`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `plant_id` (text)
      - `plant_name` (text)
      - `added_at` (timestamp)

  2. Security
    - Enable RLS
    - Add policies for authenticated users to manage their favorites
*/

-- Create favorite_plants table
CREATE TABLE IF NOT EXISTS favorite_plants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  plant_id text NOT NULL,
  plant_name text NOT NULL,
  added_at timestamptz DEFAULT now(),
  UNIQUE(user_id, plant_id)
);

-- Enable RLS
ALTER TABLE favorite_plants ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own favorites"
  ON favorite_plants
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add favorites"
  ON favorite_plants
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove own favorites"
  ON favorite_plants
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);