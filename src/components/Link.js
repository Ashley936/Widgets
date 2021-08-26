import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) return; //Enable default behavior of opening new tab

    e.preventDefault();
    window.history.pushState({}, "", href); //Changes URL

    const navEvent = new PopStateEvent("popstate"); 
    window.dispatchEvent(navEvent); //A new event in emitted
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
