// components/Social_Connector.tsx
"use client";

import React from "react";
import IconBadge from "./Icon_Badge";

export interface SocialItem {
  icon: React.ReactNode;
  href?: string;
  label?: string;
}

interface SocialConnectorProps {
  items: SocialItem[];
  indentStep?: number;
  direction?: "row" | "column";
  className?: string;
}

const SocialConnector: React.FC<SocialConnectorProps> = ({
  items,
  indentStep = 24,
  direction = "column",
  className = "",
}) => {
  if (direction === "row") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {items.map((item, i) => {
          const content = <IconBadge icon={item.icon} />;
          return item.href ? (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
              {content}
            </a>
          ) : (
            <div key={i}>{content}</div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`relative flex flex-col gap-4 sm:gap-5 md:gap-6 ${className}`}>
      <svg
        className="absolute -z-10 h-full w-full overflow-visible pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        // components/Social_Connector.tsx — only the column-direction SVG path needs updating
        <path
          d="M 2 5 L 8 12 L 30 50 L 55 88 L 90 95"
          stroke="#ef4444"
          strokeWidth="0.6"
          strokeOpacity="0.7"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
        />
        <circle cx="2" cy="5" r="1" fill="#ef4444" />
        <circle cx="90" cy="95" r="1" fill="#ef4444" />
      </svg>

      {items.map((item, i) => {
        const content = <IconBadge icon={item.icon} />;
        return (
          <div key={i} style={{ marginLeft: `${indentStep * i}px` }}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="block">
                {content}
              </a>
            ) : (
              content
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SocialConnector;