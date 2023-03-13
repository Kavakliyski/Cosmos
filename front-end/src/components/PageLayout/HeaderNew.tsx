// react
import { useState } from 'react';

// logo
import logo from '../../assets/logo.svg';

// cart svg
import cart from '../../assets/cart.svg';

// Shopping drawer
import Drawer from '../ShoppingDrawer/Drawer';

// styles
import '../../styles/Header_Footer/HeaderNew.scss';
import styled from 'styled-components';

// react router dom
import { Link } from 'react-router-dom'


const CartSVG = styled.img`width: 2.5em;`



export const HeaderNew = () => {

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
        <nav>
            <ul className="left-links">
                <Link to="/about"><li>за нас</li></Link>
                <Link to="/films"><li>филми</li></Link>
            </ul>

            <div className="logo">
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>

            <ul className="right-links">
                <Link to="/shop"><li>магазин</li></Link>
                <li>
                    <div className='ShoppingCart' onClick={handleCartClick} style={{ cursor: 'pointer', textAlign: 'center' }}>
                        <CartSVG src={cart} onClick={handleCartClick} />
                    </div>
                </li>
            </ul>

            <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />

        </nav>
    )
}