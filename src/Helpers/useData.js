import { useState, useEffect } from 'react';

function useFetchCountries(url) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCountries();
  }, [url]);

  return [countries, setCountries];
};

export { useFetchCountries };