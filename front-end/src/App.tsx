// styles
import './styles/App.scss';

// components
import Footer from './components/Footer';
import Header from './components/Header';


import { RouterProvider } from "react-router-dom";

import { routes } from './routes';
import { Routes, Route } from "react-router-dom";

// pages
import Shop from './pages/Shop';
import Home from './pages/Home';


function App() {


    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
