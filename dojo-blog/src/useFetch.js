import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not Fetch the Data for that Resouce");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
