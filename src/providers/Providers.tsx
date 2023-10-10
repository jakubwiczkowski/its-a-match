'use client';

import { SwipeContext } from "@/contexts/SwipeContext";
import React, { useState } from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [currentSwipe, setCurrentSwipe] = useState(0);
  const [pickedOrg, setPickedOrg] = useState(-1);

  return (
    <SwipeContext.Provider value={{ currentSwipe, setCurrentSwipe, pickedOrg, setPickedOrg }}>
      {children}
    </SwipeContext.Provider>
  )
}