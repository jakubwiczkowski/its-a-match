'use client';

import { AnimatePresence, motion } from "framer-motion";
import organizations from "@/data/organizations";
import { Card } from "@/components/containers/Card";
import { useContext } from "react";
import { SwipeContext } from "@/contexts/SwipeContext";
import { MatchAnimation } from "@/components/animations/MatchAnimation";

export const SwipingArea = () => {
  const { currentSwipe, pickedOrg } = useContext(SwipeContext);

  return (
    <main className="flex flex-row justify-center items-center w-screen h-screen px-4 py-8 overflow-hidden">
      <AnimatePresence mode="wait">
        {currentSwipe < organizations.length ? (
          <Card organization={organizations.at(currentSwipe)!}
                key={organizations.at(currentSwipe)!.slug}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="uppercase font-extrabold text-xl text-slate-500">
            Może następnym razem!
          </motion.div>
        )}
      </AnimatePresence>
      {pickedOrg !== -1 && <MatchAnimation />}
    </main>
  );
}