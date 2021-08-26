import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const locationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    //Set up eventListener for event emitted on clicking 'Link'
    window.addEventListener("popstate", locationChange);

    return () => {
      window.removeEventListener("popstate", locationChange);
    };
  }, []);//UseEffect ends here

  return currentPath === path ? children : null;
};

export default Route;
