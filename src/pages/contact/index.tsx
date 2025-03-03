import { LinkType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useEffect } from "react";
import EmailIcon from "@/assets/mail.svg"
import LinkedInIcon from "@/assets/linkedin.svg"
import InstagramIcon from "@/assets/instagram.svg"
import FacebookIcon from "@/assets/facebook.svg"
import CSLinks from "@/shared/CSLinks";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const links: Array<LinkType> = [
    {
        icon: <img src={EmailIcon} alt="email icon"/>,
        link: <a href="mailto:info@bobbykurb.com" target="_blank">info@bobbykurb.com</a>
      },
      {
        icon: <img src={LinkedInIcon} alt="linkedin icon"/>,
        link: <a href="https://nz.linkedin.com/in/bobby-kurb-a30940263" target="_blank">linkedin.com/bobbykurb</a>
      },
      {
        icon: <img src={InstagramIcon} alt="instagram icon"/>,
        link: <a href="https://www.instagram.com/bobby.kurb/" target="_blank">instagram.com/bobby.kurb</a>
      },
      {
        icon: <img src={FacebookIcon} alt="facebook icon"/>,
        link: <a href="https://www.facebook.com/people/Bobby-Kurb/61553565725790/" target="_blank">facebook.com/bobby-kurb</a>
      },
]

const Contact = ({ setSelectedPage }: Props) => {
  useEffect(() => {
    setSelectedPage(SelectedPage.Contact)
  }, [setSelectedPage])

  return (
    <div className="bg-contact bg-no-repeat bg-cover bg-center w-full h-screen sm:grid sm:grid-cols-2 flex items-center text-white">
        <div className="bg-[#9C1D0E] bg-opacity-95 m-auto sm:py-32 py-24 pl-20 pr-40 max-sm:w-full">
            <h1 className="text-[4vh] pb-10">Get in touch.</h1>
            <div className="pb-5"> 
                <motion.div
                    className="font-light"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    variants={container}
                >
                    {links.map((link: LinkType) => (
                        <CSLinks
                            icon={link.icon}
                            link={link.link}
                        />
                    ))}
                </motion.div>               
            </div>
        </div>
    </div>
  )
}

export default Contact