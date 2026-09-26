"use client";
import logo from "@/assets/logo.png";
import { WorkoutContext } from "@/Context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

function Navbar() {
  const { addWorkout, savedWorkout } = useContext(WorkoutContext);
  return (
    <div className="border-b border-[#222630] pt-2 mb-20 sticky top-0 bg-black/90 z-1">
      <div className="container mx-auto navbar shadow-sm w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <Link href="/">
                <li className="font-semibold p-2">Home</li>
              </Link>
              <Link href="/workouts">
                <li className="rounded-4xl font-semibold p-2">Workouts</li>
              </Link>
              <Link href="/myplans">
                <li className="font-semibold p-2">MyPlan</li>
              </Link>
            </ul>
          </div>
          <Link href="/" className="flex gap-2 text-2xl font-bold">
            <Image src={logo} alt="fitlog logo" />
            FITLOG
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">
            <Link href="/workouts">
              <li className="bg-[#1A2312] text-[#C2F800] rounded-4xl font-semibold p-2">
                Workouts
              </li>
            </Link>
            <Link href="/myplans">
              <li className="font-semibold p-2">MyPlan</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <Link href="/myplans">
            <button className="text-[#D1D5DB] cursor-pointer">
              Plan{" "}
              <span className="px-2 py-0.5 bg-[#C2F800] rounded-full text-black font-semibold items-center">
                {addWorkout.length}
              </span>
            </button>
          </Link>
          <Link href="/myplans">
            <button className="text-[#9CA3AF] cursor-pointer">
              Saved{" "}
              <span className="rounded-full px-2 py-0.5 text-[#D1D5DB] border border-[#2D313B] items-center">
                {savedWorkout.length}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
