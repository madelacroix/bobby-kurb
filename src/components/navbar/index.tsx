// import useMediaQuery from '@/hooks/useMediaQuery';
// import { useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Link from './Link';
import Logo from '@/assets/bk-logo.png'

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    // const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navBackground = isTopOfPage ? "" : "bg-white shadow-lg"

    return (
        <nav className={`${navBackground} grid grid-cols-3 w-full py-10`}>
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
                <Link
                    page="Works"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
            <div className="m-auto">
                <img src={Logo} alt="Bobby Kurb Logo" className='w-10'/>
            </div>
            <div className="flex justify-evenly">
                <Link
                    page="Blog"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
        </nav>
    )
}

export default Navbar