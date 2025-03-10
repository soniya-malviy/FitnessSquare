import video1 from "../assets/benchpressvideo.mp4";
import video2 from "../assets/weightlifting.mp4";
import video3 from "../assets/lunges.mp4";
import video4 from "../assets/pushupvideo.mp4";
import diet from "../assets/diet.webp";
import workout from "../assets/workout.webp";
import { Navigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col">
      {/* Full-width Hero Section */}
      <div className="w-full h-[600px] md:h-[700px] lg:h-[800px] relative overflow-hidden">
        <video
          className="w-full h-full object-cover rounded-b-lg shadow-2xl brightness-75"
          autoPlay
          loop
          muted
        >
          <source src={video4} type="video/mp4" />
        </video>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black flex flex-col items-center justify-center px-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-gray-300 to-white text-transparent bg-clip-text text-center">
            Transform Your Body, Elevate Your Life!
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-300 mt-4 text-center max-w-2xl">
            Personalized Diet & Workout Plans Tailored to Your Goals.
          </p>

          {/* Explore Button & Arrow */}
          <div className="mt-12 flex flex-col items-center space-y-4">
            <button
              className="border-2 border-white py-3 px-12 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                document
                  .getElementById("scroll-target")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore
            </button>
            <div
              className="animate-bounce cursor-pointer"
              onClick={() =>
                document
                  .getElementById("scroll-target")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-8 w-8"
              >
                <path
                  fill="gray"
                  d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Diet & Workout Section */}
      <div
        id="scroll-target"
        className="w-full py-20 px-4 md:px-8 lg:px-16 bg-black flex flex-col md:flex-row justify-center items-center gap-8"
      >
        {/* Diet Plans Section */}
        <div className="w-full md:w-[45%] min-h-[300px] flex flex-col justify-center items-center text-center text-white rounded-xl bg-cover bg-center bg-black/50 hover:bg-black/70 transition-all duration-300 border-2 border-white/20 p-8 shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-black/50 hover:bg-black/30 transition-all duration-300"
            onClick={() => Navigate("/diet")}
          ></div>
          <h2 className="text-4xl font-bold mb-4 z-10">Diet Plans</h2>
          <p className="text-lg font-medium z-10">
            Personalized diet plans for healthy weight loss & muscle gain –
            including both Veg & Non-Veg options!
          </p>
        </div>

        {/* Workout Section */}
        <div className="w-full md:w-[45%] min-h-[300px] flex flex-col justify-center items-center text-center text-white rounded-xl bg-cover bg-center bg-black/50 hover:bg-black/70 transition-all duration-300 border-2 border-white/20 p-8 shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/50 hover:bg-black/30 transition-all duration-300"></div>
          <h2 className="text-4xl font-bold mb-4 z-10">Workout</h2>
          <p className="text-lg font-medium z-10">
            Effective home & gym workouts designed to build strength, endurance,
            and overall fitness!
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full py-20 px-4 md:px-8  bg-black flex flex-col md:flex-row justify-center items-center ">
        {/* Mission Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-300 to-white text-transparent bg-clip-text">
            Our Mission
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Our mission is to help individuals achieve their fitness goals with
            structured workout routines and customized diet plans. We aim to
            provide guidance, motivation, and expert advice to create
            sustainable fitness habits that enhance overall well-being.
          </p>
        </div>

        {/* Mission Video */}
        <div className="w-full md:w-1/3 flex justify-center">
          <video
            className="w-full md:w-[90%] rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            autoPlay
            loop
            muted
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
