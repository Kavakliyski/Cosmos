// react
import { useState } from 'react';

// styles
import './styles/App.scss';

// components
import Footer from './components/PageLayout/Footer';
import { HeaderNew } from './components/PageLayout/HeaderNew';

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
import FilmDetails from './pages/FilmDetails';

// interfaces
import { Product } from './interfaces/IProducts';


function App() {

    const [orderedProducts, setOrderedProducts] = useState<Product[]>([]);

    return (
        <div className="App">

            <HeaderNew orderedProduct={orderedProducts} />

            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/films" element={<Films />} />
                <Route path="/films/:id" element={<FilmDetails />} />
                <Route path="/shop" element={<Shop setOrderedProducts={setOrderedProducts} />} />
                <Route path="/" element={<Terms />} />
                <Route path="/" element={<Faq />} />
                <Route path="/" element={<Careers />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>

            <Footer />

        </div>
    )
}

export default App
