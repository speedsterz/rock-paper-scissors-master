/* eslint-disable react/jsx-key */
"use client";
import Stepone from "./component/Stepone";
import Steptwo from "./component/Steptwo";
import { useMyContext } from "./context/store";

export default function Home() {
  const { active_tab: state } = useMyContext();
  const Active = [<Stepone />, <Steptwo />];
  return <>{Active[state - 1]}</>;
}
