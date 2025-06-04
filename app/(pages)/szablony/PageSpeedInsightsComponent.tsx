"use client";
import { useEffect, useState } from "react";

type CircularProgressType = {
  score: number;
  label: string;
  size: number;
};

const CircularProgress = ({
  score,
  label,
  size = 80,
}: CircularProgressType) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (animatedScore / 100) * circumference;

  const getColor = (score: number) => {
    if (score >= 90) return "#0CCE6B"; // Zielony
    if (score >= 50) return "#FFA400"; // Żółty
    return "#FF5A5A"; // Czerwony
  };

  const getBackgroundColor = (score: number) => {
    if (score >= 90) return "rgba(12, 206, 107, 0.1)";
    if (score >= 50) return "rgba(255, 164, 0, 0.1)";
    return "rgba(255, 90, 90, 0.1)";
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: getBackgroundColor(score),
        }}
      >
        <svg
          width={size}
          height={size}
          className="absolute -rotate-90 transform"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={getColor(score)}
            strokeWidth="4"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 2s ease-out, stroke 0.3s ease",
            }}
          />
        </svg>
        <span
          className="z-10 text-lg font-bold"
          style={{ color: getColor(score) }}
        >
          {Math.round(animatedScore)}
        </span>
      </div>
      <div className="mt-2 text-center text-xs font-medium text-gray-600">
        {label}
      </div>
    </div>
  );
};

const PageSpeedInsights = ({
  performance = 0,
  accessibility = 0,
  bestPractices = 0,
  seo = 0,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-2 justify-items-center w-full gap-6 rounded-xl border bg-white p-4 md:grid-cols-4 ${className}`}
    >
      <CircularProgress score={performance} label="Wydajność" size={80} />
      <CircularProgress
        score={accessibility}
        label="Ułatwienia dostępu"
        size={80}
      />
      <CircularProgress
        score={bestPractices}
        label="Sprawdzone metody"
        size={80}
      />
      <CircularProgress score={seo} label="SEO" size={80} />
    </div>
  );
};

export default PageSpeedInsights;
