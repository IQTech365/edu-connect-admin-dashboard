import React, { PropsWithChildren, useEffect, useState } from "react";

type TProps = PropsWithChildren & {
  isOpen: boolean;
};

const RightSideDrawer: React.FC<TProps> = ({ children, isOpen }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Trigger animation after a tiny delay to allow mounting first
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      // Wait for the animation to complete before hiding the drawer
      const timer = setTimeout(() => setIsVisible(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`w-full fixed z-50 min-h-screen top-0 md:w-[50%] bg-white shadow-l-md transition-all duration-700 ease-in-out ${
        animate ? "right-0 opacity-100" : "-right-[40%] opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default RightSideDrawer;
