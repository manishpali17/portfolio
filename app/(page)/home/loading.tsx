'use client';
import { ClimbingBoxLoader } from 'react-spinners';

function App() {
  return (
    <>
      <div className="flex h-svh items-center justify-center">
        <ClimbingBoxLoader color={'#ff0000'} loading={true} />
      </div>
    </>
  );
}

export default App;
