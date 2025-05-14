

import React from 'react';
import Image5 from '../Images/Image5.png';
import Image6 from '../Images/Image6.png';
import Image7 from '../Images/Image7.png';
import Image8 from '../Images/Image8.png';
import Image9 from '../Images/Image9.png';

const Page3 = () => {
  return (
    <div className="w-full bg-black px-5 py-10 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center gap-6">

        {/* Recently Created Section */}
        <div className="flex flex-col w-full md:w-11/12 items-center px-2 text-center">
          <div className="flex justify-center items-center bg-[#6A41FB33] w-[120px] h-[40px] rounded-full mb-3">
            <h3 className="text-white text-sm m-0">Recently Created</h3>
          </div>

          <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            Create Anything with{' '}
            <span className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] bg-clip-text text-transparent font-bold">
              Optpdoce
            </span>{' '}
            AI
          </p>

          {/* Filter Menu */}
          <div className="w-full mt-4 mb-[-5px] flex justify-center items-center">
            <div className="flex justify-center items-center text-white text-xl sm:text-2xl gap-4 sm:gap-6">
              <div>All</div>
              <div>|</div>
              <div>Cartoon</div>
              <div>|</div>
              <div>Realistic</div>
              <div>|</div>
              <div>3D</div>
            </div>
          </div>
        </div>

       
        <div className="grid grid-cols-8 grid-rows-2 gap-2 w-full max-w-full mx-auto mt-6">

          <div className="col-start-1 col-end-3 row-start-1 row-end-3 rounded-[35px] overflow-hidden bg-[#6A41FB]">
            <img src={Image5} alt="Image5" className="w-full h-full object-cover" />
          </div>

          
          <div className="col-start-3 col-end-5 row-start-1 row-end-2 rounded-[35px] overflow-hidden bg-[#F49957]">
            <img src={Image6} alt="Image6" className="w-full h-full object-cover" />
          </div>

          
          <div className="col-start-5 col-end-7 row-start-1 row-end-2 rounded-[35px] overflow-hidden bg-[#FF6F91]">
            <img src={Image7} alt="Image7" className="w-full h-full object-cover" />
          </div>

          
          <div className="col-start-3 col-end-7 row-start-2 row-end-3 rounded-[35px] overflow-hidden bg-[#00C9A7]">
            <img src={Image9} alt="Image9" className="w-full h-full object-cover" />
          </div>

          <div className="col-start-7 col-end-9 row-start-1 row-end-3 rounded-[35px] overflow-hidden bg-[#9D4EDD]">
            <img src={Image8} alt="Image8" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center items-center w-full h-20 mt-6">
          <button className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-white text-base sm:text-lg font-medium px-6 py-2 rounded-full hover:opacity-90 transition duration-300 ease-in-out">
            Go To our AI Gallery
          </button>
        </div>

      </div>
    </div>
  );
};

export default Page3;
