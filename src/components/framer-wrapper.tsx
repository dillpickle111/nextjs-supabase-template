"use client";

import { ReactNode } from "react";

interface FramerWrapperProps {
  children: ReactNode;
  className?: string;
}

export function FramerWrapper({ children, className = "" }: FramerWrapperProps) {
  return (
    <div className={`framer-wrapper ${className}`}>
      {children}
    </div>
  );
} 