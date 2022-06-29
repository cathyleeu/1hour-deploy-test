import { useRef, useEffect } from "react";
import { useResponsiveContext } from "@components/Layout/ResponsiveContext";

const MAX_WIDTH = 1024;

export default function useResizeObserver() {
  const { setIsMobileScreen } = useResponsiveContext();
  const elemRef = useRef<null | Element| undefined>(null);

  const setElem = (elem:any) => {
    elemRef.current = elem;
  }

  useEffect(() => {
    if (!elemRef.current) return;
    const ob = new ResizeObserver(([entry]:ResizeObserverEntry[]) => {
      let width = entry.contentRect.width;

      setIsMobileScreen(width < MAX_WIDTH)
      
    })
    ob.observe(elemRef.current);
    return () => {
      ob.disconnect();
    }
  }, [elemRef.current]);

  return [setElem]
}