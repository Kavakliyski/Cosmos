// react
import { useState } from 'react';

// styles
import '../styles/Header_Footer/Header.scss';
import styled from 'styled-components';

// logo
import logo from '../assets/logo.svg';

// cart svg
import cart from '../assets/cart.svg';

// react router dom
import { Link } from 'react-router-dom'

// Shopping drawer
import Drawer from './ShoppingDrawer/Drawer';


const LogoSVG = styled.img`
    width: 22em;
`

const CartSVG = styled.img`
    width: 1.3em;
`


function Header() {


    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleCartClick = () => {
        console.log('handleCartClick');
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleCloseDrawer = () => {
        console.log('handleCloseDrawer');
        setIsDrawerOpen(false);
    };


    return (
        <div className='Header'>
            <nav className='nav'>

                <div className='Links1'>
                    <ul>
                        <Link to="/about">
                            <li>за нас</li>
                        </Link>
                        <Link to="/films">
                            <li>филми</li>
                        </Link>
                    </ul>
                </div>

                <div className='LogoDiv'>
                    <Link to="/">
                        <LogoSVG src={logo} alt='' />
                    </Link>
                </div>

                <div className='Links2'>
                    <ul>
                        <Link to="/shop"><li>магазин</li></Link>
                        <li>
                            <div onClick={handleCartClick} style={{ cursor: 'pointer' }}>
                                <CartSVG src={cart} onClick={handleCartClick} />
                            </div>
                        </li>
                    </ul>
                </div>

                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />

            </nav>

        </div>
    )
}

export default Header