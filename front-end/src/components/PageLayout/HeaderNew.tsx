// react
import { useState, useEffect } from 'react';

// logo
import logo from '../../assets/logo.svg';

// Shopping drawer
import Drawer from '../ShoppingDrawer/Drawer';

// styles
import '../../styles/Header_Footer/HeaderNew.scss';

// react router dom
import { Link } from 'react-router-dom'

// lottie
import Lottie from "lottie-react"
import CartLottie from "../../assets/icons/64-shopping-bag-solid-edited.json"

// interface
import { IHeader } from '../../interfaces/Components';


export const HeaderNew = ({ orderedProducts, setOrderedProducts }: IHeader) => {


    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [bagLoop, setBagLoop] = useState(false);
    const [itemsInBag, setItemsInBag] = useState(0);


    const handleCartClick = () => {

        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleCloseDrawer = () => {

        setIsDrawerOpen(false);
    };

    useEffect(() => {

        setItemsInBag(orderedProducts.reduce((total, product) => total + product.count, 0))
    }, [orderedProducts]);


    return (
        <div className="HeaderNavWrapper">
            <nav>

                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt='КОСМОС' />
                    </Link>
                </div>

                <ul className='Links-Left'>
                    <li><Link to="/about">за нас</Link></li>
                    <li><Link to="/films">филми</Link></li>
                </ul>

                <ul className='Links-Right'>
                    <li><Link to="/shop">магазин</Link></li>
                    <li>
                        <div className='ShoppingCart' onClick={handleCartClick} style={{ cursor: 'pointer' }}>

                            {itemsInBag > 0 &&
                                <div className='CartIndicator'>
                                    {itemsInBag}
                                </div>
                            }

                            <Lottie
                                animationData={CartLottie}
                                style={{ width: '2.5rem' }}
                                loop={bagLoop}
                                onMouseEnter={() => setBagLoop(true)}
                                onMouseLeave={() => setBagLoop(false)}
                            />
                        </div>
                    </li>
                </ul>

                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} orderedProducts={orderedProducts} setOrderedProducts={setOrderedProducts} />

            </nav>
        </div>
    )
}