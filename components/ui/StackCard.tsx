import Image from 'next/image';
export default function StackCard({
  icon,
  title,
  keyword,
}: {
  icon: string;
  title: string;
  keyword: string;
}) {
  return (
    <>
      <div className="relative flex max-w-full animate-pulse  items-center justify-start rounded-2xl bg-black pl-0.5 opacity-95 hover:bottom-1 hover:cursor-pointer hover:bg-[#222222] hover:opacity-100 active:animate-ping md:animate-bounce">
        <Image
          className="hover:animate-spin"
          alt={title}
          src={icon}
          width={65}
          height={65}
        />
        <div className="flex w-full flex-col ">
          <h1 className="text-md font-HedvigLettersSans font-normal text-white">
            {title}
          </h1>
          <p className="font-mono font-extralight text-white opacity-50">
            {keyword}
          </p>
        </div>
      </div>
    </>
  );
}
