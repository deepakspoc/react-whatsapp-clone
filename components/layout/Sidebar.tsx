import {
  EllipsisVertical,
  MessageSquare,
  MessageSquarePlus,
  PanelTopOpen,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import AccountList from "../AccountList";
const Sidebar = () => {
  return (
    <aside className="col-span-3 flex text-typo">
      <div className="bg-primary/90 w-15 items-center justify-between px-4 flex flex-col">
        <div className="flex-col mt-2 gap-2 items-center justify-between flex">
          <button className="relative size-10 hover:cursor-pointer  grid place-items-center rounded-full">
            <span className="absolute -top-1 -right-1 size-5 text-xs grid place-items-center bg-green-700 rounded-full">
              10
            </span>
            <span>
              <MessageSquare />
            </span>
          </button>
          <div className="relative w-10 h-10 overflow-hidden mb-2 hover:cursor-pointer">
            <Image
              src="/images/Button - Status.png"
              alt="button status"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-10 h-10 overflow-hidden mb-2 hover:cursor-pointer">
            <Image
              src="/images/Button-Channels.png"
              alt="button channels"
              fill
              className="object-contain rounded-full"
            />
          </div>
          <div className="relative w-10 h-10 overflow-hidden mb-2 hover:cursor-pointer">
            <Image
              src="/images/Button-communities.png"
              alt="button communities"
              fill
              className="object-contain rounded-full"
            />
          </div>
        </div>
        <div className=" w-15 gap-4 items-center justify-between px-4 flex flex-col">
          <div className="relative w-10 h-10 overflow-hidden rounded-full hover:cursor-pointer">
            <Image
              src="/images/settings.png"
              alt="setting"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-10 h-10 overflow-hidden mb-2 rounded-full hover:cursor-pointer">
            <Image
              src="/images/person.png"
              alt="person"
              fill
              className="object-contain "
            />
          </div>
        </div>
      </div>
      {/* User List */}
      <div className="bg-primary flex-1 min-w-0">
        <div className="h-15 flex items-center justify-between px-4">
          <div>
            <b>Chats</b>
          </div>
          <div className="flex gap-2 items-center justify-between px-4">
            <div>
              <MessageSquarePlus className="text-[#AEBAC1] rotate-90 hover:cursor-pointer" />
            </div>
            <EllipsisVertical className="text-[#AEBAC1] hover:cursor-pointer" />
          </div>
        </div>
        <div>
          <div className="bg-primary/30 px-4 h-10 w-full rounded-2xl flex items-center relative">
            <SearchIcon className=" absolute left-6 text-[#AEBAC1] hover:cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="px-10 py-1 w-full bg-[#202C33] rounded-xl"
            />
          </div>
          <div className="gap-4 px-6 flex items-center justify-start mt-4 ">
            <div className="text-green-500 bg-[#202C33] rounded-xl ">
              <button className="hover:cursor-pointer">All</button>
            </div>
            <div className="text-[#AEBAC1] bg-[#202C33] rounded-xl ">
              <button className="hover:cursor-pointer">Unread</button>
            </div>
            <div className="text-[#AEBAC1] bg-[#202C33] rounded-xl ">
              <button className="hover:cursor-pointer">Groups</button>
            </div>
          </div>
          <div className="h-10 mt-2 w-full flex items-center justify-between ">
            <div className="px-6 h-10 mt-2 w-full gap-4 flex ">
              <div>
                <PanelTopOpen className="text-green-500 hover:cursor-pointer" />
              </div>
              <div>
                <button className="hover:cursor-pointer">Archived</button>
              </div>
            </div>
            <div>
              <button className="text-green-500 justify m-2 hover:cursor-pointer">
                2
              </button>
            </div>
          </div>
          <AccountList />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
