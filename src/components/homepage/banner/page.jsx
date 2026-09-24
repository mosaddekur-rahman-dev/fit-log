import bannerImage from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

export function Banner() {
  return (
    <div>
      <div className="container mx-auto p-20 bg-[#222630] rounded-2xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30  lg:gap-70 justify-between">
          <div className="flex flex-col gap-10">
            <h2 className="text-[#C2F800] font-[inter]">WORKOUT LIBRARY</h2>
            <h1 className="text-6xl tracking-tight text-white font-bold font-[oswald] text-start">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="font-[inter] text-justify">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              <br />
              into today's plan, and watch the week's work add up.
            </p>
            <Link href="/workouts">
              <button className="btn bg-[#C2F800] text-black w-50 font-[inter] font-bold">
                BROWSE WORKOUTS
              </button>
            </Link>
          </div>
          <div>
            <Image
              src={bannerImage}
              alt="Banner Image"
              className="lg:block lg:w-100 lg:h-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
