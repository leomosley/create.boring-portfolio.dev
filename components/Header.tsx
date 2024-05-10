import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaStar } from 'react-icons/fa6';
import { SiAnalogue } from 'react-icons/si';

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
      <Link
        className="flex justify-center items-center p-2 rounded-lg border text-gray-200 text-lg"
        href="/"
      >
        <SiAnalogue className="-mb-[1.5px] -ml-[1px] rotate-[242deg]" />
      </Link>
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
