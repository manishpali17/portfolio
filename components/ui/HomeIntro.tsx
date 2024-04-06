'use client';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import { animateLeftToRight, textAnimation } from '@/components/Helpers/gsap';
import { useEffect } from 'react';

export default function HomeIntro() {
  useEffect(() => {
    animateLeftToRight('.HomeOne');
    textAnimation('.homeTitle', 'Fullstack Web Developer', 1.5, 'none');
  });

  return (
    <div className="flex max-w-full flex-col items-start justify-start space-y-3 px-4 sm:items-center sm:space-y-6">
      <div className="HomeOne max-w-4xl overflow-hidden py-1 text-start font-bold sm:mt-6 sm:py-3">
        <h1 className="homeTitle font-SpaceGrotesk text-4xl hover:animate-bounce dark:text-white sm:text-7xl ">
          F
        </h1>
      </div>
      <div className="HomeOne max-w-4xl font-SpaceGrotesk">
        <p className="dark:text-[#C7C7C7]">
          I create websites and applications that not only look fantastic but
          also function seamlessly. Whether it&apos;s developing innovative
          apps, or diving into the latest web technologies, I&apos;m all in.
          Let&apos;s connect and turn your ideas into digital reality!
        </p>
      </div>
      <div className=" flex justify-start gap-5 pt-6 dark:text-white md:w-[46rem] lg:w-[56rem]">
        <Link href={'/about'}>
          <div className="group relative flex items-center gap-3 rounded-full bg-slate-200 px-3 py-2 text-center font-HedvigLettersSans text-lg shadow-2xl transition-all duration-500 hover:bottom-3 hover:left-3 dark:bg-[#222222]">
            Read more
            <MdArrowOutward className="vibrate-1 text-gray opacity-50 group-hover:scale-150 group-hover:opacity-100" />
          </div>
        </Link>

        <Link href={'/contact'}>
          <div className="relative flex items-center rounded-full border-2 px-4 py-2 text-center font-HedvigLettersSans text-lg shadow-2xl hover:bottom-4 hover:left-3 hover:bg-red-600 hover:text-white dark:bg-black">
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
}
