import { Mic, Smile,Plus} from "lucide-react";

const Footer = () => {
  return (
   <footer className="bg-primary/90 h-15 flex items-center px-4">
        <div className="flex gap-2 px-2 py-1">
            <div> <Smile className="text-[#8696A0] hover:cursor-pointer" /></div>
            <div><Plus className="text-[#8696A0] hover:cursor-pointer"   /></div>
        </div>           
        <div className="bg-primary/30 px-4 h-10 w-full rounded-2xl flex items-center mx-2">
            <input type="text" placeholder="Type a message"
            className=" text-white rounded-4xl px-3 py-1 mt- w-full "/>
        </div>

        <div className="mx-2"> <Mic className="text-[#8696A0] hover:cursor-pointer" /></div>
    </footer>
  );
};

export default Footer;