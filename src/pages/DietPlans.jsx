import weightloss from "../assets/weightloss.webp";
import weightgain from "../assets/weightgain.jpg";
import { Link, Navigate } from "react-router-dom";

const DietPlans = () => {
  const weigthlossveg = () => {
    Navigate("/WeightLossVegDietPlan");
  };
  return (
    <div className="p-10 bg-black min-h-screen flex flex-col items-center">
      {/* <h2 className="text-4xl font-extrabold text-white text-center mb-10">
        Diet Plans
      </h2> */}

      {/* Diet Plan Sections */}
      <div className="flex flex-col md:flex-row gap-10 w-full justify-center">
        {/* Weight Loss Plan */}
        <div className="border-1 border-white p-8 rounded-lg shadow-lg text-center w-full md:w-[40%] hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Weight Loss
          </h3>
          <p className="text-gray-300">
            A low-calorie, nutrient-rich diet plan to help you shed fat while
            staying healthy.
          </p>
          <img
            src={weightloss}
            alt="Weight Loss"
            className="mt-4 rounded-lg brightness-75"
          />

          <div className="flex justify-between mt-[6rem] px-8">
            <Link
              to="/Weightlossveg"
              className="text-white border px-[2rem] py-[0.5rem]"
            >
              Veg
            </Link>
            <Link
              to="/Weightlossnonveg"
              className="text-white border px-[2rem] py-[0.5rem]"
            >
              Non-veg
            </Link>
          </div>
        </div>

        {/* Weight Gain Plan */}
        <div className="border-1 border-white p-8 rounded-lg shadow-lg text-center w-full md:w-[40%] hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Weight Gain
          </h3>
          <p className="text-gray-300">
            A high-calorie, protein-packed diet to help you build muscle and
            gain strength.
          </p>
          <img
            src={weightgain}
            alt="Weight Loss"
            className="mt-4 rounded-lg brightness-75"
          />
          <div className="flex justify-between mt-[2.5rem] px-8">
            <a className="text-white border px-[2rem] py-[0.5rem]">Veg</a>
            <a className="text-white border px-[2rem] py-[0.5rem]">Non-veg</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlans;
