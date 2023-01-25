
import Footer from './components/Footer';
import Header from './components/Header';

import './styles/App.scss';

import { RouterProvider } from "react-router-dom";

import { routes } from './routes';


function App() {


    return (
        <div className="App">
            <Header />
            <RouterProvider router={routes} />
            <Footer />
        </div>
    )
}

export default App
