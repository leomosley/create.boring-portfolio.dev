import Image from 'next/image';
import React from 'react';
import { FaGithub, FaStar } from 'react-icons/fa6';

async function getStars() {
  try {
    const res = await fetch(`https://api.github.com/repos/leomosley/create-boring-portfolio`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch repos');
    }
    const data = await res.json();
    return data.stargazers_count;

  } catch (error) {
    console.error(error);
  }
}

export default async function Header() {
  // const stars = await getStars();
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
        className="flex gap-3 items-center ml-auto text-gray-200"
        href="https://github.com/leomosley/create-boring-portfolio"
        target="_blank"
      >
        <FaGithub className="w-10 h-10" />
      </a>
    </header>
  )
}
