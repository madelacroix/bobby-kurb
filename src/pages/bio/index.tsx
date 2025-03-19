import { SelectedPage } from "@/shared/types"
import { useEffect } from "react";
import Hero from "./sections/Hero";
import IntroOne from "./sections/IntroOne";
import IntroTwo from "./sections/IntroTwo";
import ArtFeatureOne from "./sections/ArtFeatureOne";
import ArtFeatureTwo from "./sections/ArtFeatureTwo";
import ArtFeatureThree from "./sections/ArtFeatureThree";
import OutroOne from "./sections/OutroOne";
import OutroTwo from "./sections/OutroTwo";
import Quote from "./sections/Quote";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Bio = ({ setSelectedPage }: Props) => {
    useEffect(() => {
        setSelectedPage(SelectedPage.Bio)
    }, [setSelectedPage])
    
    return (
    <div className="bg-custom-grey text-black font-light">
        <Hero/>
        <IntroOne/>
        <IntroTwo/>
        <ArtFeatureOne/>
        <ArtFeatureTwo/>
        <ArtFeatureThree/>
        <OutroOne/>
        <OutroTwo/>
        <Quote/>     
    </div>
  )
}

export default Bio