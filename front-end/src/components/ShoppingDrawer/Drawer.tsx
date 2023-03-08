import React from "react";
import styled from "styled-components";


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
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {

    return (
        <DrawerContainer
            style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
            {/* TODO: Add the contents of the drawer here */}
            <CloseDrawerButton>
                <button onClick={onClose}>X</button>
            </CloseDrawerButton>

        </DrawerContainer>
    );
};

export default Drawer;