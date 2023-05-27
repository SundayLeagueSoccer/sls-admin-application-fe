import { useEffect, useState } from "react";
import axios from "../api/axios";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  const fetchData = async (url: string, isMounted: boolean) => {
    try {
      const response = await axios.get(url, {
        signal: controller.signal,
      });
      const data = await response.data;
      isMounted && setData(data);
      setLoading(false);
      setError(null);
    } catch (error: any) {
      const message = error.message ? error.message : "Something went wrong";
      setError(message);
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    fetchData(url, isMounted);

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
