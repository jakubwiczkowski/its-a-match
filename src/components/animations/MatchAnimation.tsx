import { motion } from "framer-motion";

export const MatchAnimation = () => {
  return (
    <motion.div
      animate={{
        maskSize: ['0%', '1000%', '0%']
      }}
      transition={{
        delay: 0.5,
        duration: 2,
        ease: "easeInOut"
      }}
      className="absolute w-screen h-screen bg-gradient-radial from-cyan-400 to-blue-600
          flex flex-col justify-center items-center overflow-hidden star-mask"
    >
      <motion.div
        animate={{
          rotate: [-10, 10]
        }}
        transition={{
          ease: "easeInOut",
          repeatType: "reverse",
          repeat: Infinity,
          duration: 0.5
        }}
        className="absolute text-white font-extrabold text-8xl">
        IT&apos;S A MATCH
      </motion.div>
    </motion.div>
  )
}