'use client';
import { CircleLoader } from 'react-spinners';

function App() {
  return (
    <>
      <div className="flex h-svh items-center justify-center">
        <CircleLoader color={'#ff0000'} loading={true} size={100} />
      </div>
    </>
  );
}

export default App;
