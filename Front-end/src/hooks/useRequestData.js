import axios from 'axios';
import { useEffect, useState } from 'react';

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);

  const requestApi = async (url) => {
    try {
      const response = await axios.get(url, {});
      setData(response.data.dados);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestApi(url);
  }, [url]);

  return [data];
};
