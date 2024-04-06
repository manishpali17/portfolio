'use client';
import React from 'react';
import ContactSection from '@/components/ui/ContactSection';
import Link from 'next/link';
import Image from 'next/image';
import { CiDark, CiLight } from 'react-icons/ci';
import { useTheme } from 'next-themes';

export default function Page() {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  const { theme, setTheme } = useTheme();
  return (
    <>
      <main>
        <ContactSection />
      </main>
      <footer>
        <button
          className={`fixed bottom-5 right-8 z-10 hidden rounded-full bg-black p-2 dark:block`}
          onClick={() => setTheme('light')}
        >
          <CiLight className="size-12 text-orange-600" />
        </button>
        <button
          className={`fixed bottom-5 right-8 z-10 rounded-full bg-slate-300 p-2 dark:hidden`}
          onClick={() => setTheme('dark')}
        >
          <CiDark className="size-12 text-slate-500" />
        </button>
        <div className="flex w-full flex-col items-center justify-center gap-6 py-4 font-SpaceGrotesk dark:text-white sm:px-44 md:flex-row md:gap-44">
          <div className=" flex cursor-pointer items-center gap-2 text-sm font-semibold hover:underline">
            <Image
              className="w-12"
              src="https://res.cloudinary.com/doh56heah/image/upload/v1706810485/Portfollio/icons8-mp-120_i17vqn.png"
              alt="site logo"
              width={48}
              height={48}
            />
            Copyright ©{new Date(Date.now()).getFullYear().toString()} - Manish
            Pali
          </div>
          <div className=" opacity-90 hover:underline">
            <Link href={'/'}>Side Projects</Link>
          </div>
          <div className=" flex justify-center gap-5 py-5">
            <a
              href={'https://mainshpali-weather-app.netlify.app/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="cursor-pointer opacity-50 hover:opacity-100">
                Weather App
              </p>
            </a>
            <a
              href={'https://manishpali-currency-convertor.netlify.app/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="cursor-pointer opacity-50 hover:opacity-100">
                Currency Convertor
              </p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
