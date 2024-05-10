import CopyCommand from "@/components/CopyCommand";
import Header from "@/components/Header";
import clsx from "clsx";
import { HiExternalLink } from "react-icons/hi";

export default function Home() {
  return (
    <main className="flex flex-col justify-center mx-auto md:max-w-5xl">
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
          "bg-neutral-800/60 hover:bg-neutral-800/80"
        )}
        href="https://github.com/leomosley/create-boring-portfolio"
        target="_blank"
      >
        GitHub <HiExternalLink className="w-5 h-5" />
      </a>
      <CopyCommand />
      <div className="flex flex-col mt-20 py-4 px-4 sm:px-10 md:px-20">
        <h2 className="tracking-tight font-extrabold text-2xl sm:text-3xl md:text-4xl">Getting Started</h2>
        <div className="mt-4 prose prose-invert prose-p:text-lg">
          <p className=""></p>
        </div>
      </div>
    </main>
  );
}
