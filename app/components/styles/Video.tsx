import Image from "next/image";
import Link from "next/link";
import { Ellipsis } from "lucide-react";

const Video = () => {
  const videos = [
    {
      id: 1,
      title: "Bhakhi Hit Song",
      channel: "Radha Rani",
      logo: "/images/logo_profile.jpg",
      thumbnail: "/images/youtube_thumbnail.jpg",
      views: "1.2M views",
      date: "2 days ago",
      duration: "12:34",
      url: "https://youtu.be/e4399i3T1Y4?si=42Gok1qUKx5EGjYs",
    },
    {
      id: 2,
      title: "Radhe Tere Charno Me",
      channel: "Radhe Radhe",
      logo: "/images/logo_profile.jpg",
      thumbnail: "/images/youtube_thumbnail.jpg",
      views: "850K views",
      date: "5 hours ago",
      duration: "08:10",
      url: "https://youtu.be/e4399i3T1Y4?si=42Gok1qUKx5EGjYs",
    },
    {
      id: 3,
      title: "राधे तेरे चरणों की धूल जो मिल जाए | Radhe Tere Charno Ki | Bhumika Sharma | Krishna New Bhajan 2026",
      channel: "Tech Reviews",
      logo: "/images/logo_profile.jpg",
      thumbnail: "/images/youtube_thumbnail2.jpg",
      views: "1.5M views",
      date: "1 day ago",
      duration: "15:42",
      url: "https://youtu.be/hMy5za-m5Ew?si=PDxyCHnAmaJQLQod",
    },
    {
      id: 4,
      title: "Cooking Tutorial: Pasta Recipe",
      channel: "Foodie Channel",
      logo: "/images/logo_profile.jpg",
      thumbnail: "/images/youtube_thumbnail2.jpg",
      views: "900K views",
      date: "3 hours ago",
      duration: "10:25",
      url: "https://youtu.be/e4399i3T1Y4?si=42Gok1qUKx5EGjYs",
    },
    {
      id: 5,
      title: "Travel Vlog: Exploring Paris",
      channel: "Wanderlust Vlogs",
      logo: "/images/logo_profile.jpg",
      thumbnail: "/images/youtube_thumbnail3.jpg",
      views: "1.1M views",
      date: "2 day ago",
      duration: "25:30",
      url: "https://youtu.be/OX6sKgb6cLs?si=wpylzH_QiTSiYUuC",
    },
    {
      id: 6,
      title: "Radhe Tere Charno Me",
      channel: "Radhe Radhe",
      logo: "/images/logo_profile.jpg",
      thumbnail: "/Images/youtube_thumbnail3.jpg",
      views: "3.1M views",
      date: "5 day ago",
      duration: "23:30",
      url: "https://youtu.be/agNkrieusCs?si=UjqSNohXyWNE1EOa",

    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className="rounded-lg hover:cursor-pointer p-4 hover:bg-gray-200 transition duration-300 shadow-lg"
        >
          {/* Thumbnail */}
          <Link href={video.url} target="_blank">
            <div className="relative aspect-video bg-black rounded-t">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                className="object-cover rounded-t"
              />
              <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 rounded">
                {video.duration}
              </span>
            </div>
          </Link>

          {/* Info */}
          <div className="p-2 -mb-2 flex justify-between items-start">
            {/* Left side: logo + text */}
            <div className="flex gap-3 items-center">
  <div className="w-10 h-10 flex-shrink-0">
    <Image
      src={video.logo}
      alt={video.channel}
      width={40}
      height={40}
      className="rounded-full object-cover"
    />
  </div>
  <div className="flex flex-col">
    <h2 className="font-semibold text-sm line-clamp-2 overflow-hidden text-ellipsis">
      {video.title}
    </h2>
    <p className="text-xs text-gray-600">{video.channel}</p>
    <p className="text-xs text-gray-500">
      {video.views} • {video.date}
    </p>
  </div>
</div>


            {/* Right side: ellipsis */}
<Ellipsis className="w-6 h-6 text-gray-600 cursor-pointer flex-shrink-0" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;
