import { useState, useEffect } from 'react';
import { getViewport } from '../helpers/utils';

const useViewport = () => {
  const currentResolution = getViewport();

  const [resolution, setResolution] = useState(currentResolution);

  useEffect(() => {
    function handleResize() {
      setResolution(getViewport());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return resolution;
};

export default useViewport;
