import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(callback: () => void) => {
  const container = useRef<T>(null);
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleOutsideClicked = (e: MouseEvent) => {
      if (savedCallback.current == null) {
        return;
      }

      if (container.current && e.target != null) {
        if (!container.current.contains(e.target as Node)) {
          savedCallback.current();
        }
      }
    };
    document.addEventListener('click', handleOutsideClicked);
    return () => document.removeEventListener('click', handleOutsideClicked);
  }, []);

  return container;
};

export default useClickOutside;
