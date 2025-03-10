import React, { useState } from "react";
import lunges from "../assets/lunges.mp4";
import legpress from "../assets/legpress.mp4";
import squats from "../assets/squats.mp4";
import hipthrust from "../assets/hip-thrust.mp4";
import barbelsquat from "../assets/barbelsquat.mp4";
const chestExercises = [
  {
    name: "Squats",
    media: [
      squats,
      "https://source.unsplash.com/400x300/?squats",
      "https://source.unsplash.com/400x300/?gym-squat",
    ],
    description: "A fundamental exercise to strengthen legs and glutes.",
    precautions:
      "Keep your back straight, knees should not go beyond your toes.",
    difficulty: "Intermediate",
  },
  {
    name: "Lunges",
    media: [
      lunges,
      "https://source.unsplash.com/400x300/?lunges",
      "https://source.unsplash.com/400x300/?fitness-lunges",
    ],
    description: "Works quads, hamstrings, and glutes while improving balance.",
    precautions:
      "Ensure your front knee stays above your ankle and don't rush movements.",
    difficulty: "Beginner",
  },
  {
    name: "Leg Press",
    media: [
      legpress,
      "https://source.unsplash.com/400x300/?legpress",
      "https://source.unsplash.com/400x300/?gym-legpress",
    ],
    description: "A machine exercise targeting quadriceps and hamstrings.",
    precautions:
      "Avoid locking your knees at full extension and keep controlled movements.",
    difficulty: "Advanced",
  },
  {
    name: "Hip thrust",
    media: [
      hipthrust,
      "https://source.unsplash.com/400x300/?calfraises",
      "https://source.unsplash.com/400x300/?fitness-calfraises",
    ],
    description: "Strengthens calf muscles for better stability and power.",
    precautions:
      "Maintain proper foot positioning and perform slow, controlled reps.",
    difficulty: "Beginner",
  },
  {
    name: "Barbell squat",
    media: [
      barbelsquat,
      "https://source.unsplash.com/400x300/?legpress",
      "https://source.unsplash.com/400x300/?gym-legpress",
    ],
    description:
      "It's one of the ultimate leg builders, and often takes a prime position in leg day programming – and for good reason too. The barbell squat recruits the largest and most powerful muscles in the body, strengthening the leg muscles (quads, hamstrings and glutes) and the core.",
    precautions:
      "Maintaining proper form with knees not going past your toes, keeping a neutral spine, avoiding excessive knee valgus (knees caving inwards), not lifting too much weight too quickly, warming up adequately, having a spotter for heavier weights, and being mindful of any pre-existing knee or back injuries; always prioritize proper technique over weight lifted to prevent injury.",
    difficulty: "Advanced",
  },
];

const chestWorkout = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="p-8 bg-black text-white h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Chest Workouts</h2>
      <p className="text-center text-gray-600 mb-8">
        Strengthen your lower body with these effective exercises.
      </p>

      {/* Exercise List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
        {chestExercises.map((exercise, index) => (
          <button
            key={index}
            className="bg-gray-700 p-4 rounded-md hover:bg-gray-600 transition"
            onClick={() => setSelectedExercise(exercise)}
          >
            {exercise.name}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4">
          <div className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-white text-lg"
              onClick={() => setSelectedExercise(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4">
              {selectedExercise.name}
            </h3>
            {selectedExercise.media[0].includes("youtube") ? (
              <iframe
                className="w-full h-64 rounded-md"
                src={selectedExercise.media[0]}
                title={selectedExercise.name}
                allowFullScreen
              ></iframe>
            ) : selectedExercise.media[0].endsWith(".mp4") ? (
              <video className="w-full h-64 rounded-md" controls>
                <source src={selectedExercise.media[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedExercise.media[0]}
                alt={selectedExercise.name}
                className="w-full h-64 object-cover rounded-md"
              />
            )}
            <p className="mt-4 text-gray-300">{selectedExercise.description}</p>
            <p className="mt-2 text-gray-400">
              <span className="font-bold">Precautions:</span>{" "}
              {selectedExercise.precautions}
            </p>
            <span className="mt-3 inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm w-fit">
              {selectedExercise.difficulty}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default chestWorkout;
