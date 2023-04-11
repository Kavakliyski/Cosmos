// react
import React, { useState, useEffect } from "react";

// styles
import styled from "styled-components";

import '../../styles/ShoppingDrawer/Drawer.scss';

// lottie
import Lottie from "lottie-react";
import LottieArrow from "../../assets/icons/161-trending-flat-solid-edited.json";

// interface
import { Product } from "../../interfaces/IProducts";
import { DrawerProps } from "../../interfaces/Components";


const DrawerContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 40rem;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
    border-radius: 30px 0px 0px 12px;;
    z-index: 6;

    @media (max-width: 768px) {
        width: 95%;
        border-radius: 50px 0px 0px 0px;;
    }
`

const CloseDrawer = styled.button`
    display: flex;
    align-items: center;
    // justify-content: center;
    gap: 15px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    padding-top: 15px;

    opacity: 0.6;

    img {
        width: 5rem;
    }

    p {
        font-style: italic !important;
    }


`

const ItemsButton = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;

    color: #1d0623;

    border: none;
    background-color: transparent;
    font-size: 34px;
    cursor: pointer;

    align-items: center;

    width: 68px;
    height: 68px;

    border-radius: 10px;

    &:hover {
        background-color: #1d062324;
    }

    &:active {
        animation-name: wave;
        animation-duration: 0.8s;
    }
    
`


const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, orderedProducts, setOrderedProducts }) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [loopArrow, setLoopArrow] = useState(false);


    const updateProductCount = (productIndex: number, isIncrement: boolean) => {

        const updatedProducts = [...orderedProducts];
        const product = updatedProducts[productIndex];


        if (isIncrement) {
            product.count += 1;
        } else {
            product.count -= 1;
        }

        if (product.count <= 0) {
            updatedProducts.splice(productIndex, 1);
        }

        setOrderedProducts(updatedProducts);
    };


    useEffect(() => {

        const priceSum = orderedProducts.reduce(
            (total: number, product: Product) => total + product.price * product.count,
            0
        );

        setTotalPrice(priceSum);

    }, [orderedProducts]);


    return (
        <DrawerContainer
            style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
            <div className="DrawerWrapper">

                <CloseDrawer onClick={onClose}>
                    <Lottie
                        animationData={LottieArrow}
                        style={{ height: 100, width: 100 }}
                        loop={loopArrow}
                        onMouseEnter={() => setLoopArrow(true)}
                        onMouseLeave={() => setLoopArrow(false)}
                    />
                    <p>Затвори</p>
                </CloseDrawer>

                <div className="ProductsContainer">
                    {
                        orderedProducts.length ? (

                            <>
                                {
                                    orderedProducts.map(
                                        (product: Product, index: number) => {
                                            return (
                                                <div
                                                    className="ProductDrawer"
                                                    key={`${product.title}${product.size}`}>
                                                    <img src={product.image} />
                                                    <div className="TextContainer">
                                                        <p>{product.title}</p>
                                                        <p>{product.size}</p>
                                                        <p>{product.price} лева</p>
                                                    </div>
                                                    <div className="ItmesContainer">
                                                        <ItemsButton onClick={() => updateProductCount(index, true)}>+</ItemsButton>
                                                        <p>{product.count}</p>
                                                        <ItemsButton onClick={() => updateProductCount(index, false)}>-</ItemsButton>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                                <div className="TotalPrice">
                                    Обща стойност: {totalPrice} лева
                                    <p><button>Завърши поръчка</button></p>
                                </div>
                            </>
                        ) : (
                            <h2>Все още няма избрани продукти</h2>
                        )
                    }
                </div>
            </div>
        </DrawerContainer>
    );
};

export default Drawer;