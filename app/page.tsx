import CopyCommand from "@/components/CopyCommand";
import ExampleTerminal from "@/components/ExampleTerminal";
import Header from "@/components/Header";
import clsx from "clsx";
import { HiExternalLink } from "react-icons/hi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function Home() {
  const technologies = [
    { 
      name: "Next.js", icon: <RiNextjsFill className="w-10 h-10" />, href: "https://nextjs.org/",
      description: `Next.js offers a heavily optimised approach to creating applications using React.` 
    },
    { 
      name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-500 bg-white rounded" />, href: "https://www.typescriptlang.org/",
      description: `TypeScript will help you be a better developer. The "strictness" of TypeScript leads to smoother building.` 
    },
    { 
      name: "Tailwind", icon: <RiTailwindCssFill className="w-10 h-10" />, href: "https://tailwindcss.com/",
      description: `Tailwind is a utility-first CSS framework that helps you build beautiful, responsive designs without any extra configuration.`
    },
  ];
  
  return (
    <main className="flex flex-col justify-center mx-auto md:max-w-6xl">
      <Header />
      <div className="text-balance text-center p-2 mt-10 md:mt-24">
        <h1 className="tracking-tight font-extrabold text-5xl md:text-6xl">
          Easiest way to create a portfolio with
          <span className=" text-teal-300">&nbsp;Next.js</span>
        </h1>
      </div>
      <a
        className={clsx(
          "flex mx-auto transition items-center mt-4 px-4 py-2 gap-1",
          "rounded-full md:text-lg font-semibold",
          "bg-neutral-800/60 hover:bg-neutral-800/80",
        )}
        href="https://github.com/leomosley/create-boring-portfolio"
        target="_blank"
      >
        GitHub <HiExternalLink className="w-5 h-5" />
      </a>
      <CopyCommand />
      <div className="flex flex-col lg:flex-row mt-20 py-4 px-4 sm:px-10 md:px-15 gap-4">
        <div className="space-y-4 flex-1">
          <h2 className="tracking-tight font-extrabold text-2xl sm:text-3xl md:text-4xl">Getting Started</h2>
          <p className="md:text-lg">
            I made create-boring-portfolio to help people like me who dont want the fuss of desiging and building a portfolio.
            All you have to do is run one command and it builds you a production ready portfolio website. 
          </p>
          <p className="md:text-lg">
            The design is super simple, it is heavily infulenced by&nbsp; 
            <a className="font-semibold underline-offset-4 underline decoration-neutral-500 transition hover:decoration-inherit" href="https://www.nexxel.dev/" target="blank">nexxel.dev</a>
            . I think its the perfect design.
          </p>
          <p className="md:text-lg">
            The usage for the command can be found on the projects GitHub.
          </p>
        </div>
        <ExampleTerminal />
      </div>
      <div className="flex flex-col py-4 px-4 sm:px-10 md:px-15">
        <h2 className="tracking-tight font-extrabold text-2xl sm:text-3xl md:text-4xl">
          Technologies
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 mt-4 mb-8 px-4 sm:px-0">
          {technologies.map((item, index) => (
            <a
              key={index} 
              className={clsx(
                "flex flex-col flex-1 rounded-lg transition group",
                "bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm",
                "hover:border-neutral-700"
              )}
              href={item.href}
              target="_blank"
            >
              <div className="flex gap-4 p-2 px-4 items-center align-middle bg-neutral-800/60  group-hover:bg-neutral-700/60">
                {item.icon}
                <span className="text-lg font-semibold">{item.name}</span>
              </div>
              <span className="p-4 text-sm md:text-base">
                {item.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}