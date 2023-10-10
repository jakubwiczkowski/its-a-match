'use client';

import { motion, useDragControls, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/buttons/Button";
import { FaHeart, FaXmark } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa"
import { useContext, useState } from "react";
import { SwipeContext } from "@/contexts/SwipeContext";
import { IconButton } from "@/components/buttons/IconButton";
import { Organization } from "@/data/organizations";
import { useRouter } from "next/navigation";

export const Card = ({
  organization
}: {
  organization: Organization
}) => {
  const router = useRouter();
  const { currentSwipe, setCurrentSwipe, setPickedOrg } = useContext(SwipeContext);

  const dragMax = 300;
  const confirmMin = dragMax - 200;

  const [isInfoOpened, setInfoOpened] = useState(false);

  const [isOnLeft, setIsOnLeft] = useState(false);
  const [isOnRight, setIsOnRight] = useState(false);

  const [block, setBlock] = useState(false);

  const dragControls = useDragControls();

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-dragMax, dragMax], [-15, 15], { clamp: false });
  const opacityRight = useTransform(x, [0, confirmMin], [0, 1]);
  const opacityLeft = useTransform(x, [-confirmMin, 0], [1, 0]);

  const redirect = () => {
    setBlock(true);
    setPickedOrg(currentSwipe);

    setTimeout(() => {
      router.push(`/${organization.slug}`);
    }, 2500);
  }

  return (
    <motion.div
      className={`relative max-w-md max-h-full w-full rounded-3xl h-full lg:h-fit shadow-lg overflow-hidden`}
      drag="x"
      dragConstraints={{ left: -dragMax, right: dragMax }}
      dragSnapToOrigin
      dragControls={dragControls}
      initial={{ opacity: 0 }}
      animate={{ opacity: block ? 0 : 1 }}
      exit={{ opacity: 0 }}
      style={{ x, rotate }}
      onDrag={() => {
        const deltaX = x.get();

        if (deltaX >= confirmMin) {
          setIsOnRight(true);
        } else setIsOnRight(false);

        if (deltaX <= -confirmMin) {
          setIsOnLeft(true);
        } else setIsOnLeft(false);

        console.log(currentSwipe);
      }}
      onDragEnd={() => {
        if (block) return;

        if (isOnLeft) setCurrentSwipe(currentSwipe + 1);
        if (isOnRight) {
          redirect();
        }
      }}
    >
      <div className={`flex flex-row items-end relative w-full 
                         aspect-square rounded-t-3xl 
                         bg-contain`}
           style={{ backgroundImage: `url('${organization.bgStyle}')` }}
      >
        <div
          className="p-4 font-extrabold text-2xl text-slate-50 drop-shadow-lg bg-gradient-to-t from-slate-950 w-full">
          {organization.name}
        </div>
        <motion.div
          className="absolute flex flex-row pb-10 items-end justify-center w-full
                     h-full bottom-0 bg-gradient-to-t from-green-500 text-white
                     text-6xl drop-shadow-lg"
          style={{ opacity: opacityRight }}
        >
          <div className="w-full flex flex-row justify-center items-center">
            <FaHeart size="auto" style={{ height: '8rem' }}/>
          </div>
        </motion.div>
        <motion.div
          className="absolute flex flex-row pb-10 items-end justify-center w-full
                     h-full bottom-0 bg-gradient-to-t from-red-500 text-white
                     text-6xl drop-shadow-lg"
          style={{ opacity: opacityLeft }}
        >
          <div className="w-full flex flex-row justify-center items-center">
            <FaXmark size="auto" style={{ height: '8rem' }}/>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 px-8 pt-4 pb-8">
        <div className="flex flex-row justify-evenly items-center w-full text-6xl">
          <Button className="text-red-500 shadow-red-200 transition-all hover:shadow-red-300"
                  onClick={() => setCurrentSwipe(currentSwipe + 1)}
          >
            <FaXmark/>
          </Button>
          <Button className="text-blue-500 shadow-blue-200 text-4xl transition-all hover:shadow-blue-300"
                  onClick={() => setInfoOpened(true)}
          >
            <FaInfo/>
          </Button>
          <Button className="text-green-500 shadow-green-200 transition-all hover:shadow-green-300"
                  onClick={() => {
                    redirect();
                  }}
          >
            <FaHeart/>
          </Button>
        </div>
        <div>
          <h1 className="uppercase font-extrabold text-xl text-slate-500">O nas</h1>
          <p className="text-slate-500">{organization.description}</p>
        </div>
      </div>
      <motion.div
        onPointerDownCapture={e => e.stopPropagation()}
        animate={{ y: isInfoOpened ? '0' : '100vh' }}
        transition={{
          ease: 'linear',
          y: {
            duration: 0.2,
          },
        }}
        className={`absolute bottom-0 left-0 w-full h-[75%] rounded-3xl 
                    shadow-lg bg-white text-slate-500
                    p-8 flex flex-col gap-4`}
      >
        <div className="flex flex-row justify-end items-center text-slate-700 text-xl">
          <IconButton onClick={() => setInfoOpened(false)}>
            <FaXmark/>
          </IconButton>
        </div>
        <div className="flex flex-col overflow-y-scroll gap-4">
          {Array.isArray(organization.longDescription) ? (
            organization.longDescription.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          ) : (
            <p>{organization.longDescription}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}