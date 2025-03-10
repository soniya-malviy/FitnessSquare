import { useState } from "react";

const WeightLossNonVegDietPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("All");

  const dietPlans = [
    {
      name: "High-Protein Non-Vegetarian Diet",
      description:
        "A High-Protein Non-Vegetarian Diet helps in muscle building, fat loss, and overall fitness. Below are four different diet plans based on different preferences.",
      subPlans: [
        {
          name: "Classic High-Protein Diet (Balanced Approach)",
          idealFor: "General fitness, weight loss, and muscle building",
          focus: "Lean meats, eggs, dairy, and whole grains",
          mealPlan: {
            Breakfast: "3 boiled eggs + whole wheat toast",
            Lunch: "Grilled chicken breast + quinoa + sautéed vegetables",
            Snack: "Greek yogurt with almonds",
            Dinner: "Grilled fish + steamed broccoli",
          },
          allowed: ["Chicken", "Eggs", "Greek yogurt", "Quinoa", "Fish"],
          avoid: ["Sugary drinks", "Fried foods", "Refined carbs"],
        },
        {
          name: "Lean Muscle Gain Diet (For Athletes & Gym-Goers)",
          idealFor: "People looking to gain muscle & maintain low fat",
          focus: "High-quality proteins, complex carbs, and healthy fats",
          mealPlan: {
            Breakfast: "Scrambled eggs with smoked salmon",
            Lunch: "Grilled chicken with brown rice & avocado",
            Snack: "Protein shake + handful of nuts",
            Dinner: "Grilled turkey breast + quinoa + steamed spinach",
          },
          allowed: ["Lean meats", "Salmon", "Eggs", "Nuts", "Quinoa"],
          avoid: ["Junk food", "Processed meats", "Excess dairy"],
        },
        {
          name: "High-Protein Keto Diet (Low-Carb, High-Fat)",
          idealFor: "Fat loss while maintaining muscle",
          focus: "High-protein, high-fat, very low-carb",
          mealPlan: {
            Breakfast: "Omelet with cheese & avocado",
            Lunch: "Grilled chicken thighs + buttered spinach",
            Snack: "Boiled eggs with almonds",
            Dinner: "Grilled salmon with olive oil & asparagus",
          },
          allowed: ["Chicken thighs", "Eggs", "Fish", "Cheese", "Nuts"],
          avoid: ["Rice", "Bread", "Potatoes", "Fruits (except berries)"],
        },
        {
          name: "Indian High-Protein Non-Veg Diet",
          idealFor: "Those who prefer Indian flavors & protein-rich meals",
          focus: "Lean meats, eggs, lentils, dairy",
          mealPlan: {
            Breakfast: "Masala omelet + whole wheat roti",
            Lunch: "Grilled tandoori chicken + brown rice + dal",
            Snack: "Roasted chickpeas & Greek yogurt",
            Dinner: "Fish curry with sautéed vegetables",
          },
          allowed: ["Chicken", "Eggs", "Lentils", "Greek yogurt", "Paneer"],
          avoid: ["Deep-fried food", "Sugary drinks"],
        },
      ],
    },

    {
      name: "Low-Carb / Keto Non-Veg Diet Plans",
      description:
        "A Low-Carb or Keto Non-Veg Diet focuses on high protein & fats while minimizing carbs, helping in fat loss and improved metabolism. Below are four different meal plans based on different dietary preferences.",
      subPlans: [
        {
          name: "Classic Keto Non-Veg Diet (Standard Low-Carb)",
          idealFor: "Weight loss & maintaining muscle",
          focus: "High protein, high healthy fats, very low carbs",
          mealPlan: {
            Breakfast: "Scrambled eggs with avocado & cheese",
            Lunch: "Grilled chicken with olive oil & sautéed spinach",
            Snack: "Almonds & boiled eggs",
            Dinner: "Butter garlic salmon with roasted asparagus",
          },
          allowed: ["Chicken", "Eggs", "Cheese", "Fish", "Nuts"],
          avoid: ["Rice", "Bread", "Potatoes", "Sugar"],
        },
        {
          name: "High-Protein Keto Diet (For Gym & Muscle Retention)",
          idealFor: "Bodybuilders & fitness enthusiasts",
          focus: "Higher protein intake with moderate fats",
          mealPlan: {
            Breakfast: "3 boiled eggs + paneer cubes + walnuts",
            Lunch: "Grilled chicken breast with buttered green beans",
            Snack: "Whey protein shake + almonds",
            Dinner: "Fish tikka + sautéed mushrooms",
          },
          allowed: ["Lean meats", "Fish", "Eggs", "Greek yogurt"],
          avoid: ["High-carb vegetables", "Grains", "Sugary foods"],
        },
        {
          name: "Indian Low-Carb Keto Diet",
          idealFor: "Those who prefer Indian flavors",
          focus: "Traditional Indian meals with a keto twist",
          mealPlan: {
            Breakfast: "Masala omelet cooked in ghee + paneer cubes",
            Lunch: "Tandoori chicken + palak paneer (without cream)",
            Snack: "Cheese cubes + roasted peanuts",
            Dinner: "Fish curry (coconut-based) + sautéed vegetables",
          },
          allowed: ["Chicken", "Paneer", "Ghee", "Fish", "Nuts"],
          avoid: ["Roti", "Rice", "Lentils", "Sugar"],
        },
        {
          name: "Seafood-Based Keto Diet (Pescatarian Keto)",
          idealFor: "Seafood lovers who want low-carb meals",
          focus: "High healthy fats from fish, nuts, & oils",
          mealPlan: {
            Breakfast: "Smoked salmon with avocado & cream cheese",
            Lunch: "Grilled shrimp with olive oil & zucchini noodles",
            Snack: "Handful of macadamia nuts",
            Dinner: "Grilled mackerel with sautéed spinach & butter",
          },
          allowed: ["Salmon", "Shrimp", "Mackerel", "Olive oil"],
          avoid: ["Rice", "Bread", "High-carb fruits"],
        },
      ],
    },

    {
      name: "Mediterranean Non-Vegetarian Diet Plans ",
      description:
        "The Mediterranean Diet is known for its heart-healthy approach, rich in lean proteins, healthy fats, and fresh vegetables. Below are four different non-vegetarian Mediterranean meal plans based on different preferences.",
      subPlans: [
        {
          name: "Classic Mediterranean Non-Veg Diet (Balanced & Healthy)",
          idealFor: "Weight maintenance, heart health, & overall wellness",
          focus: "Lean meats, seafood, olive oil, whole grains, & veggies",
          mealPlan: {
            Breakfast: "Greek yogurt with walnuts & honey",
            Lunch: "Grilled salmon with olive oil & quinoa salad",
            Snack: "Hummus with cucumber slices",
            Dinner: "Grilled chicken with roasted vegetables & feta cheese",
          },
          allowed: ["Olive oil", "Salmon", "Chicken", "Nuts", "Whole grains"],
          avoid: ["Processed meats", "Refined carbs", "Sugary drinks"],
        },
        {
          name: "High-Protein Mediterranean Diet (For Fitness Enthusiasts)",
          idealFor: "Muscle building & fat loss",
          focus: "High protein from lean meats & seafood, moderate fats",
          mealPlan: {
            Breakfast: "Scrambled eggs with spinach & feta cheese",
            Lunch: "Grilled turkey breast with quinoa & chickpea salad",
            Snack: "Greek yogurt with almonds & olive oil",
            Dinner: "Grilled fish with olive oil, tomatoes & steamed broccoli",
          },
          allowed: ["Chicken", "Turkey", "Eggs", "Fish", "Greek yogurt"],
          avoid: ["Processed meats", "Deep-fried foods", "Excess dairy"],
        },
        {
          name: "Indian-Mediterranean Fusion Diet",
          idealFor: "Indian flavors with a Mediterranean twist",
          focus: "Lean proteins, legumes, healthy fats, & traditional spices",
          mealPlan: {
            Breakfast: "Masala omelet with whole wheat toast",
            Lunch: "Grilled tandoori fish with brown rice & yogurt dip",
            Snack: "Roasted chickpeas & almonds",
            Dinner: "Chicken kebabs with hummus & grilled vegetables",
          },
          allowed: ["Olive oil", "Tandoori chicken", "Fish", "Yogurt", "Nuts"],
          avoid: ["Butter-heavy dishes", "Refined flours", "Deep-fried foods"],
        },
        {
          name: "Seafood-Based Mediterranean Diet (Pescatarian Focus)",
          idealFor: "Fish lovers & heart health",
          focus: "Omega-3-rich fish, nuts, whole grains, & fresh greens",
          mealPlan: {
            Breakfast: "Smoked salmon with whole grain bread & avocado",
            Lunch: "Grilled shrimp with couscous & olive oil dressing",
            Snack: "Walnuts & fresh berries",
            Dinner: "Mackerel with grilled asparagus & lemon dressing",
          },
          allowed: [
            "Salmon",
            "Shrimp",
            "Sardines",
            "Olive oil",
            "Whole grains",
          ],
          avoid: ["Red meat", "Refined sugars", "Processed foods"],
        },
      ],
    },
    {
      name: "Paleo Non-Vegetarian Diet Plans ",
      description:
        "The Paleo Diet focuses on eating whole, unprocessed foods similar to what our ancestors consumed. It includes lean meats, fish, eggs, vegetables, nuts, and healthy fats while avoiding grains, legumes, and processed foods. Below are four different Paleo non-veg meal plans based on different goals.",
      subPlans: [
        {
          name: "Classic Paleo Diet (Balanced & Simple)",
          idealFor: "Overall health & natural eating",
          focus: "Lean meats, fish, eggs, nuts, and fresh vegetables",
          mealPlan: {
            Breakfast: "Scrambled eggs with avocado & sautéed spinach",
            Lunch:
              "Grilled chicken breast with roasted sweet potatoes & mixed greens",
            Snack: "Almonds & fresh berries",
            Dinner: "Grilled salmon with steamed broccoli & olive oil",
          },
          allowed: ["Chicken", "Salmon", "Eggs", "Nuts", "Leafy greens"],
          avoid: ["Grains", "Dairy", "Processed foods", "Sugar"],
        },
        {
          name: "High-Protein Paleo Diet (For Muscle Gain & Fitness)",
          idealFor: "Muscle building & fat loss",
          focus: "Higher protein intake with moderate healthy fats",
          mealPlan: {
            Breakfast: "3 boiled eggs with grilled turkey slices & avocado",
            Lunch:
              "Grilled chicken breast with roasted zucchini & sweet potatoes",
            Snack: "Beef jerky & mixed nuts",
            Dinner: "Pan-seared tuna with sautéed kale & olive oil",
          },
          allowed: ["Lean meats", "Fish", "Eggs", "Nuts", "Seeds"],
          avoid: ["Dairy", "Legumes", "Processed carbs"],
        },
        {
          name: "Indian Paleo Diet (For Indian Food Lovers)",
          idealFor: "Those who prefer Indian flavors in a paleo-friendly way",
          focus: "Lean meats, coconut-based curries, and healthy fats",
          mealPlan: {
            Breakfast: "Masala omelet with coconut oil & fresh fruit",
            Lunch: "Grilled tandoori chicken with sautéed spinach",
            Snack: "Roasted almonds & coconut chunks",
            Dinner:
              "Fish curry (cooked with coconut milk) & steamed vegetables",
          },
          allowed: ["Chicken", "Fish", "Eggs", "Coconut", "Vegetables"],
          avoid: ["Lentils", "Grains", "Dairy", "Sugar"],
        },
        {
          name: "Seafood-Based Paleo Diet (For Fish Lovers)",
          idealFor: "Those who love seafood & need omega-3-rich meals",
          focus: "High seafood intake with nuts, seeds & greens",
          mealPlan: {
            Breakfast: "Smoked salmon with avocado & scrambled eggs",
            Lunch: "Grilled shrimp with roasted sweet potatoes & green salad",
            Snack: "Handful of walnuts & fresh berries",
            Dinner: "Mackerel with steamed asparagus & lemon dressing",
          },
          allowed: [
            "Salmon",
            "Shrimp",
            "Nuts",
            "Olive oil",
            "Fresh vegetables",
          ],
          avoid: ["Dairy", "Processed foods", "Grains"],
        },
      ],
    },
  ];

  // Filtered Diet Plans Based on Selection
  const filteredPlans =
    selectedPlan === "All"
      ? dietPlans
      : dietPlans.filter((plan) => plan.name === selectedPlan);

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Left Sidebar - Static Filter */}
      <div className="w-1/4  bg-black p-6">
        <h2 className="text-2xl font-semibold mb-6  ">
          Weight Loss (Non-Veg) Diet Plan
        </h2>
        <label className="block text-lg font-medium mb-2">
          Choose a diet type:
        </label>
        <select
          className="w-full p-3 rounded-md bg-gray-700 border border-gray-500 text-white focus:outline-none focus:border-blue-400"
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
        >
          <option value="All">All Diet Plans</option>
          {dietPlans.map((plan) => (
            <option key={plan.name} value={plan.name}>
              {plan.name}
            </option>
          ))}
        </select>
      </div>

      {/* Right Side - Diet Plan Content */}
      <div className="w-3/4 ">
        <div className="grid grid-cols-1 gap-6">
          {filteredPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-800 p-6 rounded-lg shadow-lg  transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-300">{plan.description}</p>

              {/* Sub Plans for Low-Carb Vegetarian Diet */}
              {plan.subPlans && (
                <div className="mt-4 space-y-6">
                  {plan.subPlans.map((sub) => (
                    <div
                      key={sub.name}
                      className="bg-gray-900 p-4 rounded-lg shadow-md"
                    >
                      <h4 className="text-lg font-semibold text-green-400">
                        {sub.name}
                      </h4>
                      {sub.fastingWindow && (
                        <p className="text-gray-400 mt-3 font-semibold">
                          🕒 Fasting Window:{sub.fastingWindow}
                        </p>
                      )}
                      {sub.eatingWindow && (
                        <p className="text-gray-400 mt-3 font-semibold">
                          🕒 Eating Window:{sub.eatingWindow}
                        </p>
                      )}

                      <p className="text-gray-400">
                        <strong>👉 Ideal for:</strong> {sub.idealFor}
                      </p>
                      <p className="text-gray-400">
                        <strong>👉 Focus:</strong> {sub.focus}
                      </p>

                      {/* Allowed & Avoided Foods */}
                      <p className="text-gray-300 mt-2">
                        <strong>✅ Allowed:</strong> {sub.allowed.join(", ")}
                      </p>
                      <p className="text-gray-300">
                        <strong>❌ Avoid:</strong> {sub.avoid.join(", ")}
                      </p>

                      {/* Meal Plan */}
                      <p className="text-gray-400 mt-3 font-semibold">
                        🕒 Sample Meal Plan:
                      </p>
                      <ul className="list-disc list-inside text-gray-300">
                        {Object.entries(sub.mealPlan).map(([meal, menu]) => (
                          <li key={meal}>
                            <strong>{meal}:</strong> {menu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeightLossNonVegDietPlan;
