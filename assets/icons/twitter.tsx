import React from "react";
import { IconType } from "./types";

export const Twitter = ({ color, size }: IconType) => {
  return (
    <svg
      width={size ?? 16}
      height={size ?? 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3333 2.0067C15.3333 2.0067 13.988 2.80137 13.24 3.0267C12.8385 2.56504 12.3049 2.23783 11.7114 2.08932C11.1178 1.94081 10.493 1.97817 9.92139 2.19634C9.34978 2.41451 8.85896 2.80297 8.51532 3.30918C8.17168 3.81539 7.9918 4.41493 8 5.0267V5.69337C6.82842 5.72375 5.66752 5.46391 4.62067 4.937C3.57383 4.41009 2.67355 3.63246 2 2.67337C2 2.67337 -0.666665 8.67337 5.33333 11.34C3.96035 12.272 2.32477 12.7393 0.666668 12.6734C6.66667 16.0067 14 12.6734 14 5.0067C14 4.82137 13.9813 4.63604 13.9467 4.45337C14.6267 3.7827 15.3333 2.0067 15.3333 2.0067Z"
        stroke={color ?? "#FFFFFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
