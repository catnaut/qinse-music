import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex min-h-[calc(100vh-5rem)] flex-col
      items-center justify-center overflow-hidden"
    >
      <h1 className="text-5xl">Not Found Song</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
