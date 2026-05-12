import {
  CircleFadingPlus,
  EllipsisVertical,
  MessageCircleCode,
  MessageSquare,
  MessageSquarePlus,
  PanelTopOpen,
  SearchIcon,
  Settings,
  User,
  Users,
} from "lucide-react";
import AccountList from "../AccountList";
const Sidebar = () => {
  return (
    <aside className="col-span-3 flex text-typo h-full max-w-109.75">
      <div className="bg-primary/90 w-15 items-center justify-between px-4 flex flex-col">
        <div className="flex-col mt-2 gap-2 items-center justify-between flex">
          {/* MESSAGES */}
          <button className="relative size-10 hover:cursor-pointer bg-gray-500 grid place-items-center rounded-full">
            <span className="absolute -top-1 -right-1 size-5 text-xs grid place-items-center bg-green-700 rounded-full">
              10
            </span>
            <span>
              {" "}
              <MessageSquare />{" "}
            </span>
          </button>
          {/* STATUS */}
          <button className="relative size-10 hover:cursor-pointer grid place-items-center rounded-full">
            <span className="absolute top-1 right-1 size-3 grid place-items-center bg-green-700 rounded-full"></span>
            <span>
              <CircleFadingPlus />
            </span>
          </button>
          {/*CHANNELS */}
          <button className="relative size-10 hover:cursor-pointer grid place-items-center rounded-full">
            <span>
              <MessageCircleCode />
            </span>
          </button>
          {/* USERS */}
          <button className="relative size-10 hover:cursor-pointer grid place-items-center rounded-full">
            <span>
              <Users />
            </span>
          </button>
        </div>
        {/* SETTINGS */}
        <div className=" w-15 gap-4 items-center justify-between px-4 flex flex-col">
          <button className="relative size-10 grid place-items-center rounded-full hover:cursor-pointer">
            <span>
              <Settings />
            </span>
          </button>
          {/* USER */}
          <button className="relative size-10 mb-2 rounded-full hover:cursor-pointer bg-gray-500 grid place-items-center">
            <span>
              <User />
            </span>
          </button>
        </div>
      </div>

      {/* USER-LIST-AND-SEARCH-BAR */}
      <div className="bg-primary flex-1 min-w-0 h-full flex flex-col overflow-auto">
        <div>
          <div className="h-15 flex items-center justify-between px-4">
            <div>
              <b>Chats</b>
            </div>
            <div className="flex gap-2 items-center justify-between px-4">
              <button className="text-[#AEBAC1] hover:cursor-pointer">
                <MessageSquarePlus />
              </button>
              <button className="text-[#AEBAC1] hover:cursor-pointer">
                <EllipsisVertical />
              </button>
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
            {/* FILTERS */}
            <div className="gap-4 px-6 flex items-center mt-4 w-full">
              <div className=" size-8 text-green-500 bg-[#202C33] rounded-full ">
                <button className="size-8 grid place-items-center hover:cursor-pointer">
                  All
                </button>
              </div>
              <div className="p-1 text-[#AEBAC1] bg-[#202C33] rounded-full ">
                <button className="grid place-items-center hover:cursor-pointer">
                  Unread
                </button>
              </div>
              <div className="p-1 text-[#AEBAC1] bg-[#202C33] rounded-full ">
                <button className="hover:cursor-pointer">Groups</button>
              </div>
            </div>
            <div className="h-10 mt-2 w-full flex items-center justify-between ">
              <div className="px-6 h-10 mt-2 w-full gap-4 flex ">
                <div>
                  <PanelTopOpen className="text-green-500 hover:cursor-pointer" />
                </div>
                {/* Archived */}
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
            {/* IMPORT ACCOUNT LIST */}
          </div>
        </div>
        <AccountList />
      </div>
    </aside>
  );
};

export default Sidebar;
