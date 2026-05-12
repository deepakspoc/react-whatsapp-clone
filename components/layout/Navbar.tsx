import { Check, ChevronDown, EllipsisVertical, SearchIcon,Target,Video } from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-primary/90 h-15 flex items-center justify-between px-4 ">
      <div className="flex gap-2 ">
        <div className="relative w-10 h-10 overflow-hidden mt-2 rounded-full hover:cursor-pointer">
              <Image src="/images/whatsapp.png" alt="WhatsApp Logo" fill className="object-contain rounded-full"/>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-2">  
              <div><p className="mt-1 font-medium text-white">WhatsApp</p></div>
              <div className="relative w-5 h-5 overflow-hidden mt-2 hover:cursor-pointer">
                <Image src="/images/vector.png" alt="vector logo" fill className="object-contain"/>
              </div>          
            </div>
              <div>
                <p className="text-[#8696A0]">Business account</p>
              </div>
        </div>
      </div>
      
      <div className="flex gap-2">
        <div className="flex gap-2 px-2 py-1 rounded-full border border-[#54656F]">
          <div><Video className="text-[#54656F] hover:cursor-pointer" /></div>
          <div><ChevronDown className="text-[#54656F] hover:cursor-pointer" /></div>
            
        </div>
        <div>
          <SearchIcon className="text-[#AEBAC1] hover:cursor-pointer" />
        </div>
        <div>
          <EllipsisVertical className="text-[#AEBAC1] hover:cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
