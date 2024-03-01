import React from 'react';
import ContactSection from '@/components/ui/ContactSection';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <main>
        <ContactSection />
      </main>
      <footer>
        <div className="flex w-full flex-col items-center justify-center gap-6 py-4 font-SpaceGrotesk text-white sm:px-44 md:flex-row md:gap-44">
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
            <Link href={'https://mainshpali-weather-app.netlify.app/'}>
              <p className="cursor-pointer opacity-50 hover:opacity-100">
                Weather App
              </p>
            </Link>
            <Link href={'https://manishpali-currency-convertor.netlify.app/'}>
              <p className="cursor-pointer opacity-50 hover:opacity-100">
                Currency Convertor
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
