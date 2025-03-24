

import Products from "../Products&item/Products";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.css"

function Home() {
   
    return ( 
        <> 
        <Header/>
         <div className="home-page">
            <div className="container">
                <Products/>
            </div>
        </div>
        <Footer/>
        </>

     );
}

export default Home;