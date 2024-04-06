'use client';
import { MdArrowOutward, MdArrowUpward } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import spaceman from '@/public/space-men.png';
import moon from '@/public/moon.png';
import { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide scroll to top button based on scroll position
    const toggleScrollToTopButton = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleScrollToTopButton);

    return () => {
      window.removeEventListener('scroll', toggleScrollToTopButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  return (
    <>
      <footer>
        <button
          className={`fixed bottom-5 right-8 z-10 `}
          onClick={scrollToTop}
          style={{ display: isVisible ? 'block' : 'none' }}
        >
          <MdArrowUpward className="h-12 w-12 animate-bounce rounded-full bg-slate-800 text-[#ff0000] " />
        </button>
        <div className="relative mt-5 flex w-full flex-col items-center justify-center overflow-hidden bg-[#010101] sm:mt-20">
          <div className="footer-big-in relative flex flex-col items-center justify-center py-[100px]">
            <Image
              src={moon}
              className="absolute bottom-0 hidden md:-left-full md:block"
              alt="moon"
              priority={true}
              width={385}
            />
            <Image
              src={moon}
              className="absolute -left-3/4 bottom-0 block md:hidden"
              alt="moon"
              priority={true}
              width={180}
            />
            <Image
              src={spaceman}
              className="absolute -right-[300px] -top-8  hidden sm:-right-[412px] md:block "
              alt="space men"
              priority={true}
              width={448}
            />
            <Image
              src={spaceman}
              className="absolute -bottom-8 -right-[240px]  block max-w-md md:hidden "
              alt="space men"
              priority={true}
              width={300}
              height={150}
            />

            <h5 className="font-HedvigLettersSans text-xl text-white">
              Have an idea ?
            </h5>
            <h1 className="text-center font-SpaceGrotesk text-2xl font-bold text-white sm:text-5xl">
              Let&apos;s talk about it
            </h1>
            <div className="mt-3 active:animate-pulse">
              <Link href={'/contact'}>
                <div className=" group relative flex animate-bounce items-center gap-3 rounded-full bg-[#ff0000] px-6 py-2 text-center font-HedvigLettersSans text-lg font-bold text-white transition-all duration-1000 hover:left-3 hover:top-3  ">
                  Contact
                  <MdArrowOutward className="vibrate-1  text-black group-hover:scale-150 group-hover:opacity-100" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 py-4 font-SpaceGrotesk text-white sm:px-44 md:flex-row md:gap-44">
          <div className=" flex cursor-pointer items-center gap-2 text-sm hover:underline">
            <Image
              className="w-12 hover:animate-ping"
              src="https://res.cloudinary.com/doh56heah/image/upload/v1706810485/Portfollio/icons8-mp-120_i17vqn.png"
              alt="Manish pali logo"
              width={48}
              height={48}
            />
            Copyright ©{currentYear} -{' '}
            <span className="font-extrabold">Manish Pali</span>
          </div>
          <div className=" opacity-90  hover:underline">
            <Link href={'/'}>Side Projects</Link>
          </div>
          <div className=" flex justify-center gap-5 py-5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={'https://mainshpali-weather-app.netlify.app/'}
            >
              <p className="cursor-pointer opacity-50 hover:animate-pulse hover:opacity-100">
                Weather App
              </p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={'https://manishpali-currency-convertor.netlify.app/'}
            >
              <p className="cursor-pointer opacity-50 hover:animate-pulse hover:opacity-100">
                Currency Convertor
              </p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
