import Link from 'next/link';
import { FaRegFaceFrown } from 'react-icons/fa6';

export default function NotFound() {
  return (
    <main className="mt-60 flex h-full flex-col items-center justify-center gap-2">
      <FaRegFaceFrown size={100} className=" dark:text-white" />
      <h2 className="text-xl font-semibold dark:text-white">404 Not Found</h2>
      <p className="dark:text-white">Could not find the requested Page.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm transition-colors hover:bg-red-400 dark:text-white"
      >
        Go Back
      </Link>
    </main>
  );
}
