import { Link } from "react-router-dom";
import excersicebanner from "../assets/excersicebanner.mp4";

const Exercises = () => {
  const exerciseCategories = [
    { name: "Legs", path: "/exercises/legs" },
    { name: "Back", path: "/exercises/back" },
    { name: "Chest", path: "/exercises/chest" },
    { name: "Biceps/Triceps", path: "/exercises/arms" },
    { name: "Shoulder", path: "/exercises/shoulder" },
    { name: "Cardio", path: "/exercises/cardio" },
  ];

  return (
    <div className="p-10 bg-black">
      <div className="relative w-full h-[500px] rounded-b-lg shadow-2xl overflow-hidden">
        {/* Video Background */}
        <video
          className="w-full h-full object-cover brightness-75"
          autoPlay
          loop
          muted
        >
          <source src={excersicebanner} type="video/mp4" />
        </video>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl font-bold">Exercise Routines</h2>
          <p className="text-lg mt-2">
            Discover different workout plans for fitness goals.
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {exerciseCategories.map((exercise, index) => (
          <Link
            key={index}
            to={exercise.path}
            className="bg-gray-800 text-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{exercise.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
