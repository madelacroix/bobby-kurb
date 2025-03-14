import Art from "@/assets/work1.jpg"
import { motion } from "framer-motion"

const Artworks = () => {  
  return (
    <div className="hero min-h-screen flex flex-col sm:flex-col md:flex-row items-center justify-center gap-8 md:gap-56 lg:gap-96 p-10">
  
      {/* Text container (On top for sm, right for md and larger) */}
      <motion.div 
        className="text-center md:text-right md:order-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0}
        }}
      >
        <h1 className="text-3xl font-bold mb-2 drop-shadow-md">ARTWORKS</h1>
        <h2 className="text-2xl">2024-2025</h2>
      </motion.div>

      {/* Image container (On bottom for sm, left for md and larger) */}
      <motion.div 
        className="p-6 md:p-0 md:order-1 relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/5]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount: 0.5 }}
        transition={{ delay: 1, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0}
        }}
      >
        <img
          src={Art}
          alt="artworks"
          className="w-full h-full object-cover shadow-2xl transition-opacity duration-1000 ease-in-out"
        />
      </motion.div>
</div>
  )
}

export default Artworks