import { useEffect, useState } from 'react';

export const useWidth = () => {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.outerWidth);
  }, []);

  return width;
};
