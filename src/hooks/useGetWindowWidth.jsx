import React, { useLayoutEffect, useState } from 'react'

export default function useGetWidth() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return { width };
}