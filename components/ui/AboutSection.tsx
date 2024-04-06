'use client';
import {
  animateLeftToRight,
  animateToTop,
  textAnimation,
} from '@/components/Helpers/gsap';
import Image from 'next/image';
import me from '@/public/me.jpg';
import { useEffect } from 'react';

export default function AboutSection() {
  const age = new Date().getFullYear() - 2002;
  useEffect(() => {
    animateLeftToRight('.about');
    animateToTop('.top');
    textAnimation('.aboutTitle', 'From Passion to a Developer', 3, 'none');
  });

  return (
    <>
      <div className="mb-5 flex w-full flex-col items-center justify-center dark:text-white">
        <div className="about flex max-w-4xl flex-col-reverse items-center gap-3 px-5 sm:flex-row-reverse md:px-0">
          <Image
            src={me}
            alt="Manish Pali"
            className="w-32 cursor-pointer rounded-full sm:w-40 md:rounded-md"
          />
          <div>
            <h1 className="about aboutTitle font-SpaceGrotesk text-3xl font-extrabold hover:animate-pulse sm:text-6xl">
              F
            </h1>
          </div>
        </div>

        <div className="mx-5 mt-5 max-w-4xl space-y-5">
          <p className="about font-SpaceGrotesk text-lg dark:text-[#ADADAD]">
            Name&apos;s <span className="text-orange-500">Manish</span>, a
            passionate{' '}
            <span className="text-purple-500">FullStack Web developer</span> who
            is currently based in Aligarh. I am {age} years old, but have at
            least 1 year of experience in building projects and developing.
          </p>
          <p className="top font-SpaceGrotesk text-lg dark:text-[#ADADAD]">
            I hold a passion for developing things and believe that great things
            are often invisible. With an impactful thoughts and job, you can
            convey your story or the story of your business to a wider audience.
            I want to help you build an online brand and or strengthening your
            online brand.
          </p>
          <p className="top font-SpaceGrotesk text-lg dark:text-[#ADADAD]">
            I&apos;m really flexible when it comes to achieving certain
            objectives. Think about developing top-notch web(apps) and website,
            but also there is competiton. When I start with a certain task, I do
            want to know what you&apos;re exactly in need of.
          </p>
          <p className="top font-SpaceGrotesk text-lg font-bold dark:text-[#ADADAD]">
            Reason why I spend time in learning more skills is because of the
            fact that it makes me a more valuable person developer. I am a big
            believer in focus on a specific area and getting really good at it.
          </p>

          <h1 className="top font-SpaceGrotesk text-2xl font-extrabold">
            How I got started
          </h1>
          <p className="font-SpaceGrotesk text-lg">
            Started learning programming during college, exploring app and web
            development, with a significant project in .NET MVC for medicine
            management. Possess over a year of experience in JavaScript, HTML,
            and CSS, with recent focus on backend with Express and frontend with
            React and Next.js. Eager to apply skills and grow in a dynamic work
            environment
          </p>

          <h1 className="font-SpaceGrotesk text-2xl font-extrabold">
            Work policy
          </h1>
          <p className="font-SpaceGrotesk text-lg ">
            I spend most of my time in front of laptop developing and learning.
            Working remotely is that I love, because it saves a lot of commuting
            time. However, this does not mean I am unwilling to work in other
            locations.
          </p>
        </div>
      </div>
    </>
  );
}
