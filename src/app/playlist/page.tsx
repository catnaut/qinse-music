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
    <main className=" flex px-40 pt-20 flex-col  items-center">
      <div className="flex w-full pt-10  justify-between h-2/50 space-x-20 items-center">
        <Image
          src={imgSrc}
          alt="cover"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div className=" min-h-full flex-grow flex flex-col py-10 space-y-5">
          <h1 className="text-5xl">Playlist</h1>
          <p>By {author}</p>
          <p>
            Update at {updateAt} - {amount} songs
          </p>
          <p className="text-sm">{description}</p>
          <div className="flex justify-start items-center space-x-2">
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
