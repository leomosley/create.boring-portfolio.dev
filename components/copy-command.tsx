"use client";
import clsx from 'clsx';
import React, { useState } from 'react';
import { HiOutlineDuplicate } from 'react-icons/hi';

export function CopyCommand() {
  const command = "npx create-boring-portfolio@latest";
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const copy = () => {
    navigator.clipboard.writeText(command);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  }

  return (
    <>
      <div className={clsx(
        "fixed p-2 rounded top-5 self-center transition-opacity duration-300 z-50",
        "text-gray-200 text-nowrap font-mono md:font-medium backdrop-blur-md",
        "border border-neutral-800 bg-neutral-900/60",
        showPopup ? "opacity-100" : "opacity-0"
      )}>
        command coppied to clipboard
      </div>
      <div className={clsx(
        "flex items-center mx-auto mt-4 gap-2 p-3",
        "text-gray-200 text-nowrap font-mono md:text-lg backdrop-blur-sm",
        "rounded-xl border border-neutral-800 bg-neutral-900/60"
      )}>
        <span className="mr-4 md:mr-8">{command}</span>
        <button
          className={clsx(
            "p-2 rounded-lg ml-auto bg-neutral-900/80 transition",
            "border border-neutral-800 hover:border-neutral-700"
          )}
          onClick={copy}
        >
          <HiOutlineDuplicate className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
