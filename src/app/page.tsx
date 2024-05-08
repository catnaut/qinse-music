// pages/index.tsx
// pages/index.tsx

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <main>
        <h1 className=" text-4xl">歌曲</h1><br></br><br></br>
        {/* songs section */}
        <div className="featured-songs text-xl">
          {/* Display featured songs，布局 */}
          <div className="song ">
            <h2 className=" text-3xl text-orange-600">今日热门</h2>
            <p className=" text-xl">推荐的歌曲</p>
            <img src="/images/song1.jpg" alt="Song 1" style={{ width: 'auto', height: '200px'  }}/>  
            
          </div>
          <br></br>
          <div className="song">
            <h2 className=" text-3xl text-orange-600">今日热门</h2>
            <p className=" text-xl">推荐的歌曲</p>
            <img src="/images/song2.jpg" alt="Song 2" style={{ width: 'auto', height: '200px' }}/>
          </div>
          <br></br>
          {/* Add more featured songs ,还可以添加更多*/}
        </div>
      </main>
      <footer className={"text-4xl text-center"}>
        <p> My Music App</p>
      </footer>
    </div>
  );
};

export default HomePage;
