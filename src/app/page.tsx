import React from 'react';
import Picture from '../components/homepage/picture';

import PageContent from '../components/homepage/pagecontent';
import SongItem from '../components/homepage/songitem';

const HomePage: React.FC = () => {
  const songs: any[] = [];

  // 第一个图片的数据
  const firstImageData = [
    { url: "/images/song1.jpg", alt: "Song 1", link: "/songs/123123" },
    { url: "/images/song3.jpg", alt: "Song 3", link: "/songs/123124" },
    { url: "/images/song5.jpg", alt: "Song 5", link: "/songs/123125" },
    { url: "/images/song7.jpg", alt: "Song 7", link: "/songs/123125" }
  ];

  // 第二个图片的数据
  const secondImageData = [
    { url: "/images/song2.jpg", alt: "Song 2", link: "/songs/123126" },
    { url: "/images/song4.jpg", alt: "Song 4", link: "/songs/123127" },
    { url: "/images/song6.jpg", alt: "Song 6", link: "/songs/123128" },
    { url: "/images/song8.jpg", alt: "Song 8", link: "/songs/123125" }
  ];

  return (
    <div className="min-h-screen bg-blue-100">
      {/* 电脑布局 */}


        {/* 主要内容区域 */}
        <main className="pt-20 flex flex-col justify-start items-start w-full max-w-screen-lg px-4 mx-auto">
        <div className="
                    flex
                    flex-col
                    gap-y-2
                    mt-4
                    md:mt-0
                    "
                    >
                      <p className="hidden md:block font-semibold text-sm">
                        你好
                      </p>

              </div>
                <PageContent songs={songs}/>
        </main>
        {/* 底部页脚 */}
        <footer className="font-semibold text text-center fixed bottom-0 w-full p-4">
          <p>欢迎来到 QinSemusic</p>
        </footer>

      {/* 手机布局(todo) */}

        
      </div>

  );
};

export default HomePage;
