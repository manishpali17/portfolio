'use client';
import { LuCode2 } from 'react-icons/lu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BiLogoLinkedin,
  BiLogoInstagramAlt,
  BiLogoGithub,
} from 'react-icons/bi';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Header() {
  const [color, setColor] = useState('');
  const pathname = usePathname();

  const navItems = [
    {
      title: 'Home',
      href: '/home',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];
  const socialIcons = [
    {
      title: 'linkedin',
      logo: <BiLogoLinkedin className="hover:text-blue-500" />,
      url: 'https://www.linkedin.com/in/manish-pali17/',
    },
    {
      title: 'instagram',
      logo: <BiLogoInstagramAlt className="hover:text-pink-500" />,
      url: 'https://www.instagram.com/manish.pali.17/',
    },
    {
      title: 'github',
      logo: <BiLogoGithub />,
      url: 'https://github.com/manishpali17',
    },
  ];

  function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(generateRandomColor()); // Update color every 1 second
    }, 500);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <header className="sticky top-0 z-10 flex max-w-full flex-col items-center justify-between scroll-smooth bg-white font-SpaceGrotesk backdrop-blur-sm dark:bg-transparent dark:text-white sm:flex-row sm:px-8 sm:pb-5 sm:pt-2">
      {/* Logo + name */}
      <div className="flex w-full items-center justify-center py-2 text-center sm:w-1/4 sm:justify-start sm:text-start">
        <LuCode2
          className={`mr-2 text-3xl hover:animate-spin sm:mr-4`}
          style={{ color }}
        />
        <div className="flex flex-col sm:hidden md:block">
          <h1 className="text-md font-extrabold hover:animate-bounce">
            Manish Pali
          </h1>
          <p className="hidden text-xs font-light hover:animate-pulse dark:text-gray-300 md:block">
            Fullstack Web Developer
          </p>
        </div>
      </div>

      {/* Nav items */}
      <nav className="relative flex max-w-full items-center justify-between gap-3 border-2 border-dashed border-cyan-500 dark:border-white dark:bg-[#222222] md:p-1 ">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={clsx(
              ' animate-expand-active  transition-all duration-500 ease-in-out dark:bg-[#222222] ',
              {
                'bg-slate-200 dark:bg-black': pathname === item.href,
              },
            )}
          >
            <div
              className={`text-md relative rounded-full px-3 py-2 font-semibold active:animate-bounce sm:px-4 sm:text-lg`}
            >
              {item.title}
            </div>
          </Link>
        ))}
      </nav>

      {/* social icons */}
      <div className="invisible flex w-1/4 flex-row items-center justify-center gap-5 md:visible md:justify-end">
        <div className="flex items-center space-x-2 ">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-100"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>

          <p className="text-sm text-green-500">Available</p>
        </div>

        {socialIcons.map((icon) => (
          <Link
            href={icon.url}
            key={icon.title}
            className="hidden rounded-full bg-slate-200 p-2 transition-all duration-200 hover:scale-75 dark:bg-[#222222] lg:block"
          >
            <span className="text-2xl">{icon.logo}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
