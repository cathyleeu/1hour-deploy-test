import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  className?: string;
  children: React.ReactNode;
  el?: string;
}

const Portal = ({ className, children, el = 'div' }: Props) => {
  const [container] = useState(() => {
    // This will be executed only on the initial render
    // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    return document.createElement(el);
  });

  useEffect(() => {
    if (container) {
      if (className) {
        container.classList.add(className);
      }
      document.body.appendChild(container);
    }

    return () => {
      document.body.removeChild(container);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(children, container);
};

export default Portal;
