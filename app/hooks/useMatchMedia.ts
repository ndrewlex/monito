import { useEffect, useState } from "react";

const getMatches = (query: string) => {
  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }

  return false;
};

export const useMatchMedia = (query: string, defaultValue?: boolean) => {
  const [matches, setMatches] = useState(defaultValue ?? false);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleResize = () => {
      setMatches(getMatches(query));
    };

    handleResize();
    matchMedia.addEventListener("change", handleResize);

    return () => {
      matchMedia.removeEventListener("change", handleResize);
    };
  }, [query]);

  return matches;
};
