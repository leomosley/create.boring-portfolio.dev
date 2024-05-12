"use client";
import clsx from 'clsx';
import React from 'react'

const command = `npx create-boring-portfolio`;

const title = `create-boring-portfolio`;

const prompts = [
  "│",
  "◇  What should we name your portfolio?",
  "│  portfolio",
  "│",
  "◇  What's GitHub username?",
  "│  leomosley",
  "│",
  "◇  What topic tag should we give the Repos you want to showcase?",
  "│  showcase",
];

const installingBoilerplate = `Installing boilerplate...`;

const successBoilerplate = `✔ Successfully installed boilerplate!`;

const installingDependencies =  `Installing dependencies...`;

const successDependencies = `✔ Successfully installed dependencies!`;

const nextSteps = [
  "Next steps:",
  "cd portfolio",
  "pm run dev",
  "git init",
  "git commit -m 'initial commit"
];


export default function ExampleTerminal() {
  return (
    <div className={clsx(
      "flex flex-col p-4 md:p-6 mx-auto lg:flex-1 rounded-xl md:rounded-2xl",
      "bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm",
      "w-full sm:w-3/4 h-[260px] sm:h-[300px] md:h-[380px] lg:max-h-[380px] lg:h-auto font-mono text-sm sm:text-base"
    )}>
      <div className="flex gap-2 pb-1">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-300"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex flex-col overflow-y-auto hide-scrollbar">
        <span className="mt-2">{command}</span>
        <span className="mt-2 px-4 bg-teal-300 text-neutral-900 max-w-fit">{title}</span>
        {prompts.map((prompt, index) => (
          <span key={index} className="">{prompt}</span>
        ))}
        <span className="text-blue-600 mt-2">{installingBoilerplate}</span>
        <span className="text-green-400">{successBoilerplate}</span>
        <span className="text-blue-600 mt-2">{installingDependencies}</span>
        <span className="text-green-400">{successDependencies}</span>
        {nextSteps.map((step, index) => (
          <span key={index} className={clsx(
            "text-blue-600",
            index === 0 && "mt-2"
          )}>
            {index > 0 && <>&nbsp;&nbsp;</>}
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}
