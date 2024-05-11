import React from 'react';
import Link from 'next/link';//不写这个就原地tp了
import ImageWithButton from '../components/homepage/imagewithbutton';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="flex flex-col justify-start items-start">
        <div className="featured-songs text-xl">
          <div className="song mb-4">
            <div className="flex items-center">
              <div className="flex flex-col ml-4">
                <h1 className="text-3xl text-orange-600">今日热门</h1>
                <p className="text-xl text-green-600">推荐的歌曲</p>
              </div>
                <ImageWithButton image="/images/song1.jpg" alt="Song 1" link="/songs/123124" size={200} style={{ width: '200px' }} />
            </div>
          </div>
          <br></br>
          <div className="song mb-4">
            <div className="flex items-center">
              <div className="flex flex-col ml-4">
                <h1 className="text-3xl text-orange-600">今日热门</h1>
                <p className="text-xl text-green-600">推荐的歌曲</p>
              </div>
                   <ImageWithButton image="/images/song2.jpg" alt="Song 2" link="/songs" size={200} style={{ width: '200px' }} />
            </div>
          </div>
          {/* 添加更多歌曲 */}
        </div>
      </main>
      <footer className={"text-2xl text-center"}>
        <p> My Music App</p>
      </footer>
    </div>
  );
};

export default HomePage;
