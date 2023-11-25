"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface MyContextProps {
  isopenModal: boolean;
  active_tab: number;
  score: number;
  Choose: number;
  updateModal: () => void;
  incrementScore: () => void;
  decrementScore: () => void;
  updateChoose: (newData: number) => void;
  updateActiveTab: (newData: number) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const [Choose, setChoose] = useState<number>(0);
  const [active_tab, setActive] = useState<number>(1);
  const [isopenModal, setModal] = useState(false);

  const incrementScore = () => {
    setScore((score) => score + 1);
  };
  const decrementScore = () => {
    setScore((score) => score - 1);
  };

  const updateChoose = (newData: number) => {
    setChoose(newData);
  };

  const updateActiveTab = (newData: number) => {
    setActive(newData);
  };
  const updateModal = () => {
    setModal(!isopenModal);
  };

  return (
    <MyContext.Provider
      value={{
        isopenModal,
        active_tab,
        score,
        Choose,
        updateActiveTab,
        incrementScore,
        decrementScore,
        updateChoose,
        updateModal,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
