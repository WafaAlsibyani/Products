import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {SearchProvider} from '../context/SearchContext';

const WithLayout = ({children}) => {
    return (
        <SearchProvider>
            <Header />
            {children}
            <Footer />
        </SearchProvider>
    )
}

export default WithLayout
