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

    useEffect(() => {
        setProducts(orderedProducts.orderedProduct);
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

                {
                    products.length ?
                        products.map((product: any) => {
                            return (

                                <div key={product.title}>
                                    <p>{product.title}</p>
                                </div>
                            )

                        })
                        :
                        <h2>Все още няма избрани продукти</h2>
                }
            </div>
        </DrawerContainer>
    );
};

export default Drawer;