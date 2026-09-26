"use client";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { useContext } from "react";
import { RiCalendarTodoFill } from "react-icons/ri";
import { toast } from "react-toastify";

function AddButton({ workout }) {
  const { addWorkout, setAddWorkout } = useContext(WorkoutContext);

  const isAdded = addWorkout.some((item) => item.id === workout.id);

  const handleAddButton = () => {
    if (isAdded) {
      toast.warning("Already added to today's plan!");
      return;
    }

    setAddWorkout([...addWorkout, workout]);

    toast.success(`${workout.name} has been Added to today's plan!`);
  };

  return (
    <div className="card-actions justify-start">
      <button
        className="btn bg-[#CCFF00] text-black rounded-2xl "
        onClick={() => handleAddButton()}>
        <RiCalendarTodoFill /> Add to today's plan
      </button>
    </div>
  );
}

export default AddButton;
