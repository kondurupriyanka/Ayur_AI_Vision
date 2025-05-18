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
CREATE TABLE IF NOT EXISTS public.favorite_plants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    plant_id TEXT NOT NULL,
    plant_name TEXT NOT NULL,
    added_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(user_id, plant_id)
);

-- Enable Row Level Security
ALTER TABLE public.favorite_plants ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own favorites"
    ON public.favorite_plants
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can add favorites"
    ON public.favorite_plants
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove own favorites"
    ON public.favorite_plants
    FOR DELETE
    TO authenticated
    USING (auth.uid() = user_id);