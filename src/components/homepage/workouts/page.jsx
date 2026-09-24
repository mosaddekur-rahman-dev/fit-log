import WorkoutCard from "./WorkoutCard";

const getWorkouts = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = response.json();
  return data;
};

async function WorkoutList() {
  const workoutData = await getWorkouts();
  console.log(workoutData);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="font-[oswald] text-4xl font-bold">THE LIBRARY</h2>
          <p className="font-[inter] text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div>
          {workoutData.map((workout) => {
            return (
              <div key={workout.id}>
                <WorkoutCard workout={workout} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkoutList;
