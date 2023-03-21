// react
import React from "react";

// styles
import styled from "styled-components";
import '../../styles/ShoppingDrawer/Drawer.scss'



const DrawerContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 35%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
    border-radius: 30px 0px 0px 12px;;
    z-index: 6;
`

const CloseDrawerButton = styled.div`
    float: right;
    padding-right: 50px;
    padding-top: 50px;

    button{
        width: 50px;
        height: 50px;
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

    console.log('DRAWER', orderedProducts);
    // console.log(orderedProducts.orderedProduct[0] && orderedProducts.orderedProduct[2].title);


    return (
        <DrawerContainer
            style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
            <div className="DrawerWrapper">

                <CloseDrawerButton>
                    <button onClick={onClose}>X</button>
                </CloseDrawerButton>

                {
                    orderedProducts.orderedProduct.length ?
                        orderedProducts.orderedProduct.map((product: any) => {
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