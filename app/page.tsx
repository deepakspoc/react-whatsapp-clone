import Image from "next/image";

export default function Home() {
  return (
    <div>
     
        <div className="flex-1 p-6 space-y-4 overflow-auto h-full">
          <div className="bg-[#202c33] px-4 py-2 rounded-b-lg rounded-tr-lg w-fit arrow-left">
            Hello bro 👋
          </div>

          <div className="bg-[#005c4b] ml-auto px-4 py-2 rounded-l-lg rounded-br-lg w-fit arrow-right">
            Hi 😄
          </div>
          <div className="bg-[#005c4b] ml-auto px-4 py-2 rounded-lg w-fit">
            How are you?
          </div>
          <div className="bg-[#202c33] px-4 py-2 rounded-lg w-fit">
            I am good, thanks for asking. How about you?
          </div>
          <div className="bg-[#005c4b] ml-auto px-4 py-2 rounded-lg w-fit">
            I am doing well too, thanks for asking.
          </div>
          <div className="bg-[#202c33] px-4 py-2 rounded-lg w-fit">
            That's great to hear. What are you up to?
          </div>
          <div className="bg-[#005c4b] ml-auto px-4 py-2 rounded-lg w-fit">
            Just working on some projects. How about you?
          </div>
          <div className="bg-[#202c33] px-4 py-2 rounded-lg w-fit">
            Same here, just trying to stay productive.
          </div>
          <div className="bg-[#005c4b] ml-auto px-4 py-2 rounded-lg w-fit">
            That's good to hear. Let's catch up later.
          </div>
          <div className="bg-[#202c33] px-4 py-2 rounded-lg w-fit">
            Sure, talk to you later!
            </div>
        </div>
    </div>
  );
}
