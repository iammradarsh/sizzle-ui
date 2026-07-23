"use client";

import { useEffect, useRef, useState } from "react";

interface ExpandableTextProps {
  text: string;
  lines?: number;
  className?: string;
  lineHeight?: number;
}

export default function ExpandableText({
  text,
  lines = 3,
  className = "",
  lineHeight = 20,
}: ExpandableTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  const [expanded, setExpanded] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (!textRef.current || expanded) {
      setDisplayText(text);
      return;
    }

    const element = textRef.current;
    const maxHeight = lines * lineHeight;

    element.innerText = text;

    if (element.scrollHeight <= maxHeight) {
      setDisplayText(text);
      setIsTruncated(false);
      return;
    }

    setIsTruncated(true);

    let start = 0;
    let end = text.length;
    let result = text;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      const candidate = text.slice(0, mid).trimEnd() + "... Show more";

      element.innerText = candidate;

      if (element.scrollHeight <= maxHeight) {
        result = text.slice(0, mid).trimEnd();
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    setDisplayText(result);
  }, [text, expanded, lines, lineHeight]);

  return (
    <p
      ref={textRef}
      className={className}
      style={{
        lineHeight: `${lineHeight}px`,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
    >
      {expanded ? (
        <>
          {text}{" "}
          {isTruncated && (
            <button
              onClick={() => setExpanded(false)}
              className="font-neue-semibold text-[#A3A3A3]"
            >
              Show less
            </button>
          )}
        </>
      ) : (
        <>
          {displayText}
          {isTruncated && (
            <>
              ...{" "}
              <button
                onClick={() => setExpanded(true)}
                className="font-neue-semibold text-[#A3A3A3]"
              >
                Show more
              </button>
            </>
          )}
        </>
      )}
    </p>
  );
}
