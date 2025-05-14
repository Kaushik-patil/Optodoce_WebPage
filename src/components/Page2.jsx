import React from 'react'
import Image1 from '../Images/Image1.png'
import Image2 from '../Images/Image2.png'
import Image3 from '../Images/Image3.png'
import Image4 from '../Images/Image4.png'

const Page2 = () => {
    return (
        <div className="min-h-[700px] w-full border border-white flex items-center justify-center bg-white p-5">
            <div className="min-h-[600px] w-full md:w-4/5 flex flex-wrap">

                {/* Left Panel */}
                <div className="flex-1 min-w-full md:min-w-[500px] p-6 md:p-[50px] border border-white bg-white">
                    <div className="relative h-[300px] md:h-[400px] w-full mt-[50px] md:mt-[100px] rounded-t-[15px] bg-gradient-to-b from-[#6A41FB] to-white overflow-visible">
                        <img
                            src={Image4}
                            alt="Local"
                            className="absolute top-[-60px] md:top-[-150px] w-[250px] md:w-[80%] lg:w-[400px] mx-auto left-0 right-0 z-10"
                        />
                    </div>
                </div>

                {/* Right Panel */}
                <div className="flex-1 min-w-full md:min-w-[500px] min-h-[400px] flex flex-col border border-white p-6 md:p-[30px]">

                   
                    <div className="min-h-[200px] border border-white"> 
                        <div className="h-[40px] w-[180px] md:w-[200px] bg-[#6A41FB33] border border-white rounded-[30px] text-center px-2 py-1 text-black"> {/* reduced h from 50px to 36px, width also reduced */}
                            Introduce Optodoce AI
                        </div>

                        <div className="h-auto md:h-[200px] w-full border border-white mt-2"> 
                            <h1 className="text-3xl md:text-4xl font-semibold text-black leading-snug"> 
                                Unlocking the Power <br />of <span className="text-[#6A41FB]">AI for a </span>
                                <span className="bg-gradient-to-b from-[#6A41FB] to-[#F49957] bg-clip-text text-transparent inline-block">
                                    Smarter
                                </span> <br />Future
                            </h1>
                        </div>
                    </div>

                    
                    <div className="border border-white text-white mt-2"> 

                        {/* Top Images Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2"> 
                            <div className="border border-white"><img src={Image1} alt="Local 1" className="w-full h-auto" /></div>
                            <div className="border border-white"><img src={Image2} alt="Local 2" className="w-full h-auto" /></div>
                            <div className="border border-white"><img src={Image3} alt="Local 3" className="w-full h-auto" /></div>
                            <div></div>
                        </div>

                      
                        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] border border-white pt-[20px] mt-2 gap-2"> 
                            <div className="border border-white flex justify-center items-start pt-[4px] "> 
                                <button className="h-[50px] w-[120px] bg-gradient-to-r from-[#6A41FB] to-[#F49957] border border-white rounded-[30px] text-white"> 
                                    Try Now
                                </button>
                            </div>

                            <div className="border border-white grid grid-cols-[15%_85%] md:grid-cols-[10%_90%] text-black p-1"> 
                                <div className="border border-white"></div>
                                <div className="border border-white">
                                    <p className="text-sm md:text-base"> 
                                        It's a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page2
