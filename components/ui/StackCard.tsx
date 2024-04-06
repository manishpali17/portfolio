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
      <div className="relative flex min-h-20 max-w-full animate-pulse items-center  justify-start rounded-2xl bg-slate-200 pl-0.5 opacity-95 hover:bottom-1 hover:cursor-pointer hover:opacity-100 active:animate-ping dark:bg-black dark:hover:bg-[#222222] md:animate-bounce">
        <Image
          className="hover:animate-spin"
          alt={title}
          src={icon}
          width={65}
          height={65}
        />
        <div className="flex w-full flex-col ">
          <h1 className="text-md font-HedvigLettersSans font-normal dark:text-white">
            {title}
          </h1>
          <p className="font-mono font-extralight opacity-50 dark:text-white">
            {keyword}
          </p>
        </div>
      </div>
    </>
  );
}
