import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Nav, Search } from "@/components/main/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

export function Header() {
  return (
    <header className=" fixed w-full flex  items-center  h-20 px-20">
      <div className="flex-1">
        <Nav />
      </div>
      <div className="flex-1">
        <Pages />
      </div>
      <div className="flex-1">
        <Search />
      </div>
    </header>
  );
}

function Pages() {
  return (
    <div className="flex justify-center items-center">
      <Button className="text-lg" variant={"ghost"} asChild>
        <Link href="/">Home</Link>
      </Button>

      <Button className="text-lg" variant={"ghost"} asChild>
        <Link href="/discover">Discover</Link>
      </Button>
      <Button className="text-lg" variant={"ghost"} asChild>
        <Link href="/library">Library</Link>
      </Button>

      <Button className="text-lg" variant={"ghost"} asChild>
        <Link href="/setting">Setting</Link>
      </Button>
    </div>
  );
}
