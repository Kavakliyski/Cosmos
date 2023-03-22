// react
import React, { useState, useEffect } from "react";

// styles
import styled from "styled-components";
import '../../styles/ShoppingDrawer/Drawer.scss'

// svg
import CloseDrawerSVG from "../../assets/close_drawer.svg"


const DrawerContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: auto;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
    border-radius: 30px 0px 0px 12px;;
    z-index: 6;
`

const CloseDrawer = styled.button`
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    padding-left: 30px;
    opacity: 0.6;

    img {
        width: 5rem;
    }

    p {
        font-style: italic !important;
    }


`

const ItemsButton = styled.button`
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
    
    @keyframes wave {
        from {
            transform: scale(1);
            opacity: 1;
        }

        to {
            transform: scale(1.5);
            opacity: 0.7;
        }
    }
`

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    orderProduct?: {
        image: string,
        title: string,
        price: number,
        size: string
    } | null;
    orderedProducts: any;
}


const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, orderedProducts }) => {

    const [products, setProducts] = useState(orderedProducts.orderedProduct);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        setProducts(orderedProducts.orderedProduct);

        // Calculate the total price of all ordered products
        const priceSum = orderedProducts.orderedProduct.reduce(
            (sum: any, product: any) => sum + product.price,
            0
        );
        setTotalPrice(priceSum);

    }, [orderedProducts]);

    console.log('DRAWER', products);

    return (
        <DrawerContainer
            style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
            <div className="DrawerWrapper">

                <CloseDrawer onClick={onClose}>
                    <img src={CloseDrawerSVG} />
                    <p>Затвори</p>
                </CloseDrawer>

                <div className="ProductsContainer">
                    {
                        products.length ? (

                            <>
                                {products.map(
                                    (product: any) => {
                                        return (
                                            <div
                                                className="ProductDrawer"
                                                key={product.title}>
                                                <img src={product.image} />
                                                <div className="TextContainer">
                                                    <p>{product.title}</p>
                                                    <p>{product.size}</p>
                                                    <p>{product.price} лева</p>
                                                </div>
                                                <div className="ItmesContainer">
                                                    <ItemsButton>+</ItemsButton>
                                                    <p>1</p>
                                                    <ItemsButton>-</ItemsButton>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                                <div className="TotalPrice">
                                    Обща цена: {totalPrice} лева
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