import Image from "next/image";
import { RiCalendarTodoFill } from "react-icons/ri";
import { MdOutlineSaveAlt } from "react-icons/md";
import AddButton from "@/components/workoutButtons/AddButton";
import SaveButton from "@/components/workoutButtons/SaveButton";

const getWorkouts = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = response.json();
  return data;
};

async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const workoutData = await getWorkouts();
  const workout = workoutData.find(
    (workout) => String(workout.id) === String(id),
  );
  console.log(workout);
  return (
    <div className="container mx-auto mb-20 p-5">
      <div className="card grid grid-cols-1 lg:grid-cols-2 gap-5  shadow-sm">
        <div>
          <figure className="rounded-3xl">
            <Image
              src={workout.image}
              alt={workout.name}
              width={800}
              height={1200}
              className="overflow-hidden"
            />
          </figure>
        </div>
        <div className="flex flex-col px-5 max-h-300">
          <h2 className="card-title text-4xl pb-3">{workout.name}</h2>
          <p className="pb-3">{workout.description}</p>
          <div className=" py-4 flex gap-2 pb-5">
            <div className="px-4 py-1 text-sm bg-[#C2F800] rounded-4xl text-black font-semibold">
              {workout.muscleGroups[0]}
            </div>
            {workout.muscleGroups[1] ? (
              <div className="bg-[#C2F800] text-sm px-6 py-1 rounded-4xl text-black font-semibold">
                {workout.muscleGroups[1]}
              </div>
            ) : null}
          </div>
          <div className="bg-gray-900 rounded-2xl space-y-2 px-4 py-2 max-w-150 mb-5">
            <div className="flex justify-between border-b border-neutral-400 pb-1">
              <div>EQUIPMENT</div>
              <div>{workout.equipment}</div>
            </div>
            <div className="flex justify-between border-b border-neutral-400 pb-1">
              <div>DIFFICULTY</div>
              <div>{workout.difficulty}</div>
            </div>
            <div className="flex justify-between border-b border-neutral-400 pb-1">
              <div>SETS</div>
              <div>{workout.sets}</div>
            </div>
            <div className="flex justify-between border-b border-neutral-400 pb-1">
              <div>REPS</div>
              <div>{workout.reps}</div>
            </div>
            <div className="flex justify-between border-b border-neutral-400 pb-1">
              <div>DURATION</div>
              <div>{workout.duration}</div>
            </div>
            <div className="flex justify-between border-b border-neutral-400 pb-1">
              <div>CALORIES</div>
              <div>{workout.caloriesBurned}</div>
            </div>
            <div className="flex justify-between">
              <div>RATING</div>
              <div>{workout.rating}</div>
            </div>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold">INSTRUCTIONS</h2>
            <div className="flex flex-col gap-3 pt-5">
              <p>1. {workout.instructions[0]}</p>
              <p>2. {workout.instructions[1]}</p>
              <p>3. {workout.instructions[2]}</p>
              <p>4. {workout.instructions[3]}</p>
            </div>
          </div>
          <div className="flex justify-start gap-2">
            <AddButton workout={workout} />
            <SaveButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutDetailsPage;
