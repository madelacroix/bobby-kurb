import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Link from './Link';
import Logo from '@/assets/bk-logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navBackground = isTopOfPage ? "" : "bg-white shadow-lg"

    return (
        <nav className={`${navBackground} w-full py-10`}>          
            {isAboveMediumScreens ? (
                <div className="grid grid-cols-3">
                    <div className="flex justify-evenly relative">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Bio"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        {/* <Link
                            page="Works"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        /> */}
                    </div>
                    <div className="m-auto">
                        <img src={Logo} alt="Bobby Kurb Logo" className='w-10'/>
                    </div>
                    <div className="flex justify-evenly">
                        {/* <Link
                            page="Blog"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        /> */}
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div> ) : (                    
                    <div className="grid grid-cols-3">
                        <button className="py-2 px-8" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="text-black h-10"/>
                        </button>
                        <img src={Logo} alt="Bobby Kurb Logo" className='w-10 h-10 m-auto'/>
                    </div>
                )
            }

            {/* Mobile Menu Modal */}
            {!isAboveMediumScreens && isMenuToggled && (
                <motion.div 
                    className="fixed left-0 bottom-0 z-40 h-full lm:w-[30vw] sm:w-[50vw] w-[80vw] bg-white drop-shadow-xl transform ease-in-out"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    transition={{ duration: 1.2 }}
                    variants={{
                        hidden: { opacity: 1, x: -50 },
                        visible: { opacity: 1, x: 0}
                    }}
                >

                    {/* Close Icon */}
                    <div className="py-10 px-8">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-10 "/>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col gap-10 text-2xl">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Bio"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </motion.div>
            )}
        </nav>
    )
}

export default Navbar