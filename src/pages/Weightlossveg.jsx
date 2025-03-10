import { useState } from "react";

const WeightLossVegDietPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("All");

  const dietPlans = [
    {
      name: "Low-Carb Vegetarian Diet",
      description:
        "A Low-Carb Vegetarian Diet focuses on minimizing carbohydrate intake while ensuring adequate protein and healthy fats. Here are four different types of low-carb vegetarian diets.",
      subPlans: [
        {
          name: "High-Protein Low-Carb Vegetarian Diet",
          idealFor: "Muscle building & fat loss",
          focus: "High protein, moderate fats, low carbs",
          allowed: [
            "Paneer",
            "Tofu",
            "Greek yogurt",
            "Lentils",
            "Nuts",
            "Seeds",
            "Eggs (if vegetarian)",
          ],
          avoid: ["Rice", "Wheat", "Potatoes", "Sugar", "Processed foods"],
          mealPlan: {
            Breakfast: "Paneer bhurji with spinach + green tea",
            Lunch: "Soya chunks curry with sautéed vegetables",
            Snack: "Roasted peanuts or Greek yogurt with chia seeds",
            Dinner: "Grilled tofu with stir-fried mushrooms & bell peppers",
          },
        },
        {
          name: "Plant-Based Keto (No-Carb) Vegetarian Diet",
          idealFor: "Extreme fat loss (Ketosis state)",
          focus: "High healthy fats, moderate protein, ultra-low carbs",
          allowed: [
            "Avocados",
            "Nuts",
            "Coconut",
            "Cheese",
            "Olive oil",
            "Seeds",
            "Paneer",
          ],
          avoid: [
            "Grains",
            "Legumes",
            "High-carb vegetables (potatoes, corn, carrots)",
          ],
          mealPlan: {
            Breakfast: "Avocado smoothie with coconut milk",
            Lunch: "Zucchini noodles with pesto & olives",
            Snack: "Almond butter with cucumber slices",
            Dinner: "Paneer cubes stir-fried in coconut oil with greens",
          },
        },
        {
          name: "Indian-Style Low-Carb Vegetarian Diet",
          idealFor: "Those who prefer Indian meals while keeping carbs low",
          focus: "Traditional foods with reduced grains and sugars",
          allowed: [
            "Paneer",
            "Dal",
            "Leafy greens",
            "Nuts",
            "Coconut",
            "Buttermilk",
          ],
          avoid: ["Roti", "Rice", "Sugar", "Starchy vegetables"],
          mealPlan: {
            Breakfast: "Besan (gram flour) chilla with curd",
            Lunch: "Palak paneer with a side of cucumber salad",
            Snack: "Roasted makhana or peanuts",
            Dinner: "Dal tadka with mixed vegetable sabzi (no roti/rice)",
          },
        },
        {
          name: "Mediterranean Low-Carb Vegetarian Diet",
          idealFor: "Balanced fat loss & long-term sustainability",
          focus: "Healthy fats, fiber-rich veggies, plant proteins",
          allowed: [
            "Olives",
            "Nuts",
            "Cheese",
            "Hummus",
            "Olive oil",
            "Tofu",
            "Greek yogurt",
          ],
          avoid: ["Bread", "Pasta", "Rice", "Potatoes", "Sugar"],
          mealPlan: {
            Breakfast: "Greek yogurt with walnuts & chia seeds",
            Lunch: "Grilled vegetables with hummus & feta cheese",
            Snack: "Handful of almonds & olives",
            Dinner: "Spinach and feta salad with olive oil dressing",
          },
        },
      ],
    },

    {
      name: "High-Protein Vegetarian Diet",
      description:
        "A High-Protein Vegetarian Diet is great for weight loss, muscle building, and maintaining energy levels. Here are four different variations of high-protein vegetarian diets, each with a unique approach.",
      subPlans: [
        {
          name: "Indian High-Protein Vegetarian Diet",
          idealFor: "Those who prefer traditional Indian meals",
          focus: "Lentils, paneer, soya, and whole grains",
          mealPlan: {
            Breakfast: "Moong dal chilla with curd",
            Lunch: "Rajma or chana with brown rice & salad",
            Snack: "Roasted chana & buttermilk",
            Dinner: "Palak paneer with a multigrain roti",
          },
          allowed: ["Paneer", "Dal", "Chana", "Rajma", "Sprouts"],
          avoid: ["White rice", "Refined flour", "Sugary drinks"],
        },
        {
          name: "High-Protein & Low-Carb Vegetarian Diet",
          idealFor: "Fat loss while maintaining muscle",
          focus: "More protein, fewer carbs",
          mealPlan: {
            Breakfast: "Scrambled paneer with bell peppers",
            Lunch: "Soya chunks stir-fry with mixed greens",
            Snack: "Greek yogurt with chia seeds",
            Dinner: "Grilled tofu with sautéed mushrooms & spinach",
          },
          allowed: ["Tofu", "Soya chunks", "Paneer", "Nuts", "Seeds"],
          avoid: ["High-carb vegetables (potatoes, corn)", "Sugary snacks"],
        },
        {
          name: "Muscle-Building High-Protein Vegetarian Diet",
          idealFor: "Gym-goers & athletes",
          focus: "High protein, moderate carbs & fats",
          mealPlan: {
            Breakfast: "Oatmeal with peanut butter & protein powder",
            Lunch: "Quinoa with chickpeas & sautéed veggies",
            Snack: "Protein smoothie (banana + whey + almond milk)",
            Dinner: "Paneer tikka with vegetable soup",
          },
          allowed: ["Whey protein", "Peanut butter", "Quinoa", "Legumes"],
          avoid: ["Deep-fried snacks", "Sugary drinks"],
        },
        {
          name: "Mediterranean High-Protein Vegetarian Diet",
          idealFor: "Balanced approach with long-term sustainability",
          focus: "Healthy fats, plant-based protein, fiber-rich foods",
          mealPlan: {
            Breakfast: "Greek yogurt with walnuts & chia seeds",
            Lunch: "Chickpea salad with feta cheese & olive oil",
            Snack: "Roasted almonds & cottage cheese",
            Dinner: "Grilled tofu with mixed vegetables",
          },
          allowed: ["Greek yogurt", "Hummus", "Tofu", "Nuts", "Legumes"],
          avoid: ["Processed carbs", "Refined oils"],
        },
      ],
    },

    {
      name: "No-Carb / Keto Vegetarian Diet",
      description:
        "A No-Carb / Keto Vegetarian Diet is designed to put the body into ketosis, where it burns fat for fuel instead of carbs. This diet is high in healthy fats, moderate in protein, and extremely low in carbohydrates. Below are four variations of vegetarian keto diets.",
      subPlans: [
        {
          name: "Indian Keto Vegetarian Diet",
          idealFor: "Those who prefer Indian flavors while following keto",
          focus: "Paneer, coconut, ghee, and low-carb vegetables",
          mealPlan: {
            Breakfast: "Paneer bhurji cooked in ghee + black coffee",
            Lunch: "Palak paneer with coconut flour roti",
            Snack: "Roasted makhana with butter",
            Dinner: "Grilled mushrooms with paneer & mint chutney",
          },
          allowed: ["Paneer", "coconut", "ghee", "nuts", "seeds"],
          avoid: ["Wheat", "rice", "lentils", "sugar", "starchy vegetables"],
        },
        {
          name: "High-Protein Keto Vegetarian Diet",
          idealFor: "Those who want to maintain muscle while losing fat",
          focus: "Tofu, paneer, Greek yogurt, nuts",
          mealPlan: {
            Breakfast: "Scrambled tofu with spinach & avocado",
            Lunch: "Paneer tikka with sautéed bell peppers & olive oil",
            Snack: "Greek yogurt with flaxseeds",
            Dinner: "Soya chunks stir-fry with coconut curry",
          },
          allowed: ["Tofu", "Greek yogurt", "paneer", "nuts"],
          avoid: ["High-carb dairy", "legumes", "grains"],
        },
        {
          name: "Dairy-Free Vegan Keto Diet",
          idealFor: "Those who want to avoid dairy while staying on keto",
          focus: "Avocados, coconut products, nuts, and seeds",
          mealPlan: {
            Breakfast: "Chia seed pudding with coconut milk",
            Lunch: "Zucchini noodles with avocado pesto",
            Snack: "Roasted almonds & walnuts",
            Dinner: "Stir-fried tempeh with mushrooms & broccoli",
          },
          allowed: ["Avocados", "coconut oil", "nuts", "seeds", "tempeh"],
          avoid: ["Dairy", "grains", "legumes", "starchy vegetables"],
        },
        {
          name: "Mediterranean Vegetarian Keto Diet",
          idealFor:
            "A balanced & sustainable approach with Mediterranean flavors",
          focus: "Olive oil, feta cheese, nuts, and fresh vegetables",
          mealPlan: {
            Breakfast: "Greek yogurt with walnuts & chia seeds",
            Lunch: "Grilled halloumi cheese with olives & salad",
            Snack: "Handful of almonds & olives",
            Dinner: "Eggplant Parmesan (made with almond flour)",
          },
          allowed: ["Olive oil", "feta cheese", "nuts", "olives"],
          avoid: ["High-carb veggies", "processed foods", "grains"],
        },
      ],
    },
    {
      name: "Intermittent Fasting (IF) + Veg Diet",
      description:
        "Intermittent Fasting (IF) follows a cycle of eating and fasting, usually in 16:8, 18:6, or 20:4 hour windows. Below are four different vegetarian diet variations that align with IF.",
      subPlans: [
        {
          name: "Indian Intermittent Fasting Vegetarian Diet (16:8)",
          idealFor: "Those who prefer Indian meals while following IF",
          fastingWindow: "8 PM - 12 PM (16 hours)",
          eatingWindow: "12 PM - 8 PM (8 hours)",
          mealPlan: {
            Breakfast: "Moong dal chilla + curd + cucumber salad",
            Snack: "Roasted chana + buttermilk",
            Dinner: "Paneer tikka + sautéed vegetables",
          },
          allowed: ["Lentils", "Paneer", "Ghee", "Nuts", "Sprouts"],
          avoid: ["Deep-fried food", "Sugar", "Refined carbs"],
        },
        {
          name: "High-Protein Intermittent Fasting Diet (18:6)",
          idealFor: "Muscle retention & fat loss",
          fastingWindow: "6 PM - 12 PM (18 hours)",
          eatingWindow: "12 PM - 6 PM (6 hours)",
          mealPlan: {
            Breakfast: "Scrambled paneer with spinach + green tea",
            Snack: "Greek yogurt with almonds",
            Dinner: "Tofu stir-fry with mushrooms & broccoli",
          },
          allowed: ["Paneer", "Tofu", "Greek yogurt", "Nuts"],
          avoid: ["Rice", "Bread", "Processed food"],
        },
        {
          name: "Keto + Intermittent Fasting Diet (20:4)",
          idealFor: "Rapid weight loss through ketosis",
          fastingWindow: "4 PM - 12 PM (20 hours)",
          eatingWindow: "12 PM - 4 PM (4 hours)",
          mealPlan: {
            Breakfast: "Avocado & paneer salad with olive oil",
            Dinner: "Zucchini noodles with pesto & olives",
          },
          allowed: ["Avocados", "Paneer", "Olive oil", "Nuts"],
          avoid: ["All grains", "Sugar", "High-carb vegetables"],
        },
        {
          name: "Balanced Mediterranean Intermittent Fasting Diet (16:8)",
          idealFor: "Sustainable weight loss & long-term health",
          fastingWindow: "8 PM - 12 PM (16 hours)",
          eatingWindow: "12 PM - 8 PM (8 hours)",
          mealPlan: {
            Breakfast: "Greek yogurt with walnuts & chia seeds",
            Snack: "Roasted almonds & olives",
            Dinner: "Chickpea salad with feta cheese",
          },
          allowed: ["Olive oil", "Nuts", "Seeds", "Hummus", "Cheese"],
          avoid: ["Processed foods", "Refined carbs"],
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
          Weight Loss (Veg) Diet Plan
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

export default WeightLossVegDietPlan;
