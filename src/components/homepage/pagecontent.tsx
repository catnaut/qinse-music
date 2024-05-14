"use clent";

import SongItem from "./songitem";
import { z } from "zod";
import Picture from './picture';

const firstImageData = [
    { url: "/images/song1.jpg", alt: "Song 1", link: "/songs/123123" },
    { url: "/images/song3.jpg", alt: "Song 3", link: "/songs/123124" },
    { url: "/images/song5.jpg", alt: "Song 5", link: "/songs/123125" },
    { url: "/images/song7.jpg", alt: "Song 7", link: "/songs/123125" }
  ];

const secondImageData = [
    { url: "/images/song2.jpg", alt: "Song 2", link: "/songs/123126" },
    { url: "/images/song4.jpg", alt: "Song 4", link: "/songs/123127" },
    { url: "/images/song6.jpg", alt: "Song 6", link: "/songs/123128" },
    { url: "/images/song8.jpg", alt: "Song 8", link: "/songs/123125" }
  ];

const Song= z.object({
  id: z.string(),
  user_id: z.string(),
  author: z.string(),
  title: z.string(),
  song_path: z.string(),
  image_path: z.string(),
});

export type Song = z.infer<typeof Song>;


interface PageContentProps{
    songs:Song[];
}

const PageContent: React.FC<PageContentProps>=({
    songs
})  =>{
    if(songs.length === 0){
        return(
            <div className="mt-4 text-neutral-400">
                No songs available

                <div className="featured-songs text-xl">
            <div className="song mb-4">
              <div className="flex justify-start">
                <div className="flex flex-col ml-4">
                <h1 className="font-semibold text-3xl  text-primary">今日热门</h1>
                </div>
                <Picture imageData={firstImageData} />
              </div>
            </div>
            <div className="song mb-4">
              <div className="pt-10 flex items-start">
                <div className="flex flex-col ml-4">
                  <h1 className="font-semibold text-3xl text-primary">今日热门</h1>
                </div>
                <Picture imageData={secondImageData} />
              </div>
            </div>
          </div>
            </div>
        )
    }
    return(
        <div
            className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-8
            gap-4
            mt-4
            "
        >
            {songs.map((item) =>(
                <SongItem
                key={item.id}
                onClick={()=>{}}
                data={item}
                />
                ))
            }

        </div>
    );
}
export default PageContent;