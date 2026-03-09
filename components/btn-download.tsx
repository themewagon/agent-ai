// components/Btn.tsx
import React from "react";

interface BtnProps {
  url: string;
  label: string;
}

const Btn: React.FC<BtnProps> = ({ url, label }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2  rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white transition"
    >
      {label}
    </a>
  );
};

export default Btn;
