
import { Check, ChevronDown, EllipsisVertical, SearchIcon,Target,Video } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-primary/90 h-15 flex items-center justify-between px-4 ">
      <div className="flex gap-2"></div>
      <div className="flex gap-2">
        <div className="flex gap-2 px-2 py-1 rounded-full border border-[#54656F]">
          <div><Video className="text-[#54656F] hover:cursor-pointer" /></div>
          <div><ChevronDown className="text-[#54656F] hover:cursor-pointer" /></div>
        </div>
        <div>
          <SearchIcon className="text-[#AEBAC1] hover:cursor-pointer"/>
        </div>
        <div>
          <EllipsisVertical className="text-[#AEBAC1] hover:cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
