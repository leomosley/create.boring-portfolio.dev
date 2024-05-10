"use client";
import clsx from 'clsx';
import React, { useState } from 'react';
import { HiClipboardCopy, HiOutlineDuplicate } from 'react-icons/hi';

export default function CopyCommand() {
  const command = "npx create-boring-portfolio";
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const copy = () => {
    navigator.clipboard.writeText(command);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  }

  return (
    <>
    <div className={clsx(
      "absolute p-2 rounded bottom-5 right-5 transition-opacity duration-300",
      "text-gray-200 bg-neutral-950 border border-gray-200",
      showPopup ? "opacity-100" : "opacity-0" 
    )}>
      Coppied to clipboard
    </div>
    <div className={clsx(
      "flex items-center mx-auto mt-4 gap-2 p-3",
      "text-gray-200 text-nowrap font-mono md:text-lg",
      "rounded-xl border border-neutral-800 bg-neutral-800/30"
    )}>
      <span className="mr-8">{command}</span>
      <button
        className={clsx(
          "p-2 rounded-lg ml-auto bg-neutral-800/40 transition",
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
