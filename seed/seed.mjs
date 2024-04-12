import axios from 'axios';

const apiKey = process.env.API_KEY; // Replace this with your actual API key
const baseUrl = process.env.BASE_URL;

if (apiKey === undefined || baseUrl === undefined) {
  throw new Error('Please add your api key and base url to .env file');
}

try {
  const res = await axios.post(
    `${baseUrl}/action/insertMany`,
    {
      dataSource: 'Cluster0',
      database: 'portfollioDB',
      collection: 'projects',
      documents: [
        {
          icon: 'https://asset.cloudinary.com/doh56heah/2f42a9323441e576a2d93754466d790a',
          title: 'Portfolio',
          keyword: 'Nextjs, typeScript, Reactjs, Zod, ',
          image:
            'https://asset.cloudinary.com/doh56heah/3c40b9e24933b8f510db5224e89f6ea3',
          bgColor: '#0A538B',
          link: 'https://manish-pali-portfolio.vercel.app',
        },
        // add you projects
      ],
    },
    {
      headers: {
        apiKey: apiKey,
        'Content-Type': 'application/ejson',
        Accept: 'application/json',
      },
    },
  );
  console.log(res.data);
} catch (error) {
  console.error('Error:', error.message);
}

try {
  const res = await axios.post(
    `${baseUrl}/action/insertOne`,
    {
      dataSource: 'Cluster0',
      database: 'portfollioDB',
      collection: 'stacks',
      document: {
        // add you stack
        stackItemsFrontend: [
          {
            icon: 'https://asset.cloudinary.com/doh56heah/fef3fcf2c07bc3be64bf5d7b365e59d1',
            title: 'NextJS',
            keyword: 'React Framework',
            url: 'https://nextjs.org/',
          },
        ],
        stackItemsBackend: [
          {
            icon: 'https://asset.cloudinary.com/doh56heah/fef3fcf2c07bc3be64bf5d7b365e59d1',
            title: 'NodeJS',
            keyword: 'Runtime engine',
            url: 'https://nodejs.org/',
          },
        ],
        stackItemsDatabase: [
          {
            icon: 'https://asset.cloudinary.com/doh56heah/776fbde963e2d0f8bb5df844e6349af8',
            title: 'MongoDB',
            keyword: 'NoSql',
            url: 'https://www.mongodb.com/',
          },
        ],
        language: [
          {
            icon: 'https://asset.cloudinary.com/doh56heah/bce42d02f1316dbe3c6ed7bb26ae1ca1',
            title: 'Typescript',
            keyword: '',
          },
        ],
        tools: [
          {
            icon: 'https://asset.cloudinary.com/doh56heah/4d7e765956a2544c9faffa4bbf0b9d70',
            title: 'Git',
            keyword: 'VersionControl',
            url: 'https://git-scm.com/',
          },
        ],
      },
    },
    {
      headers: {
        apiKey: apiKey,
        'Content-Type': 'application/ejson',
        Accept: 'application/json',
      },
    },
  );
  console.log(res.data);
} catch (error) {
  console.error(error.message);
}
