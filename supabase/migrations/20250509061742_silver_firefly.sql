/*
  # Add Search History Table

  1. New Tables
    - `search_history`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `plant_id` (text)
      - `plant_name` (text)
      - `search_date` (timestamptz)
      - `confidence` (numeric)

  2. Security
    - Enable RLS on `search_history` table
    - Add policies for:
      - Users can insert their own search history
      - Users can view their own search history
      - Users can delete their own search history
*/

CREATE TABLE IF NOT EXISTS public.search_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    plant_id TEXT NOT NULL,
    plant_name TEXT NOT NULL,
    search_date TIMESTAMPTZ DEFAULT now(),
    confidence NUMERIC NOT NULL CHECK (confidence >= 0 AND confidence <= 100)
);

-- Enable Row Level Security
ALTER TABLE public.search_history ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can insert own search history"
    ON public.search_history
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own search history"
    ON public.search_history
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own search history"
    ON public.search_history
    FOR DELETE
    TO authenticated
    USING (auth.uid() = user_id);