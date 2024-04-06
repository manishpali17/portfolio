'use client';
import Cardlg from '@/components/ui/Cardlg';
import {
  animateLeftToRight,
  animateToTop,
  textAnimation,
} from '@/components/Helpers/gsap';
import { type ProjectListing } from '@/app/lib/definitions';
import { useEffect } from 'react';

export default function ProjectListing({ items }: { items: ProjectListing }) {
  useEffect(() => {
    animateLeftToRight('.workPage');
    animateToTop('.top');
    textAnimation('.workTitle', 'Work', 1, 'none');
  });
  return (
    <>
      <div className="flex max-w-full flex-col items-center justify-center  sm:pt-10 ">
        <div className="max-w-4xl px-4 text-white ">
          <h1 className="workPage workTitle pb-2 text-center font-SpaceGrotesk text-4xl font-bold hover:animate-ping sm:py-4 sm:text-6xl">
            W
          </h1>
          <p className="workPage text-center font-SpaceGrotesk text-[#C0C0C0] sm:py-6">
            Below you can find projects which showcase what I can bring to the
            table. Within these projects, I dive into my process of how I solve
            real problems in today&apos;s world through the power of
            development.
          </p>
        </div>
        <div className="top sm:mt-14 ">
          <div className="flex w-full justify-center px-3">
            <div className="max-w-4xl">
              {items?.map((item) => {
                return (
                  <Cardlg
                    icon={item.icon}
                    title={item.title}
                    keyword={item.keyword}
                    image={item.image}
                    bgColor={item.bgColor}
                    link={item.link ? item.link : ''}
                    key={item.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
