import { BellPlus, Mic, Plus, SearchIcon, Tally3 } from 'lucide-react';
import Image from 'next/image';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white flex items-center justify-between px-2 z-50">
      {/* YouTube Logo */}
      <div className="flex items-center space-x-2 px-4 rounded">
        <div className="hover:cursor-pointer size-10 flex items-center justify-center rounded-full hover:bg-gray-100">
          <Tally3 className="rotate-90" />
        </div>

        <div className="relative fixed absolute w-24 h-12 overflow-hidden rounded-full">
          {/* <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> */}
            <Image
              src="/images/youtubelogo.png"
              alt="YouTube Logo"
              fill
              sizes="96px"
              className="object-contain rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
            />
          {/* </a> */}
        </div>

      </div>

      {/* Search Bar */}
      <div className="flex items-center w-1/2">
        <div className="px-4 h-10 w-full rounded-2xl flex items-center relative border border-gray-400">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 w-full rounded-xl outline-none"
          />
          <SearchIcon className="absolute right-4 text-gray-500 hover:cursor-pointer" />
        </div>

        <div className="size-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center ml-2">
          <Mic className="text-black" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2 text-black px-4 py-2 rounded">
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full hover:cursor-pointer hover:bg-gray-200">
          <Plus />
          <span>create</span>
        </div>
        <BellPlus className="text-black hover:cursor-pointer" />
        <Image
          src="/images/logo_profile.jpg"   
          alt="User Icon"
          width={32}
          height={32}
          className="rounded-full hover:cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Navbar;
