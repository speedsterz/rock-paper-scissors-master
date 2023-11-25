"use client";
import Image from "next/image";
import { useMyContext } from "../context/store";

const Navbar = () => {
  const { score } = useMyContext();
  return (
    <div className="mx-auto w-10/12 max-w-[800px]">
      <div className="flex  justify-between rounded  border-2 border-white border-opacity-40  p-4">
        <Image width={90} height={100} src="./images/logo.svg" alt="" />
        <div className="rounded-lg bg-white p-2 text-center">
          <h3 className="text-sm font-bold text-scoreText">Score</h3>
          <h2 className="text-2xl font-extrabold text-darkText">{score}</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
