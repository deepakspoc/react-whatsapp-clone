import { Clapperboard, House, TvMinimalPlay, User } from "lucide-react";

function Sidebar() {
  return (
    <div className="#FFFFFF p- gap- flex flex-col items-center w-20 fixed top-16 left-0 h-[calc(100vh-4rem)]">
      {/* Home */}
      <div className="flex flex-col size-20  flex items-center justify-center rounded-full hover:bg-gray-100 gap-1 hover:cursor-pointer">
        <House className="w-6 h-6" />
        <p className="text-xs text-gray-700">Home</p>
      </div>

      {/* Shorts */}
      <div className="flex flex-col size-20  flex items-center justify-center rounded-full hover:bg-gray-100 gap-1 hover:cursor-pointer">
        <Clapperboard className="w-6 h-6" />
        <p className="text-xs text-gray-700">Shorts</p>
      </div>

      {/* Subscriptions */}
      <div className="flex flex-col size-20  flex items-center justify-center rounded-full hover:bg-gray-100 gap-1 hover:cursor-pointer">
        <TvMinimalPlay className="w-6 h-6" />
        <p className="text-xs text-gray-700">Subscriptions</p>
      </div>

      {/* You */}
      <div className="flex flex-col size-20  flex items-center justify-center rounded-full hover:bg-gray-100 gap-1 hover:cursor-pointer">
        <User className="w-6 h-6" />
        <p className="text-xs text-gray-700">You</p>
      </div>
    </div>
  );
}

export default Sidebar;
