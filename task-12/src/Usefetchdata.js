import { useState, useEffect, useCallback } from "react";
import axios from "axios";

/**
 * Reusable hook for GET requests.
 * @param {string} url - API endpoint to fetch
 * @returns {{ data: any, loading: boolean, error: string|null, refetch: Function }}
 */
function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(url, { signal: controller.signal });
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) return; // request cancelled on unmount

        if (err.response) {
          setError(`Server error ${err.response.status}: ${err.response.statusText || "Request failed"}`);
        } else if (err.request) {
          setError("Network error: could not reach the server. Check your connection.");
        } else {
          setError(err.message);
        }
        setData(null);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchData();

    // Cleanup: cancel the request if the component unmounts or url changes
    return () => controller.abort();
  }, [url, reloadKey]);

  const refetch = useCallback(() => setReloadKey((k) => k + 1), []);

  return { data, loading, error, refetch };
}

export default useFetchData;