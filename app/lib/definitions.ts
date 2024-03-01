export type Cardlg = {
  icon: string;
  title: string;
  keyword: string;
  image: string;
  bgColor: string;
  link: string;
};
export type InfiniteCards = [{ image: string }];

export type ProjectListing = [
  {
    icon: string;
    title: string;
    keyword: string;
    image: string;
    bgColor: string;
    link: string | null;
  },
];
export type Stack = {
  stackItemsFrontend: [
    {
      title: string;
      keyword: string;
      icon: string;
      url: string;
    },
  ];
  stackItemsBackend: [
    {
      title: string;
      keyword: string;
      icon: string;
      url: string;
    },
  ];
  stackItemsDatabase: [
    {
      title: string;
      keyword: string;
      icon: string;
      url: string;
    },
  ];
  language: [
    {
      title: string;
      keyword: string;
      icon: string;
      url: string;
    },
  ];
  tools: [
    {
      title: string;
      keyword: string;
      icon: string;
      url: string;
    },
  ];
};
