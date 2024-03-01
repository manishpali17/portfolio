import Image from 'next/image';
import { InfiniteCards } from '@/app/lib/definitions';
export default function InfiniteCards({ data }: { data: InfiniteCards }) {
  return (
    <>
      <div className="scroller relative mt-10 max-w-full cursor-pointer overflow-hidden will-change-auto sm:mt-24">
        <div className="scroller-inner w-7xl animate-scroll flex gap-5">
          {data?.map((slide, index) => (
            <Image
              alt="Projects Images"
              src={slide.image}
              className="relative w-[250px] rounded-t-lg hover:bottom-1 hover:animate-spin sm:w-[350px]"
              key={index}
              width={350}
              height={200}
            />
          ))}
          <Image
            alt="Projects Images"
            src={
              'https://res.cloudinary.com/doh56heah/image/upload/v1706501871/Portfollio/currency-converter_ytdvdi.jpg'
            }
            className="relative w-[250px] rounded-t-lg hover:bottom-1 hover:animate-spin sm:w-[350px] "
            width={320}
            height={200}
          />
          <Image
            alt="Projects Images"
            src="https://res.cloudinary.com/doh56heah/image/upload/v1706557305/Portfollio/wether-app_nwwirv.jpg"
            className="relative w-[250px] rounded-t-lg hover:bottom-1 hover:animate-spin sm:w-[350px]"
            width={300}
            height={200}
          />
        </div>
        {/* fade */}
        <div className="absolute left-0 top-0 h-full w-7 bg-gradient-to-r from-black to-transparent sm:w-20"></div>
        <div className="absolute right-0 top-0 h-full w-7 bg-gradient-to-l from-black to-transparent sm:w-20"></div>
        <div className="gradient-div absolute bottom-0 left-0 h-5 w-full"></div>
      </div>
    </>
  );
}
