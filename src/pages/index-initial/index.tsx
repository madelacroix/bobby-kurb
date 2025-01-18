import Artworks from "./sections/Artworks"
import Hero from "./sections/Hero"
import Sculptures from "./sections/Sculptures"

const IndexInitial = () => {
  return (
    <div>
        <Hero/>
       <div className="mt-7"></div>
        <Sculptures/>
        <div className="mt-7"></div>
        <Artworks/>
    </div>
  )
}

export default IndexInitial