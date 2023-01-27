
// styles
import '../styles/Header_Footer/Header.scss';
import styled from 'styled-components';

// logo
import logo from '../assets/logo.svg';

// cart svg
import cart from '../assets/cart.svg';

// react router dom
import { NavLink, Link, useHref } from 'react-router-dom'


const LogoSVG = styled.img`
    width: 20vw;
`

const CartSVG = styled.img`
    width: 1.9vw;

`


function Header() {


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
                        <li><CartSVG src={cart} /></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Header