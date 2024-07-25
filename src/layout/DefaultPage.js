import Header from "../components/Header";
import Footer from "../components/Footer";


function DefaultPage ({children}) {
    return (
        <>
            <Header />

            <main>
                {children}
            </main>
        
            <Footer />
        </>
    )
}

export default DefaultPage;