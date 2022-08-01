import React, { useState, useEffect } from "react";

/**
 * @param {String} url
 * @param {Object} dependencies
 */

export const useFetch = (url, dependencies) => {
  const [isLoading, setLoading] = useState(false);
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length) {
          setLoading(false);
          setFetchData(data);
        }
      })
      .catch((err) => {
        console.log("Error from API" + err);
        setLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchData];
};
