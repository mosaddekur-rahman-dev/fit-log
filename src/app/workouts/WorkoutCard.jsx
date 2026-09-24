import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { HiOutlineStar } from "react-icons/hi";
import { PiFireSimple } from "react-icons/pi";

function WorkoutCard({ workout }) {
  return (
    <div className="card bg-base-100 shadow-sm mb-5">
      <figure className="w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={300}
        />
      </figure>
      <div className="px-6 py-4 flex gap-2 ">
        <div className="px-4 py-1 text-sm bg-[#C2F800] rounded-4xl text-black font-semibold">
          {workout.muscleGroups[0]}
        </div>
        {workout.muscleGroups[1] ? (
          <div className="bg-[#C2F800] text-sm px-6 py-1 rounded-4xl text-black font-semibold">
            {workout.muscleGroups[1]}
          </div>
        ) : null}
      </div>
      <div className="card-body pt-1 ">
        <h2 className="card-title text-2xl font-bold">{workout.name}</h2>
        <p className="border-b border-neutral-400 pb-5">{workout.equipment}</p>
        <div className="flex gap-5">
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
    </div>
  );
}

export default WorkoutCard;
