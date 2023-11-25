"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import rules from "../../public/images/image-rules.svg";
import closeIcon from "../../public/images/icon-close.svg";
import { useMyContext } from "../context/store";

const Modal = () => {
  const { isopenModal, updateModal } = useMyContext();
  useEffect(() => {
    const element = document.getElementsByTagName("main")[0];
    if (isopenModal) {
      {
        element.style.filter = "blur(5px)";
        element.style.pointerEvents = "none";
      }
    } else {
      element.style.filter = "blur(0px)";
      element.style.pointerEvents = "auto";
    }
  }, [isopenModal]);
  return (
    <div
      className={`${
        !isopenModal ? "hidden" : ""
      }  md:center  modalCss absolute z-50 flex h-full   w-full flex-col items-center justify-center  gap-28 bg-white p-8 md:h-auto md:w-auto md:gap-16 md:rounded-2xl  `}
    >
      <div className=" flex w-full items-center justify-center md:justify-between">
        <h1 className="rulesClr text-5xl">Rules</h1>
        <Image
          className="hidden cursor-pointer md:block "
          src={closeIcon}
          width={30}
          onClick={updateModal}
          alt="close"
        />
      </div>
      <Image src={rules} alt="rule" />
      <Image
        className="cursor-pointer  md:hidden "
        src={closeIcon}
        width={70}
        onClick={updateModal}
        alt="close"
      />
    </div>
  );
};

export default Modal;
