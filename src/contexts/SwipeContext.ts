'use client';

import { createContext } from "react";

interface SwipeData {
  currentSwipe: number,
  setCurrentSwipe: React.Dispatch<React.SetStateAction<number>>,
  pickedOrg: number,
  setPickedOrg: React.Dispatch<React.SetStateAction<number>>
}

export const SwipeContext = createContext<SwipeData>({
  currentSwipe: 0,
  setCurrentSwipe: () => {},
  pickedOrg: -1,
  setPickedOrg: () => {}
});