import { SelectedPage } from "@/shared/types"
import Artworks from "./sections/Artworks"
import Hero from "./sections/Hero"
import Sculptures from "./sections/Sculptures"
import { useEffect } from "react"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const IndexInitial = ({ setSelectedPage }: Props) => {
  useEffect(() => {
    setSelectedPage(SelectedPage.Home)
  }, [setSelectedPage])
  return (
    <div>
        <Hero/>
        <Artworks/>
        <Sculptures/>
    </div>
  )
}

export default IndexInitial