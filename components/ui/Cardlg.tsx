import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { type Cardlg } from '@/app/lib/definitions';

export default function Cardlg({
  icon,
  title,
  keyword,
  image,
  bgColor,
  link,
}: Cardlg) {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="group mt-8 flex max-w-full cursor-pointer flex-col-reverse rounded-lg bg-[#1F1F1F] drop-shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 sm:flex-row">
          {/* left or down part*/}
          <div className="flex w-full flex-row items-center justify-center  gap-5 p-5 text-white md:w-1/2 ">
            <Image
              className="hover:animate-spin"
              src={icon}
              alt={`${title} icon`}
              width={48}
              height={48}
            />
            <div className="text-wrap">
              <h1 className="flex items-center gap-2 font-HedvigLettersSans text-xl font-semibold hover:animate-ping">
                {title}
                <MdArrowOutward className="vibrate-1 invisible group-hover:visible" />
              </h1>
              <p className=" text-wrap font-SpaceGrotesk text-sm font-extralight opacity-75 ">
                {keyword}
              </p>
            </div>
          </div>

          {/* right or up part*/}
          <div className="w-full md:w-1/2">
            <div
              className="h-full w-full rounded-l-lg rounded-r-lg sm:rounded-l-none"
              style={{ backgroundColor: bgColor }}
            >
              <div className="flex items-center justify-center rounded-t-lg p-2 md:py-4">
                <Image
                  src={image}
                  className="rounded-b-lg rounded-t-lg active:animate-ping"
                  alt={title}
                  width={410}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
