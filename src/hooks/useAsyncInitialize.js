import { useEffect, useState } from 'react';

export const useAsyncInitialize = (func, deps=[]) => {
  const [state, setState] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await func();
      setState(result);
    };

    fetchData();
  }, deps);

  return state;
}