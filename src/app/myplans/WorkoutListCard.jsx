"use client";
import { WorkoutContext } from "@/Context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FiClock } from "react-icons/fi";
import { GoCheck } from "react-icons/go";
import { HiOutlineStar } from "react-icons/hi";
import { PiFireSimple } from "react-icons/pi";
import { toast } from "react-toastify";

function WorkoutListCard({ workout }) {
  const { savedWorkout, setSavedWorkout, addWorkout, setAddWorkout } =
    useContext(WorkoutContext);

  const handleRemoveButton = () => {
    const updateWorkouts = addWorkout.filter(
      (active) => active.id !== workout.id,
    );
    setAddWorkout(updateWorkouts);
    toast.success("Succesfully removed item!");
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm mb-20  lg:w-full">
      <figure className="w-15 lg:w-50">
        <Image
          src={workout.image}
          alt={workout.name}
          width={100}
          height={150}
        />
      </figure>
      <div className="card-body justify-between ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col justify-between">
              <h2 className="card-title">{workout.name}</h2>
              <p className="text-[#8A92A0]">{workout.equipment}</p>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="flex items-center gap-1">
                <FiClock />
                {workout.duration}
              </div>
              <div className="flex items-center gap-1">
                <PiFireSimple />
                {workout.caloriesBurned}
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineStar />
                {workout.rating}
              </div>
            </div>
          </div>
          {savedWorkout.includes(workout) ? (
            <div className="flex gap-2">
              <Link href={`/workouts/${workout.id}`}>
                <button className="btn bg-[#14171E] rounded-3xl">
                  View Details
                </button>
              </Link>
              <button className="cursor-pointer text-[#6B7280]">X</button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href={`/workouts/${workout.id}`}>
                <button className="btn bg-[#14171E] rounded-3xl">
                  View Details
                </button>
              </Link>
              <button
                className="btn bg-[#CCFF00] rounded-3xl text-black font-semibold"
                onClick={() => handleRemoveButton()}>
                <GoCheck className="font-bold" /> Mark As Done
              </button>
              <button
                className="cursor-pointer text-[#6B7280]"
                onClick={() => handleRemoveButton()}>
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkoutListCard;
