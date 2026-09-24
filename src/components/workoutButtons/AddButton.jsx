"use client";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { useContext } from "react";
import { RiCalendarTodoFill } from "react-icons/ri";

function AddButton({ workout }) {
  const { addWorkout, setAddWorkout } = useContext(WorkoutContext);

  const handleAddButton = () => {
    setAddWorkout([...addWorkout, workout]);
  };

  return (
    <div className="card-actions justify-start">
      <button
        className="btn bg-[#CCFF00] text-black rounded-2xl"
        onClick={() => handleAddButton()}>
        <RiCalendarTodoFill /> Add to today's plan
      </button>
    </div>
  );
}

export default AddButton;
