import Art from "@/assets/work1.jpg"
import Placeholder from "@/assets/placeholder-art.jpg"
import { useState } from "react"
import { motion } from "framer-motion"

const Artworks = () => {
  const [loaded, setLoaded] = useState(false);

  //TRY USING FRAMER MOTION FOR LAZY LOADING!!!!!
  
  return (
    <motion.div 
    className="hero min-h-screen flex flex-col sm:flex-col md:flex-row items-center justify-center gap-8 md:gap-56 lg:gap-96 p-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once:true, amount: 0.5 }}
    transition={{ duration: 3 }}
    variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0}
    }}      
    >
  
      {/* Text container (On top for sm, right for md and larger) */}
      <div className="text-center md:text-right md:order-2">
        <h1 className="text-3xl font-bold mb-2 drop-shadow-md">ARTWORKS</h1>
        <h2 className="text-2xl">2024-2025</h2>
      </div>

      {/* Image container (On bottom for sm, left for md and larger) */}
      <div className="p-6 md:p-0 md:order-1 relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/5]">
        {/* Low-Res Placeholder Image */}
        <img
          src={Placeholder}
          alt="artworks placeholder"
          className={`absolute inset-0 w-full h-full object-cover blur-md transition-opacity duration-1000 ease-in-out ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* High-Res Image (Fades in when loaded) */}
        <img
          src={Art}
          alt="artworks"
          className={`w-full h-full object-cover shadow-2xl transition-opacity duration-1000 ease-in-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />
      </div>

</motion.div>
  )
}

export default Artworks