import { Pin, User } from "lucide-react";

const Account = () => {
  return (
    <div className="flex gap-2 py-4 items-center ">
      {/* Profile avatar name and message */}
      <div className="flex-1 flex gap-2 min-w-0 items-center ">
        <div className="size-12 bg-gray-500 shrink-0 grid place-items-center rounded-full">
          <User />
        </div>
        {/* Account name and message */}
        <div className="min-w-0">
          <div className="text-lg font-bold">Account name</div>
          <div className="text-sm truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut
            voluptas hic neque, nulla quis quo dignissimos sunt iusto quae
            maxime eaque, vel eligendi nihil molestias debitis labore, dolorum 
            facilis.
          </div>
        </div>
      </div>

      {/* Time and pin icon section */}
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs text-gray-400">12:18</span>
        <span className="text-gray-400">
          <Pin size={14} className="rotate-45" />
        </span>
      </div>
    </div>
  );
};

export default Account;
