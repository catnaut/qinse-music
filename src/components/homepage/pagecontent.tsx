import React from "react";
import Link from "next/link";
import PlayIcon from "@/components/homepage/playicon";

const PageContent: React.FC = () => {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <div className="max-w-screen-lg">
        <h1 className="mb-5 mt-5 text-3xl font-bold">热门</h1>
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="relative h-48 w-48 overflow-hidden">
              <Link href={`/image/${index + 1}`}>
                <div className="relative h-full w-full cursor-pointer">
                  <img
                    src={`https://via.placeholder.com/300?text=Placeholder+${index + 1}`}
                    alt={`Placeholder ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <PlayIcon />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <h1 className="mb-5 mt-5 text-3xl font-bold">热门</h1>
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="relative h-48 w-48 overflow-hidden">
              <Link href={`/image/${index + 5}`}>
                <div className="relative h-full w-full cursor-pointer">
                  <img
                    src={`https://via.placeholder.com/300?text=Placeholder+${index + 5}`}
                    alt={`Placeholder ${index + 5}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <PlayIcon />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
