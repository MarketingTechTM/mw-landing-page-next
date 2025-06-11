"use client";
import {  useEffect } from "react";

export function useSwipe({ onSwipeLeft, onSwipeRight }: {
  onSwipeLeft?: ()=> void,
  onSwipeRight?: ()=> void
}) {
  useEffect(() => {
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX;

      if (diff > 50) {
        if(onSwipeRight) onSwipeRight();
      } else if (diff < -50) {
        if(onSwipeLeft)  onSwipeLeft();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight]);
}
