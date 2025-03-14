import Sculpture from "@/assets/sculpt1.png"
import { motion } from "framer-motion"

const Sculptures = () => {
  return (
    <motion.div 
      className="hero min-h-screen flex flex-col sm:flex-col md:flex-row items-center justify-center gap-20 md:gap-56 gap lg:gap-96 p-10 bg-zinc-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once:true, amount: 0.5 }}
      transition={{ duration: 3 }}
      variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0}
      }} 
    >
      {/* Text container (left on md and bigger) */}
      <div className="text-center md:text-left text-zinc-300">
        <h1 className="text-3xl font-bold mb-2 drop-shadow-2xl shadow-zinc-400">SCULPTURES</h1>
        <h2 className="text-2xl">Available Soon</h2>
      </div>

      {/* Image container (right on md and bigger) */}
      <div className="mb-6 md:mb-0">
        <img
          src={Sculpture}
          alt="sculpture"
        className="max-w-sm md:max-w-lg shadow-2xl shadow-zinc-700"
        />
      </div>
</motion.div>
  )
}

export default Sculptures