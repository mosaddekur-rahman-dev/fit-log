"use client";
import { createContext, useState } from "react";

export const WorkoutContext = createContext({});

function WorkoutProvider({ children }) {
  const [addWorkout, setAddWorkout] = useState([]);
  const [savedWorkout, setSavedWorkout] = useState([]);

  const sharedData = {
    addWorkout,
    setAddWorkout,
    savedWorkout,
    setSavedWorkout,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
}

export default WorkoutProvider;
