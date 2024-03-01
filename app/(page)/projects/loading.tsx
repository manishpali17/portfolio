'use client';
import { HashLoader } from 'react-spinners';

function App() {
  return (
    <div className="flex h-svh items-center justify-center">
      <HashLoader color={'#ff0000'} loading={true} />
    </div>
  );
}

export default App;
