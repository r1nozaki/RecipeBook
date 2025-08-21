import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [process, setProcess] = useState('idle');

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    try {
      if (body && typeof body === 'object') {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }

      setProcess('loading');

      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status ${response.status}`);
      }

      const data = await response.json();
      setProcess('confirmed');
      return data;
    } catch (e) {
      setProcess('error');
      throw e;
    }
  }, []);

  const clearError = useCallback(() => {
    setProcess('idle');
  }, []);

  return { request, clearError, process, setProcess };
};
