"use client";


const categories = [
  "All",
  "Music",
  "News",
  "Movies",
  "Technology",

];

const CategoryBar = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-4 rounded px-4 py-2">
      {categories.map((cat, index) => (
        <button
          key={index}
          className="px-4 py-1 bg-gray-100 rounded-full hover:bg-gray-400 font-bold"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
