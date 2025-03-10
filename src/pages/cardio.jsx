import React, { useState } from "react";
import highknee from "../assets/highknee.mp4";
import crunches from "../assets/crunches.mp4";
import sideplank from "../assets/sidepplank.mp4";
const cardioExercises = [
  {
    name: "High knees",
    media: [
      highknee,
      "https://source.unsplash.com/400x300/?squats",
      "https://source.unsplash.com/400x300/?gym-squat",
    ],
    description:
      "High Knees can strengthen the legs and core and improve your balance and coordination.",
    precautions:
      "Make sure you maintain good posture. Keep your back straight and look straight out in front of you. Move your arms naturally.Do use your arms to help with stability.Think of pulling your legs up with your abs.",
    difficulty: "Intermediate",
  },
  {
    name: "Side plank",
    media: [
      sideplank,
      "https://source.unsplash.com/400x300/?lunges",
      "https://source.unsplash.com/400x300/?fitness-lunges",
    ],
    description:
      "A side plank is a yoga pose or exercise that strengthens your core, balance, and oblique muscles.",
    precautions:
      "You should avoid side plank if you have an injury to your shoulder, arm, elbow, or ankle.",
    difficulty: "Beginner",
  },
  {
    name: "Half crunches",
    media: [
      crunches,
      "https://source.unsplash.com/400x300/?legpress",
      "https://source.unsplash.com/400x300/?gym-legpress",
    ],
    description:
      "A half crunch is an exercise that strengthens your core and tones your abdominal muscles.",
    precautions: "Presure should in core.",
    difficulty: "Advanced",
  },
];

const cardioWorkout = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="p-8 bg-black text-white h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Cardio Workouts</h2>
      <p className="text-center text-gray-600 mb-8">
        Strengthen your lower body with these effective exercises.
      </p>

      {/* Exercise List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
        {cardioExercises.map((exercise, index) => (
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

export default cardioWorkout;
