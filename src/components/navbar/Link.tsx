import { SelectedPage } from '@/shared/types';
import { useNavigate } from 'react-router-dom';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    const navigate = useNavigate();

    console.log(`AnchorLink href: #${lowerCasePage}`);

    return (
        <button
            className={`${selectedPage === lowerCasePage ? "text-red-500" : "" } transition duration-500 hover:text-pink-300`}
            onClick={() => navigate(`/${page}`)}
        >
            {page}
        </button>
    )
}

export default Link