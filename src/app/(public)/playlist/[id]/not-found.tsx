import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div
      className="flex min-h-[calc(100vh-5rem)] flex-col
      items-center justify-center space-y-10 overflow-hidden"
    >
      <h1 className="text-5xl">Not Found PlayList</h1>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
