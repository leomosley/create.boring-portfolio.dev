import CopyCommand from "@/components/CopyCommand";
import Header from "@/components/Header";
import clsx from "clsx";
import { HiExternalLink } from "react-icons/hi";

export default function Home() {
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
          "bg-neutral-800/60 hover:bg-neutral-800/80"
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
        <div className="mx-auto w-[450px] h-[300px] bg-neutral-900 rounded-xl">

        </div>
      </div>
    </main>
  );
}
