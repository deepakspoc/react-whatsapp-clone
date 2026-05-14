"use client";

import { Mic, Smile, Plus, SendHorizontal } from "lucide-react";

const Footer = () => {
  const handleClick = (buttonName) => {
    console.log(`${buttonName}`);
    alert(`${buttonName} clicked`);
  };

  return (
    <footer className="bg-primary/90 h-15 flex items-center px-4">
      <div className="flex gap-2 px-2 py-1">
        <button onClick={() => handleClick("Button 1")}>
          <Smile className="text-[#8696A0] hover:cursor-pointer" />
        </button>
        <button onClick={() => handleClick("Button 2")}>
          <Plus className="text-[#8696A0] hover:cursor-pointer" />
        </button>
      </div>

      {/* Input field */}
      <div className="px-4 h-10 w-full  flex items-center mx-2">
        <input type="text" placeholder="Type a message"
          className="text-white px-3 py-1 w-full bg-[#202C33] rounded-[8px]" />

        {/* send button */}
        <button onClick={() => handleClick("Send")}
          className="ml-2 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 hover:bg-green-600">
          <SendHorizontal className="text-white w-5 h-5" />
        </button>
      </div>

      <button onClick={() => handleClick("Button 3")} className="mx-2">
        <Mic className="text-[#8696A0] hover:cursor-pointer" />
      </button>
    </footer>
  );
};

export default Footer;
