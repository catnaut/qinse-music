import React from 'react';
import Picture from '../components/homepage/picture';

const HomePage: React.FC = () => {
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100">
      <main className="flex flex-col justify-start items-start">
        <div className="featured-songs text-xl">
          <div className="song mb-4">
            <div className="flex items-start ">
              <div className="flex flex-col ml-4">
                <h1 className="text-3xl text-orange-600">今日热门</h1>
                <p className="text-xl text-green-600">推荐的歌曲</p>
              </div>
              {/* 调用 Picture 组件并传递第一个图片数据 */}
              <Picture imageData={firstImageData} />
            </div>
          </div>
          <br></br>
          <div className="song mb-4">
            <div className="flex items-start ">
              <div className="flex flex-col ml-4">
                <h1 className="text-3xl text-orange-600">今日热门</h1>
                <p className="text-xl text-green-600">推荐的歌曲</p>
              </div>
              {/* 调用 Picture 组件并传递第二个图片数据 */}
              <Picture imageData={secondImageData} />
            </div>
          </div>
          {/* 添加更多歌曲 */}
        </div>
      </main>
      <br></br>
      <footer className={"text-2xl text-center fixed bottom-0 w-full bg-gray-600 text-white p-4"}>
        <p> My Music App</p>
      </footer>
    </div>
  );
};

export default HomePage;