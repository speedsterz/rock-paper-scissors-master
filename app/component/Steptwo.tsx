import { useEffect, useState } from "react";
import { useMyContext } from "../context/store";
import Image from "next/image";

function check(a: number, b: number) {
  if (a === b) return "DRAW";
  if (a === 0) {
    if (b === 2) return "YOU WIN";
    return "YOU LOSE";
  }
  if (a === 1) {
    if (b === 2) return "YOU LOSE";
    return "YOU WIN";
  }
  if (a === 2) {
    if (b === 0) return "YOU LOSE";
    return "YOU WIN";
  }
  return "Failed";
}

const Steptwo = () => {
  const image_src = [
    "./images/icon-paper.svg",
    "./images/icon-scissors.svg",
    "./images/icon-rock.svg",
  ];
  const border_src = ["border-Paper", "border-Scissors", "border-Rock"];
  const { Choose, updateActiveTab, incrementScore, decrementScore } =
    useMyContext();

  const [system_Choose, setSystemChoose] = useState(-1);
  const [result, setResult] = useState("");
  const [isshow, setShow] = useState(false);

  useEffect(() => {
    const systemChoose = Math.floor(Math.random() * 3);

    const check1 = check(Choose, systemChoose);
    setSystemChoose(systemChoose);
    setResult(check1);
    if (check1 === "YOU WIN") incrementScore();
    else if (check1 === "YOU LOSE") decrementScore();
  }, []);

  //timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const afterTimer = (
    <div
      className={`${border_src[system_Choose]} w-[130px] cursor-pointer
rounded-[50%] border-[16px] bg-white p-6 ${
        result == "YOU LOSE" && isshow == true ? "cirShadow" : ""
      }`}
    >
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={image_src[system_Choose]}
        alt=""
        className="h-auto w-full"
      />
    </div>
  );

  return (
    <>
      <div className="mx-auto flex w-10/12  justify-around gap-1">
        <div>
          <div
            className={`${border_src[Choose]} ${
              result == "YOU WIN" && isshow == true ? "cirShadow" : ""
            } w-[130px]
          cursor-pointer rounded-[50%] border-[16px] bg-white p-6`}
          >
            <Image
              src={image_src[Choose]}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
              alt=""
            />
          </div>
          <h2 className=" mt-4 text-center text-lg font-bold text-white">
            YOU PICKED
          </h2>
        </div>
        {isshow ? (
          <div className="t hidden flex-col gap-4 md:flex">
            <h1 className=" text-center text-5xl text-white">{result}</h1>
            <button
              className="rounded bg-white px-4 py-2 text-3xl text-gray-400"
              onClick={() => updateActiveTab(1)}
            >
              PLAY AGAIN
            </button>
          </div>
        ) : (
          ""
        )}
        <div>
          {isshow ? afterTimer : <div className="HousePicked"></div>}
          <h2 className=" mt-4 text-center text-lg font-bold text-white">
            HOUSE PICKED
          </h2>
        </div>
      </div>

      {isshow ? (
        <div className="mx-auto mt-32 flex w-9/12  flex-col gap-3 text-center md:hidden">
          <h1 className=" text-center text-5xl text-white">{result}</h1>
          <button
            className="rounded bg-white px-4 py-2 text-3xl text-gray-400"
            onClick={() => updateActiveTab(1)}
          >
            PLAY AGAIN
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Steptwo;
