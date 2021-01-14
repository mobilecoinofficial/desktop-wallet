import { useRef, useEffect } from 'react';
import type { MutableRefObject } from 'react';

// This hook is used to check that a component is mounted before calling
// setState hooks. We want to prevent memoryleaks from changing windows while
// using the app.
const useIsMountedRef = (): MutableRefObject<boolean> => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export default useIsMountedRef;
