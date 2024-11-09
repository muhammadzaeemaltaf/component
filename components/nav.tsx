import Link from "next/link";

export default function Nav() {
  return (
    <>
      <ul className="flex space-x-4 bg-slate-600 py-4 px-3 text-white mb-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </>
  );
}
