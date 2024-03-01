'use client';
import { BeatLoader } from 'react-spinners';

function App() {
  return (
    <>
      <div className="flex h-svh items-center justify-center">
        <BeatLoader color={'#ff0000'} loading={true} />
      </div>
    </>
  );
}

export default App;
