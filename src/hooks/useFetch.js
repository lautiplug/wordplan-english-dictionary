import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });
  
    if (!navigator.onLine) {
      setState({
        isLoading: false,
        hasError: "No internet connection.",
      });
      return;
    }
  
    try {
      const resp = await fetch(url);
      const data = await resp.json();
  
      if (!resp.ok) {
        throw new Error("No results found.");
      }
  
      if (data.resp === "False") {
        throw new Error("Something went wrong.");
      }
  
      setState({
        data,
        isLoading: false,
      });
    } catch (error) {
      setState({
        hasError: error.message,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};