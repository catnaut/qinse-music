import React from "react";
import Link from "next/link";

const PageContent: React.FC = () => {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <div className="max-w-screen-lg">
        <h1 className="mb-5 mt-5 text-3xl font-bold">热门</h1>
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="relative h-48 w-48 overflow-hidden">
              <Link href={`/image/${index + 1}`}>
                <div className="relative h-full w-full cursor-pointer">
                  <img
                    src={`https://via.placeholder.com/300?text=Placeholder+${index + 1}`}
                    alt={`Placeholder ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <svg
                      /*xmlns="http://www.w3.org/2000/svg"*/
                      className="h-12 w-12 text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12l-9-6v12l9-6z"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <h1 className="mb-5 mt-5 text-3xl font-bold">热门</h1>
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="relative h-48 w-48 overflow-hidden">
              <Link href={`/image/${index + 4}`}>
                <div className="relative h-full w-full cursor-pointer">
                  <img
                    src={`https://via.placeholder.com/300?text=Placeholder+${index + 4}`}
                    alt={`Placeholder ${index + 4}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12l-9-6v12l9-6z"
                      />
                    </svg>
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
