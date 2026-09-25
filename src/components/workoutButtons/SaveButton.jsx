"use client";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { useContext } from "react";
import { MdOutlineSaveAlt } from "react-icons/md";
import { toast } from "react-toastify";

function SaveButton({ workout }) {
  const { savedWorkout, setSavedWorkout } = useContext(WorkoutContext);

  const handleSaveButton = () => {
    setSavedWorkout([...savedWorkout, workout]);
    toast.info(`${workout.name} has been added to saved list!`);
  };
  return (
    <button className="btn rounded-2xl" onClick={() => handleSaveButton()}>
      <MdOutlineSaveAlt /> Save for later
    </button>
  );
}

export default SaveButton;
