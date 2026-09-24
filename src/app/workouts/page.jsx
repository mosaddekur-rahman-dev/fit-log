import Link from "next/link";
import { Suspense } from "react";
import WorkoutCard from "./WorkoutCard";

const getWorkouts = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = response.json();
  return data;
};

async function WorkoutList() {
  const workoutData = await getWorkouts();

  return (
    <div id="workouts">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="font-[oswald] text-4xl font-bold">THE LIBRARY</h2>
          <p className="font-[inter] text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:gap-5 pb-10">
          {workoutData.map((workout, id) => {
            return (
              <Suspense key={id} fallback="Loading...">
                <Link key={id} href={`/workouts/${workout.id}`}>
                  <WorkoutCard key={workout.id} workout={workout} />
                </Link>
              </Suspense>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkoutList;
