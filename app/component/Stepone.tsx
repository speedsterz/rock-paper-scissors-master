import Image from "next/image";
import { useMyContext } from "../context/store";
import bg_tr from "../../public/images/bg-triangle.svg";

const Stepone = () => {
  const { updateModal, updateChoose, updateActiveTab } = useMyContext();

  return (
    <div className="flex  flex-col">
      <div className=" flex justify-center gap-16 md:gap-32">
        <Image
          className="z-1 absolute translate-y-12 md:w-[300px] "
          src={bg_tr}
          width={200}
          height={200}
          alt=""
        />

        <div
          className="ZoomT border-Paper z-10 cursor-pointer rounded-[50%]  
        border-8 bg-white p-4 md:w-[150px] md:border-[20px] md:p-6"
          onClick={() => {
            updateChoose(0);
            updateActiveTab(2);
          }}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
            src="./images/icon-paper.svg"
            alt="paper-icon"
          />
        </div>
        <div
          className="ZoomT border-Scissors z-10 cursor-pointer rounded-[50%]  
        border-8 bg-white p-4 md:w-[150px] md:border-[20px] md:p-6"
          onClick={() => {
            updateChoose(1);
            updateActiveTab(2);
          }}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
            src="./images/icon-scissors.svg"
            alt="Scissors-icon"
          />
        </div>
      </div>
      <div className=" mt-12 flex justify-center">
        <div
          className="ZoomT border-Rock z-10 cursor-pointer rounded-[50%]
          border-8 bg-white p-4 md:w-[150px] md:border-[20px] md:p-6"
          onClick={() => {
            updateChoose(2);
            updateActiveTab(2);
          }}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
            src="./images/icon-rock.svg"
            alt="rock-icon"
          />
        </div>
      </div>

      <div className="mt-24 self-center md:self-end">
        <button
          className="cursor-pointer rounded-lg border border-white px-6 py-1 text-2xl  text-white "
          onClick={updateModal}
        >
          Rules
        </button>
      </div>
    </div>
  );
};

export default Stepone;
