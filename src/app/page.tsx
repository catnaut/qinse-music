import React from "react";

import PageContent from "@/components/homepage/pagecontent";

export default function Home() {
  return (
    <main className=" flex flex-col items-center px-40 pt-20">
      <div className="flex min-h-screen items-center justify-center bg-background p-5">
        <PageContent />
      </div>
    </main>
  );
}
