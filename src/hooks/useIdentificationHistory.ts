import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export interface IdentificationHistoryItem {
  id: string;
  image_url: string;
  plant_name: string;
  confidence: number;
  identified_at: string;
  details: any;
}

export const useIdentificationHistory = () => {
  const [history, setHistory] = useState<IdentificationHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No authenticated user');

      const { data, error: fetchError } = await supabase
        .from('plant_identification_history')
        .select('*')
        .eq('user_id', user.id)
        .order('identified_at', { ascending: false });

      if (fetchError) throw fetchError;
      setHistory(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch history');
    } finally {
      setLoading(false);
    }
  };

  const addToHistory = async (
    imageUrl: string,
    plantName: string,
    confidence: number,
    details: any = {}
  ) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No authenticated user');

      const { error: insertError } = await supabase
        .from('plant_identification_history')
        .insert({
          user_id: user.id,
          image_url: imageUrl,
          plant_name: plantName,
          confidence,
          details
        });

      if (insertError) throw insertError;
      await fetchHistory();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add to history');
    }
  };

  const clearHistory = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No authenticated user');

      const { error: deleteError } = await supabase
        .from('plant_identification_history')
        .delete()
        .eq('user_id', user.id);

      if (deleteError) throw deleteError;
      setHistory([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to clear history');
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return {
    history,
    loading,
    error,
    addToHistory,
    clearHistory,
    refreshHistory: fetchHistory
  };
};