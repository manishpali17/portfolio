import StackCard from '@/components/ui/StackCard';
import { Stack } from '@/app/lib/definitions';

export default function StacksListing({ data }: { data: Stack }) {
  return (
    <>
      {/* frontend stacks */}
      <div className="max-w-full">
        <h1 className="px-5 text-center font-SpaceGrotesk text-4xl font-bold text-white sm:py-4 sm:text-5xl md:px-32 lg:px-40 xl:px-52">
          Tech Stacks
        </h1>
        <h2 className="px-5 font-HedvigLettersSans text-2xl font-bold text-white opacity-60 sm:text-3xl md:px-32 lg:px-40 xl:px-56">
          Frontend
        </h2>
        <div className="mx-3 my-5 flex max-w-full items-center justify-center">
          <div className="grid w-full gap-4 sm:grid-cols-2 md:w-3/4 md:grid-cols-3 xl:grid-cols-4">
            {data?.stackItemsFrontend?.map((item) => (
              <a
                href={item.url}
                key={item.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StackCard
                  title={item.title}
                  icon={item.icon}
                  keyword={item.keyword}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Backend stacks */}
      <div className="max-w-full">
        <h2 className="px-5 font-HedvigLettersSans text-2xl font-bold text-white opacity-60 sm:text-3xl md:px-32 lg:px-40 xl:px-56">
          Backend
        </h2>
        <div className="mx-3 my-5 flex max-w-full items-center justify-center">
          <div className="grid w-full gap-4 sm:grid-cols-2 md:w-3/4 md:grid-cols-3 xl:grid-cols-4">
            {data?.stackItemsBackend?.map((item) => (
              <a
                href={item.url}
                key={item.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StackCard
                  title={item.title}
                  icon={item.icon}
                  keyword={item.keyword}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* DB stacks */}
      <div className="max-w-full">
        <h2 className="px-5 font-HedvigLettersSans text-2xl font-bold text-white opacity-60 sm:text-3xl md:px-32 lg:px-40 xl:px-56">
          Database
        </h2>
        <div className="mx-3 my-5 flex max-w-full items-center justify-center">
          <div className="grid w-full gap-4 sm:grid-cols-2 md:w-3/4 md:grid-cols-3 xl:grid-cols-4">
            {data?.stackItemsDatabase?.map((item) => (
              <a
                href={item.url}
                key={item.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StackCard
                  title={item.title}
                  icon={item.icon}
                  keyword={item.keyword}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Tools */}
      <div className="max-w-full">
        <h2 className="px-5 font-HedvigLettersSans text-2xl font-bold text-white opacity-60 sm:text-3xl md:px-32 lg:px-40 xl:px-56">
          Tools
        </h2>
        <div className="mx-3 my-5 flex max-w-full items-center justify-center">
          <div className="grid w-full gap-4 sm:grid-cols-2 md:w-3/4 md:grid-cols-3 xl:grid-cols-4">
            {data?.tools?.map((item) => (
              <a
                href={item.url}
                key={item.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StackCard
                  title={item.title}
                  icon={item.icon}
                  keyword={item.keyword}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Languages */}
      <div className="max-w-full">
        <h2 className="px-5 font-HedvigLettersSans text-2xl font-bold text-white opacity-60 sm:text-3xl md:px-32 lg:px-40 xl:px-56">
          Languages
        </h2>
        <div className="mx-3 my-5 flex max-w-full items-center justify-center">
          <div className="grid w-full gap-4 sm:grid-cols-2 md:w-3/4 md:grid-cols-3 xl:grid-cols-4">
            {data?.language?.map((item) => (
              <a
                href={item.url}
                key={item.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StackCard
                  title={item.title}
                  icon={item.icon}
                  keyword={item.keyword}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
