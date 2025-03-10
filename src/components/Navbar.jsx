import { Link } from "react-router-dom";
import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";
import logo from "../assets/logo2.jpeg";
const Navbar = ({ user }) => {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="bg-black p-4 flex justify-between text-white backdrop-blur-md">
      <h1 className="text-xl font-extrabold  text-white bg-clip-text">
        <img src={logo} className="h-[65px] w-[200px]" />
      </h1>
      <div className="space-x-10 mt-[1rem]">
        <Link
          className="text-xl font-extrabold  text-gray-300 bg-clip-text"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-xl font-extrabold  text-gray-300 bg-clip-text"
          to="/diet"
        >
          Diet Plans
        </Link>
        <Link
          className="text-xl font-extrabold  text-gray-300 bg-clip-text"
          to="/exercise"
        >
          Exercises
        </Link>
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link
            className="bg-transparent border px-4 py-2 rounded hover:bg-green-600"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
