import { EllipsisVertical, SearchIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-primary/90 h-15 flex items-center justify-between px-4 ">
      <div>logo</div>
      <div className="flex gap-2">
        <div>1</div>
        <div>
          <SearchIcon />
        </div>
        <div>
          <EllipsisVertical />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
