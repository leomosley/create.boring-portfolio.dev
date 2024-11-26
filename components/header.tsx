import clsx from 'clsx';
import Image from 'next/image';
import { FaGithub, FaStar } from 'react-icons/fa6';

async function getStars() {
  try {
    const res = await fetch(`https://api.github.com/repos/leomosley/create-boring-portfolio`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch repos');
    }
    const data = await res.json();
    return data.stargazers_count as number;

  } catch (error) {
    console.error(error);
  }
}

export async function Header() {
  const stars = await getStars();

  return (
    <header className="flex items-center p-4 w-full">
      <a
        className="flex justify-center items-center rounded-lg w-10 h-10 border text-gray-200 text-lg"
        href="https://boring-portfolio.dev"
        target="_blank"
      >
        <Image
          className="w-full h-full"
          width={120}
          height={120}
          src={"/icon.png"}
          alt="icon"
        />
      </a>
      <a
        className="group flex gap-3 items-center ml-auto text-gray-200"
        href="https://github.com/leomosley/create-boring-portfolio"
        target="_blank"
      >
        {stars && (
          <div className={clsx(
            "relative items-center rounded-lg border bg-clip-padding px-2 py-1 no-underline !transition-colors !duration-300 flex ltr:mr-[.33em] rtl:ml-[.33em]",
            "border-neutral-300/20 bg-neutral-300/10 text-slate-100 group-hover:border-neutral-300/50 group-hover:bg-neutral-300/10",
            "after:absolute after:h-0 after:w-0 after:border-8 after:border-transparent after:transition-colors after:duration-300 after:right-[calc(-0.5em-1px)] after:border-r-0 after:border-l-neutral-300/20 after:group-hover:border-l-neutral-300/50")
          }>
            <FaStar className="w-4 h-4 mr-1" />
            {stars}
          </div>
        )}
        <FaGithub className="w-10 h-10" />
      </a>
    </header>
  )
}
