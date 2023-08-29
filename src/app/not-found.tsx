import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex  items-center gap-6 mx-auto -mt-32  text-myColor  dark:text-white">
      {/* <h1 className="text-3xl text-myColor">404 - Page Not Found</h1>
      <p>Oops! Couldn&apos;t find this page.</p>
      <div>
        <Link href="/" className="bg-myColor px-4 py-1 rounded text-white">
          Home
        </Link>
      </div> */}
      <h1 className="text-xl text-myColor">404</h1>
      <div className="border-r  h-12 dark:border-[#ffb3c0] border-myColor dark:opacity-50 opacity-40 "></div>
      <p className="text-sm text-myColor opacity-80">
        {/* The page could not be found */}
        Oops! couldn&apos;t find this page
      </p>
    </div>
  );
}
