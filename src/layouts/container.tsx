"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  ...others
}) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);
  return (
    <div className={` ${className} `} {...others}>
      {children}
    </div>
  );
};
