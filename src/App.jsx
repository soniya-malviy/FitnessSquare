import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { auth } from "./config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DietPlans from "./pages/DietPlans";
import Exercises from "./pages/Excersice";
import WeightLossVegDietPlan from "./pages/Weightlossveg";
import WeightLossNonVegDietPlan from "./pages/Weightlossnonveg";
import LegWorkout from "./pages/LegWorkout";
import BackWorkout from "./pages/Back";
import ChestWorkout from "./pages/chest";
import ShoulderWorkout from "./pages/shoulders";
import Cardio from "./pages/cardio";
import BicepTricepsWorkout from "./pages/bicepsandtriceps";
function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diet" element={<DietPlans />} />
        <Route path="/exercise" element={<Exercises />} />
        <Route path="/Weightlossveg" element={<WeightLossVegDietPlan />} />
        <Route
          path="/Weightlossnonveg"
          element={<WeightLossNonVegDietPlan />}
        />
        <Route path="/exercises/legs" element={<LegWorkout />} />
        <Route path="/exercises/back" element={<BackWorkout />} />
        <Route path="/exercises/chest" element={<ChestWorkout />} />
        <Route path="/exercises/shoulder" element={<ShoulderWorkout />} />
        <Route path="/exercises/cardio" element={<Cardio />} />
        <Route path="/exercises/arms" element={<BicepTricepsWorkout />} />
      </Routes>
    </Router>
  );
}

export default App;
