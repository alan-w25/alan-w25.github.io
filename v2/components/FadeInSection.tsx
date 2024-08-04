"use client";
import React, { useState, useEffect, useRef, CSSProperties, FC } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  fadeDuration?: number; // Optional prop to allow fade duration customization
  slideDuration?: number; // Optional prop to allow slide duration customization
  distance?: string; // Optional prop for slide distance (e.g., "20vh")
}

const FadeInSection: FC<FadeInSectionProps> = ({
  children,
  fadeDuration = 600, // Default fade duration in ms
  slideDuration = 1200, // Default slide duration in ms
  distance = "20", // Default slide distance
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  const transitionStyle: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : `translateY(${distance})`,
    transition: `opacity ${fadeDuration}ms ease-in-out, transform ${slideDuration}ms ease-in-out`,
    visibility: isVisible ? "visible" : "hidden", // Matches the visibility toggle
    willChange: "opacity, transform", // Optimize performance
  };

  return (
    <div className="fade-in-section" style={transitionStyle} ref={domRef}>
      {children}
    </div>
  );
};

export default FadeInSection;