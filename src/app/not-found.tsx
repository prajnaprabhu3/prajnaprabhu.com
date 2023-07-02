import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6 mx-auto -mt-32  dark:text-white">
      <h1 className="text-3xl text-myColor">404 - Page Not Found</h1>
      <p>Oops! Couldn&apos;t find this page.</p>
      <div>
        <Link href="/" className="bg-myColor px-4 py-1 rounded text-white">
          Home
        </Link>
      </div>
    </div>
  );
}
