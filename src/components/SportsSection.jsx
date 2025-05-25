import React from "react";

const sports = [
  {
    title: "RUNNING",
    image: "https://images.pexels.com/photos/2346018/pexels-photo-2346018.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "FOOTBALL",
    image: "https://images.pexels.com/photos/30722371/pexels-photo-30722371/free-photo-of-professional-soccer-player-dribbling-at-night-game.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "TRAINING",
    image: "https://images.pexels.com/photos/7952236/pexels-photo-7952236.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "BASKETBALL",
    image: "https://images.pexels.com/photos/27871179/pexels-photo-27871179/free-photo-of-a-woman-in-a-bikini-holding-a-basketball-ball.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "STUDIO",
    image: "https://images.pexels.com/photos/15847935/pexels-photo-15847935/free-photo-of-smiling-man-holding-a-canon-camera.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const SportsSection = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">GEAR UP FOR SPORTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {sports.map((sport, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src={sport.image}
              alt={sport.title}
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
              {sport.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsSection;
