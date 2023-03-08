// styles
import './styles/App.scss';

// components
import Footer from './components/PageLayout/Footer';
import Header from './components/PageLayout/Header';

// router
import { Routes, Route } from "react-router-dom";

// pages
import Shop from './pages/Shop';
import Home from './pages/Home';
import Films from './pages/Films';
import About from './pages/About';
import Terms from './pages/Terms';
import Faq from './pages/Faq';
import Careers from './pages/Careers';
import { HeaderNew } from './components/PageLayout/HeaderNew';


function App() {


    return (
        <div className="App">

            <HeaderNew />
            {/* <Header /> */}

            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/films" element={<Films />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop" element={<Terms />} />
                <Route path="/shop" element={<Faq />} />
                <Route path="/shop" element={<Careers />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>

            <Footer />

        </div>
    )
}

export default App
