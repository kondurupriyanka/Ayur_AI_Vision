import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { UserProfile } from '../types';

export const useProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const createProfile = async (userId: string) => {
    const defaultProfile = {
      id: userId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      full_name: '',
      avatar_url: '',
      preferences: {},
    };

    const { data, error: insertError } = await supabase
      .from('profiles')
      .insert([defaultProfile])
      .select()
      .single();

    if (insertError) throw insertError;
    return data;
  };

  const fetchProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setError('No authenticated user');
        setLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (fetchError) {
        // If no profile found, create one
        if (fetchError.message.includes('rows returned')) {
          const newProfile = await createProfile(user.id);
          setProfile(newProfile);
        } else {
          throw fetchError;
        }
      } else {
        setProfile(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No authenticated user');

      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (updateError) throw updateError;

      // Add to user history
      await supabase.from('user_history').insert({
        user_id: user.id,
        action_type: 'profile_update',
        action_details: updates
      });

      await fetchProfile();
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'An error occurred' };
    }
  };

  return {
    profile,
    loading,
    error,
    updateProfile,
    refreshProfile: fetchProfile
  };
};