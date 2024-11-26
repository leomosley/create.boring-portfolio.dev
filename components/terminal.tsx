/* eslint-disable */

"use client";

import clsx from 'clsx';
import React, { useEffect, useState, useRef } from 'react'

const command = `npx create-boring-portfolio`;
const title = `create-boring-portfolio`;
const prompts = [
  "│",
  "◇  What should we name your portfolio?",
  "│  portfolio",
  "│",
  "◇  What's your GitHub username?",
  "│  leomosley",
  "│",
  "◇  What topic tag should we give the Repos you want to showcase?",
  "│  showcase",
];
const installingBoilerplate = `Installing boilerplate...`;
const successBoilerplate = `✔ Successfully installed boilerplate!`;
const installingDependencies = `Installing dependencies...`;
const successDependencies = `✔ Successfully installed dependencies!`;
const nextSteps = [
  "Next steps:",
  "cd portfolio",
  "npm run dev",
  "git init",
  "git commit -m 'initial commit'"
];

function useDisplayText(text: string, speed = 20, startDelay = 0) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(initialDelay);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    const timeoutId = setTimeout(() => {
      if (index === text.length) {
        clearTimeout(timeoutId);
        return;
      }

      setDisplayText((prevText) => prevText + text.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [text, speed, index, started]);

  return displayText;
}

function calculateDelay(previousText: string, speed: number, extraDelay: number = 500): number {
  return previousText.length * speed + extraDelay;
}

export function Terminal() {
  const inputTypingSpeed = 30;
  const outputTypingSpeed = 20;
  const extraDelay = 500;

  let currentDelay = 0;

  const terminalRef = useRef<HTMLDivElement>(null);

  const renderText = (text: string, isInput: boolean, className: string = "", key?: string) => {
    const speed = isInput ? inputTypingSpeed : outputTypingSpeed;
    const displayedText = useDisplayText(text, speed, currentDelay);
    currentDelay += calculateDelay(text, speed, extraDelay);
    return <span key={key} className={className}>{displayedText}</span>;
  };

  useEffect(() => {
    if (terminalRef.current) {
      const scrollToBottom = () => {
        terminalRef.current!.scrollTop = terminalRef.current!.scrollHeight;
      };

      const observer = new MutationObserver(scrollToBottom);
      observer.observe(terminalRef.current, { childList: true, subtree: true });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className={clsx(
      "flex flex-col p-4 md:p-6 mx-auto lg:flex-1 rounded-xl md:rounded-2xl",
      "bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm",
      "w-full sm:w-3/4 h-[260px] sm:h-[300px] md:h-[380px] font-mono text-sm sm:text-base"
    )}>
      <div className="flex gap-2 pb-1">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-300" />
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
      </div>
      <div ref={terminalRef} className="flex flex-col overflow-y-auto hide-scrollbar">
        {renderText(command, true, "mt-2")}
        {renderText(title, false, "mt-2 px-4 bg-teal-300 text-neutral-900 max-w-fit")}

        {prompts.map((prompt, index) =>
          renderText(prompt, index % 2 === 0, "", `prompt-${index}`)
        )}

        {renderText(installingBoilerplate, false, "text-blue-600 mt-2")}
        {renderText(successBoilerplate, false, "text-green-400")}
        {renderText(installingDependencies, false, "text-blue-600 mt-2")}
        {renderText(successDependencies, false, "text-green-400")}

        {nextSteps.map((step, index) => renderText(step, false, clsx(
          "text-blue-600",
          index === 0 && "mt-2",
          index > 0 && "ml-2"
        ), `next-steps-${index}`))}
      </div>
    </div>
  );
}