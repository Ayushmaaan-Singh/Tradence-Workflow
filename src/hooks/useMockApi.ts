import { useState, useEffect } from 'react';
import { fetchAutomations } from '../services/mockApi';
import type { AutomationTask } from '../types/workflow.types';

export const useMockApi = () => {
  const [automations, setAutomations] = useState<AutomationTask[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadAutomations = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAutomations();
        if (isMounted) {
          setAutomations(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to fetch automations');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadAutomations();
    return () => {
      isMounted = false;
    };
  }, []);

  return { automations, loading, error };
};
