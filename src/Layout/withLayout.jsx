import Header from "./Header/Header";
import Footer from "./Footer/Footer";


const WithLayout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default WithLayout
