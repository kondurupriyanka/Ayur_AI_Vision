/*
  # Add user activity history table for plant identification

  1. New Tables
    - `plant_identification_history`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `image_url` (text)
      - `plant_name` (text)
      - `confidence` (numeric)
      - `identified_at` (timestamp)
      - `details` (jsonb)

  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS public.plant_identification_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    image_url TEXT,
    plant_name TEXT NOT NULL,
    confidence NUMERIC CHECK (confidence >= 0 AND confidence <= 100),
    identified_at TIMESTAMPTZ DEFAULT now(),
    details JSONB DEFAULT '{}'::jsonb,
    CONSTRAINT valid_confidence CHECK (confidence >= 0 AND confidence <= 100)
);

-- Enable Row Level Security
ALTER TABLE public.plant_identification_history ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own identification history"
    ON public.plant_identification_history
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can add identification history"
    ON public.plant_identification_history
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own identification history"
    ON public.plant_identification_history
    FOR DELETE
    TO authenticated
    USING (auth.uid() = user_id);