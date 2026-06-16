'use client';
import { useId } from "react";

const Star = ({ variant, color, width, height, showRemaining = false }: { variant: "filled" | "empty" | "half"; color: string; width: any; height: any; showRemaining: boolean;}) => {
  const id = useId();

  let c1, c2, colorfill, stroke;

  let colorPrimary = "#E8300A";
  let colorSecondary = "#F5A623";
  let colorAccent = "#F5A623";
  if (color === "text-white") {
    colorfill = "#FFFFFF";
  } else if (color === "text-primary") {
    colorfill = colorPrimary;
  } else if (color === "text-secondary") {
    colorfill = colorSecondary;
  } else if (color === "text-accent") {
    colorfill = colorAccent;
  } else {
    colorfill = "#000000"
  }

  if (variant === "filled") {
    c1 = colorfill;
    c2 = colorfill;
  } else if (variant === "empty") {
    c1 = "none";
    c2 = "none";
    if (showRemaining) {
    stroke = colorfill
    };
  } else if (variant === "half") {
    c1 = colorfill;
    c2 = "none";
    if (showRemaining) {
    stroke = colorfill
    };
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id}>
          <stop offset="50%" stopColor={c1} />
          <stop offset="50%" stopColor={c2} />
        </linearGradient>
      </defs>
      <path
        d="M10 0.148438L12.935 6.14144L19.5 7.10844L14.75 11.7704L15.871 18.3564L10 15.2454L4.129 18.3564L5.25 11.7704L0.5 7.10844L7.064 6.14144L10 0.148438Z"
        fill={`url(#${id})`} 
        stroke={stroke}
      />
    </svg>
  );
};

const Review = ({ rating, max = 5, color='', width, height, className='', showRemaining=false }: { rating?: number; max?: number; color?: string; width: string; height: string; className: string; showRemaining: boolean; }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: Math.floor(rating) }, (_, i) => (
        <Star key={i} variant="filled" color={color} width={width} height={height} showRemaining={showRemaining} />
      ))}
      {!Number.isInteger(rating) && <Star variant="half" color={color} width={width} height={height} showRemaining={showRemaining} />}
      {Array.from({ length: max - Math.ceil(rating) }, (_, i) => (
        <Star key={i} variant="empty" color={color} width={width} height={height} showRemaining={showRemaining} />
      ))}
    </div>
  );
};

export default Review