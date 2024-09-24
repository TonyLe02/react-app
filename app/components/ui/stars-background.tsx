/* eslint-disable */

"use client";
import { cn } from "../../lib/utils";
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  useCallback,
} from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00029,
  allStarsTwinkle = true,
  twinkleProbability = 0.929,
  minTwinkleSpeed = 0.529,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;
        const twinkleSpeed = shouldTwinkle
          ? Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) +
            minTwinkleSpeed
          : null;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          opacity: Math.random(),
          twinkleSpeed,
        };
      });
    },
    [
      starDensity,
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
    ]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        const handleResize = () => {
          const devicePixelRatio = window.devicePixelRatio || 1;
          canvas.width = window.innerWidth * devicePixelRatio;
          canvas.height = window.innerHeight * devicePixelRatio;
          canvas.style.width = `${window.innerWidth}px`;
          canvas.style.height = `${window.innerHeight}px`;
          context.scale(devicePixelRatio, devicePixelRatio);
          setStars(generateStars(canvas.width, canvas.height));
        };

        const throttledResize = throttle(handleResize, 200);
        handleResize();
        window.addEventListener("resize", throttledResize);

        return () => {
          window.removeEventListener("resize", throttledResize);
        };
      }
    }
  }, [generateStars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        const render = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          stars.forEach((star) => {
            context.beginPath();
            context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
            context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            context.fill();
          });
          requestAnimationFrame(render);
        };

        render();
      }
    }
  }, [stars]);

  return (
    <canvas ref={canvasRef} className={cn("absolute inset-0", className)} />
  );
};

// Utility function to throttle the resize event
const throttle = (func: () => void, limit: number) => {
  let lastFunc: number;
  let lastRan: number;
  return function (this: any) {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args as any);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = window.setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args as any);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
