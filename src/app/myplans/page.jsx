function MyPlan() {
  return (
    <div className="container mx-auto mb-10">
      <div className="mb-10">
        <h1 className="font-[oswald] text-3xl font-bold">MY PLAN</h1>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      <div className="grid grid-cols-3 justify-between bg-[#13161D] rounded-2xl h-40 px-4 py-4 mb-10">
        <div className="h-30 border-r text-[#C2F10D]">
          <p className="font-[inter]">Exercise</p>
          <h1 className="text-5xl font-bold font-[oswald]"></h1>
        </div>
        <div className=" h-30 border-r pl-5">
          <p className="font-[inter]">Minutes</p>
          <h1 className="text-5xl font-bold font-[oswald]"></h1>
        </div>
        <div className=" h-30 pl-5 ">
          <p className="font-[inter] ">Calories</p>
          <h1 className="text-5xl font-bold font-[oswald]"></h1>
        </div>
      </div>

      <div className="container mx-auto">
        <div className=" flex justify-between">
          <div className="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab mb-5"
              aria-label="Today’s Plan"
            />

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Saved"
              defaultChecked
            />
          </div>
          <div className="tabs gap-2 items-center">
            <div>Sort By</div>
            <div>
              <select name="Duration" id="duration">
                <option value="Duration" className="bg-black" defaultChecked>
                  Duration
                </option>
                <option value="Calories" className="bg-black">
                  Calories
                </option>
                <option value="Rating" className="bg-black">
                  Rating
                </option>
              </select>
            </div>
          </div>
          <div className="tab-content border-base-300 bg-base-100 p-10 w-7xl">
            Today’s Plan
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full h-80 flex flex-col gap-5 not-first:justify-center items-center border border-dashed border-gray-500 bg-[#111317] rounded-2xl">
        <div>
          <h1 className="text-4xl font-bold font-[oswald] text-center">
            NOTHING HERE YET{" "}
          </h1>
          <p className="text-center text-[#A1A1AA]">
            Browse the library and add a lift to get today moving.
          </p>
        </div>
        <button className="btn bg-[#C2F10D] text-black rounded-3xl">
          Go to workouts
        </button>
      </div>
    </div>
  );
}

export default MyPlan;
