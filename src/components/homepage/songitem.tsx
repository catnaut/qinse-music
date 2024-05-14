"use clent";
import { z } from "zod";
import Picture from '../../components/homepage/picture';

/*（to do 歌单信息）const secondImageData = [
    { url: "/images/song2.jpg", alt: "Song 2", link: "/songs/123126" },
    { url: "/images/song4.jpg", alt: "Song 4", link: "/songs/123127" },
    { url: "/images/song6.jpg", alt: "Song 6", link: "/songs/123128" },
    { url: "/images/song8.jpg", alt: "Song 8", link: "/songs/123125" }
  ];*/

const Song= z.object({
  id: z.string(),
  user_id: z.string(),
  author: z.string(),
  title: z.string(),
  song_path: z.string(),
  image_path: z.string(),
});

export type Song = z.infer<typeof Song>;

interface SongItemProps{
    data:Song;
    onClick:(id:string)=>void
};
 /*(todo) onClick={()=onClick(data.id)}*/
const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
    })=>{
    return(
        /*(todo 歌单信息)<div 
            className="
            relative
            group
            flex
            flex-col
            items-center
            justify-center
            rounded-md
            overflow-hidden
            gap-x-4
            bg-primary
            cursor-pointer
            hover:bg-primary
            transition
            p-3
            "
        >
            <div 
                className="
                    relative
                    aspect-square
                    w-full
                    h-full
                    rounded-md
                    overflow-hidden
                    "
            >
            <Picture imageData={secondImageData} />
            </div>
        </div>*/
        <div></div>


    );
}
export default SongItem;