import HomeIntro from '@/components/ui/HomeIntro';
import InfiniteCards from '@/components/ui/InfiniteCards';
import Cardlg from '@/components/ui/Cardlg';
import { fetchProjects } from '@/app/lib/action';

export default async function Home() {
  const data = await fetchProjects();
  return (
    <>
      <main>
        <HomeIntro />
        <InfiniteCards data={data} />
        <div className="flex flex-col ">
          <h1 className="mt-10 text-center font-SpaceGrotesk text-4xl  font-bold text-white hover:animate-pulse ">
            Projects
          </h1>
          <div className="flex w-full justify-center px-3">
            <div className="max-w-4xl">
              {data.map((item: any) => {
                return (
                  <Cardlg
                    icon={item.icon}
                    title={item.title}
                    keyword={item.keyword}
                    image={item.image}
                    bgColor={item.bgColor}
                    link={item.link ? item.link : null}
                    key={item.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
