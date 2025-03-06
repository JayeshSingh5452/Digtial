import React, { useState } from 'react';
import logo from './logo.png';
import Vector from './Vector.png';
import like from './like.png';
import g1 from './g1.png';
import g2 from './g2.png';
import pn from './1.png';
import g3 from './g3.png';
import g4 from './g4.png';
import g5 from './g5.png';
import g6 from './g6.png';
import g7 from './g7.png';
import g8 from './g8.png';
import g9 from './g9.png';
import g10 from './g10.png';
import g11 from './g11.png';

function Home() {
  const [isOpen, setIsOpen] = useState(false);




  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 md:px-10 py-6 bg-transparent text-white">
        {/* Logo */}
        <div>
          <img src={logo} alt="" className="h-14" />
        </div>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li className="hover:text-gray-400 cursor-pointer"> &bull; Services</li>
          <li className="hover:text-gray-400 cursor-pointer"> &bull; About Us</li>
          <li className="hover:text-gray-400 cursor-pointer">&bull; Features</li>
          <li className="hover:text-gray-400 cursor-pointer">&bull; Our Works</li>
        </ul>
        
        {/* Button */}
        <button className="hidden md:block bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-700">
          Get in Touch
        </button>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-white text-2xl" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Mobile Sidebar Menu */}
        {isOpen && (




          <div className="md:hidden fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-40 transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex flex-col pt-20 px-6 space-y-4">
              <a href="#" className="hover:text-gray-400 text-lg">Services</a>
              <a href="#" className="hover:text-gray-400 text-lg">About Us</a>
              <a href="#" className="hover:text-gray-400 text-lg">Features</a>
              <a href="#" className="hover:text-gray-400 text-lg">Our Works</a>
              <button className="bg-orange-600 text-white w-full py-2 rounded hover:bg-orange-700">
                Get in Touch
              </button>
            </div>
          </div>
        )}
        {/* Overlay for closing sidebar */}
        {isOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
     
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12">
      {/* Left Side - Main Heading */}
      <div className="md:w-2/3 text-left">
        <h1 className="text-white text-4xl md:text-5xl  leading-snug">
          <span className="text-orange-500">From Zero to Hero</span> transform
        </h1>
        <h2 className="text-white text-4xl md:text-5xl  leading-snug">
          your business with our
        </h2>
        <h2 className="text-white text-4xl md:text-5xl  leading-snug">
          proven digital marketing
        </h2>
        <h2 className="text-white text-4xl md:text-5xl  leading-snug">
          strategies
        </h2>
      </div>

      <div className="md:w-1/3 text-gray-300 text-base mt-8 md:mt-0 md:text-right flex flex-col items-end space-y-4">
  

  <p className="max-w-xs leading-relaxed">
    You do you. Tutur has your back with a full-service marketing platform
    that helps you crush your goals—
    and make more time for your passions.

  </p>
 
</div>
    </div>


<section className="relative  text-white py-2 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Content */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="bg-white/15 backdrop-blur-2xl p-5 rounded-lg shadow-lg border border-gray-600 ">
            <h3 className="text-xl font-bold">1</h3>
            <p>Search Engine Optimization (SEO), experts optimize and improve its visibility in search engine results.</p>
          </div>
          <div className="bg-white/15 backdrop-blur-2xl p-4 rounded-lg shadow-lg border border-gray-600 ">
            <h3 className="text-xl font-bold">2</h3>
            <p>Targeted Advertising, data-driven insights and advanced targeting techniques to reach your ideal audience.</p>
          </div>
        </div>
        
        {/* Center Image */}
        <div className="w-full md:w-9/12 flex justify-center">
          <img src={g1} alt="Mockup"  className="w-[800px] max-w-full h-auto" />
        </div>
        
        {/* Right Side Content */}
        <div className="flex flex-col gap-6 md:w-1/2">
  <div className="bg-white/15 backdrop-blur-2xl p-5 rounded-lg shadow-lg border border-gray-600 ">
    <h3 className="text-xl font-bold text-white">3</h3>
    <p className="text-white">Social Media Marketing develops strategic social media to amplify your brand's presence.</p>
  </div>
  <div className="bg-white/15 backdrop-blur-lg p-5 rounded-lg shadow-lg border border-white/30">
    <h3 className="text-xl font-bold text-white ">4</h3>
    <p className="text-white">Analytics and Reporting: We believe in data-driven decision-making.</p>
  </div>
</div>

      </div>
    </section>
    <p className="text-[4.8vw] md:text-[3vw] lg:text-[4vw] text-center  tracking-widest whitespace-nowrap text-[#6F72A7] py-8">
  ONE - STOP - SOLUTION - BUSINESS
</p>



    <img src={g2} alt="Targeted Advertising" className="w-[100%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto h-auto  py-16"
 />


<div className=" text-white p-6 md:p-12">
      <div className="max-w-4xl md:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          {/* Left Column - Text */}
          <div className="w-full md:w-1/3 space-y-4 md:space-y-8 py-8">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Features</h2>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-md">
              With our comprehensive suite of digital marketing features, we empower your business to thrive in the online realm, driving growth, increasing brand visibility, and engaging your target audience effectively.
            </p>
            <h3 className="text-2xl md:text-4xl  mt-8 md:mt-16 tracking-tight">
              Empowering Your Business with Cutting-Edge Digital Marketing Capabilities
            </h3>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
            {/* Card 1: Engaging Content Creation */}
            <div className="bg-black/30 backdrop-blur-2xl border border-white/35 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-md min-h-[200px] md:min-h-[250px]">
              <div className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-white bg-opacity-10 rounded-full mb-3 md:mb-6 border border-white">
                <span className="text-white text-xl md:text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-white">Engaging Content Creation</h4>
              <p className="text-gray-300 text-sm md:text-base leading-tight">
                Captivate your audience with compelling and informative content tailored to your brand.
              </p>
            </div>

            {/* Card 2: Data-driven Insights */}
            <div className="bg-black/30 backdrop-blur-2xl border border-white/35 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-md min-h-[200px] md:min-h-[250px]">
              <div className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-white bg-opacity-10 rounded-full mb-3 md:mb-6 border border-white">
                <span className="text-white text-xl md:text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-white">Data-driven Insights</h4>
              <p className="text-gray-300 text-sm md:text-base leading-tight">
                Gain valuable insights into your digital marketing efforts through comprehensive analytics and reporting.
              </p>
            </div>

            {/* Card 3: Search Engine Dominance */}
            <div className="bg-black/30 backdrop-blur-2xl border border-white/35 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-md min-h-[200px] md:min-h-[250px]">
            <div className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-white bg-opacity-10 rounded-full mb-3 md:mb-6 border border-white">
                <span className="text-white text-xl md:text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-white">Search Engine Dominance</h4>
              <p className="text-gray-300 text-sm md:text-base leading-tight">
                Boost your online visibility and attract organic traffic through effective search engine optimization (SEO) strategies.
              </p>
            </div>

            {/* Card 4: Social Media Mastery */}
            <div className="bg-black/30 backdrop-blur-2xl border border-white/45 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-md min-h-[200px] md:min-h-[250px]">
              <div className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-white bg-opacity-10 rounded-full mb-3 md:mb-6 border border-white ">
                <span className="text-white text-xl md:text-2xl font-bold ">4</span>
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-white">Social Media Mastery</h4>
              <p className="text-gray-300 text-sm md:text-base leading-tight">
                Amplify your brand's presence and engage your audience across various social media platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-white text-4xl md:text-4xl py-4 font-light text-center leading-tight">
  Exploring Our Extensive Portfolio of Successful <br />
  Campaigns and Measurable Results
</h1>


  
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-16 px-4 md:px-20 max-w-7xl mx-auto">
    <div class="grid gap-4">
        <div>
            <img class="h-full w-full object-cover rounded-lg" src={pn} />
        </div>
        <div>
            <img class="h-full w-full object-cover rounded-lg" src={g3} />
        </div>
        <div>
            <img class="h-full w-full object-cover rounded-lg" src={g4} />
        </div>
    </div>

    <div class="grid gap-4">
        <div>
            <img class="h-full w-full object-cover rounded-lg" src={g5} />
        </div>
        <div>
            <img class="h-full w-full object-cover rounded-lg" src={g6} />
        </div>
        <div>
            <img class="h-full w-full object-cover rounded-lg" src={g7} />
        </div>
        <div>
            <img class="h-full w-full object-cover rounded-lg" src={g8} />
        </div>
    </div>

    <div class="grid gap-4">
        <div>
            <img class="h-full w-full object-cover rounded-lg" src={g9} />
        </div>
        <div>
            <img class="h-full w-full object-cover rounded-lg" src={g10} />
        </div>
        <div>
            <img class="h-full w-full object-cover rounded-lg" src={g11} />
        </div>
    </div>
</div>

<div className="flex flex-col items-center justify-center text-center p-10  h-fit">
      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
        Don’t feel hesitate to contact <br />
        us.We’d be thrilled to take a <br />
        <span className="text-orange-600 font-semibold">Journey with you!</span>
      </h2>
      <button className="mt-8 bg-orange-600 text-white px-8 py-4 rounded-full text-lg sm:text-xl transition-all hover:bg-orange-700">
        Get in touch
      </button>
    </div>

    <footer class=" text-gray-400 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
  
    <p class="text-sm mb-4 md:mb-0">&copy; Copyright wellrafi.com All Rights Reserved.</p>
    
  
    <div class="mb-4 md:mb-0">
        <img src={logo} alt="Logo" class="h-10"></img>
    </div>

   
    <div class="flex flex-wrap justify-center md:justify-end items-center gap-4">
        <a href="#" class="hover:text-white transition">Services</a>
        <span class="hidden md:block">•</span>
        <a href="#" class="hover:text-white transition">About us</a>
        <span class="hidden md:block">•</span>
        <a href="#" class="hover:text-white transition">Features</a>
        <span class="hidden md:block">•</span>
        <a href="#" class="hover:text-white transition">Our Works</a>
    </div>
</footer>

   
    </>
  );
}

export default Home;