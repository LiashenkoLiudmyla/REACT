import { useEffect, useState } from "react";

export const useFetchingData = (url) => {
  const [data, setData] = useState([]);
  const [lsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error({ message: "Something went wrong" });
      })

      .then((json) => setData(json.results))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, lsLoading, error };
};
