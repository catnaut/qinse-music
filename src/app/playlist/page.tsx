import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Play, Heart, Ellipsis } from "lucide-react";

export default function Page() {
  const author = "author";
  const updateAt = Date.now();
  const amount = 0;
  const description = "description";
  const imgSrc = "/cover.jpg";

  return (
    <main className=" flex flex-col items-center px-40  pt-20">
      <div
        className="h-2/50 flex
      w-full items-center justify-between space-x-20 pt-10 "
      >
        <Image
          src={imgSrc}
          alt="cover"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div className=" flex min-h-full flex-grow flex-col space-y-5 py-10">
          <h1 className="text-5xl">Playlist</h1>
          <p>By {author}</p>
          <p>
            Update at {updateAt} - {amount} songs
          </p>
          <p className="text-sm">{description}</p>
          <div className="flex items-center justify-start space-x-2">
            <Button className="text-base">
              <Play className="mr-2" />
              Play
            </Button>
            <Button className="text-base" size={"icon"}>
              <Heart />
            </Button>
            <Button className="text-base" size={"icon"}>
              <Ellipsis />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
