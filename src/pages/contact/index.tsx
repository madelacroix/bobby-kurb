import { LinkType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useEffect } from "react";
import EmailIcon from "@/assets/mail.svg"
import LinkedInIcon from "@/assets/linkedin.svg"
import InstagramIcon from "@/assets/instagram.svg"
import FacebookIcon from "@/assets/facebook.svg"
import CSLinks from "@/shared/CSLinks";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/bk-logo.png"
import Media from "@/assets/contact-media.jpg"
import { Link } from "react-router-dom";

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
    <motion.div 
        className="bg-custom-grey w-full h-full absolute top-0 lm:grid lm:grid-cols-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
            hidden: { opacity: 1, x: 50 },
            visible: { opacity: 1, x: 0}
        }}
    >
        <div className="lm:col-span-3">
            <div className="grid grid-cols-3 items-center py-10 px-5">
                <Link to={".."}>
                    <ChevronLeftIcon className="h-6 text-black"/>
                </Link>
                <Link to={"/"}>
                    <img src={Logo} alt="Bobby Kurb Logo" className="w-11 m-auto"/>                
                </Link>
            </div>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-400"/>
            <div className="lm:pt-56 lm:pb-0 py-28">
                <img src={Media} alt="Bobby Kurb in his studio" className="h-80 m-auto"/>
            </div>
        </div>
        <div className="bg-custom-black lm:py-32 py-20 text-white col-span-2 flex">
            <div className="pb-5 m-auto"> 
                <h1 className="text-[4vh] pb-10">Get in touch.</h1>
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
    </motion.div>
  )
}

export default Contact