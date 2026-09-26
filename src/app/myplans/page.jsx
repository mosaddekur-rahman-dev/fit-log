"use client";
import { WorkoutContext } from "@/Context/WorkoutContext";
import Link from "next/link";
import { useContext, useState } from "react";
import WorkoutListCard from "./WorkoutListCard";
import WorkoutSaveCard from "./WorkoutSaveCard";

function MyPlan() {
  const { addWorkout, savedWorkout } = useContext(WorkoutContext);
  const [sortBy, setSortBy] = useState("duration");
  const [activeTab, setActiveTab] = useState("today");

  const sortWorkouts = (workouts) => {
    const sortedWorkouts = [...workouts];
    if (sortBy === "duration") {
      return sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      return sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      return sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }
  };
  const sortedActiveWorkouts = sortWorkouts(addWorkout);
  const sortedSavedWorkouts = sortWorkouts(savedWorkout);

  const activeWorkouts =
    activeTab === "today" ? sortedActiveWorkouts : sortedSavedWorkouts;

  const totalExercises = activeWorkouts.length;

  const totalMinutes = activeWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = activeWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <div className="container mx-auto mb-10">
      <div className="mb-10">
        <h1 className="font-[oswald] text-3xl font-bold">MY PLAN</h1>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      <div className="grid grid-cols-3 justify-between bg-[#13161D] rounded-2xl h-40 px-4 py-4 mb-10">
        <div className="h-30 border-r">
          <p className="font-[inter] text-[#C2F10D]">Exercise</p>
          <h1 className="text-5xl font-bold font-[oswald] text-[#C2F10D] mt-5">
            {totalExercises}
          </h1>
        </div>
        <div className=" h-30 border-r pl-5">
          <p className="font-[inter]">Minutes</p>
          <h1 className="text-5xl font-bold font-[oswald] mt-5">
            {totalMinutes}
          </h1>
        </div>
        <div className=" h-30 pl-5 ">
          <p className="font-[inter] ">Calories</p>
          <h1 className="text-5xl font-bold font-[oswald] mt-5">
            {totalCalories}
          </h1>
        </div>
      </div>
      <div>
        <h1>Sort by</h1>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-neutral mb-5">
          <option value={"duration"}>Duration</option>
          <option value={"calories"}>Calories</option>
          <option value={"rating"}>Rating</option>
        </select>
      </div>

      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today’s Plan"
          onChange={() => setActiveTab("today")}
          defaultChecked
        />
        <div className="tab-content">
          <div className="tab-content grid grid-cols-1 w-full">
            {sortedActiveWorkouts.length > 0 ? (
              sortedActiveWorkouts.map((workout) => (
                <WorkoutListCard key={workout.id} workout={workout} />
              ))
            ) : (
              <div className="container mx-auto h-80 border flex flex-col gap-5 border-dashed justify-center items-center text-center border-gray-500 bg-[#111317] rounded-2xl w-full">
                <div>
                  <h1 className="text-4xl font-bold font-[oswald] text-center">
                    NOTHING HERE YET
                  </h1>
                  <p className="text-center text-[#A1A1AA]">
                    Browse the library and add a lift to get today moving.
                  </p>
                </div>
                <div>
                  <Link href="/workouts">
                    <button className="btn max-w-50 bg-[#C2F10D] text-black rounded-3xl">
                      Go to workouts
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          onChange={() => setActiveTab("saved")}
        />
        <div className="tab-content">
          <div className="tab-content grid grid-cols-1 w-full mb">
            {sortedSavedWorkouts.length > 0 ? (
              sortedSavedWorkouts.map((workout) => (
                <WorkoutSaveCard key={workout.id} workout={workout} />
              ))
            ) : (
              <div className="container mx-auto h-80 border flex flex-col gap-5 border-dashed justify-center items-center text-center border-gray-500 bg-[#111317] rounded-2xl w-full">
                <div>
                  <h1 className="text-4xl font-bold font-[oswald] text-center">
                    NOTHING HERE YET{" "}
                  </h1>
                  <p className="text-center text-[#A1A1AA]">
                    Browse the library and add a lift to get today moving.
                  </p>
                </div>
                <div>
                  <Link href="/workouts">
                    <button className="btn max-w-50 bg-[#C2F10D] text-black rounded-3xl">
                      Go to workouts
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPlan;
