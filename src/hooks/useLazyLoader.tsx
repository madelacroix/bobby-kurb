import { useState, useEffect } from "react";

const useLazyLoader = (src: string): string | null => {
  const [sourceLoaded, setSourceLoaded] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);

  }, [src]);

  return sourceLoaded;
};

export default useLazyLoader;