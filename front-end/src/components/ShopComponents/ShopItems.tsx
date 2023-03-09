// stlyes
import "../../styles/Shop_styles/ShopItems.scss";
import styled from "styled-components";

// IF
import { ShopItemsProps } from "../../interfaces/IProducts";

// react
import { useState } from "react";

// arrow
import SvgArrow from "../../assets/cosmos_arrow.svg"

const Arrow = styled.img`
    width: 60px !important;
`


export const ShopItems = ({ products, onImageClick, arrow }: ShopItemsProps) => {


    return (
        <div className="ShopItemsContaier">
            {
                products.map((product: any) => (
                    <div key={product.id} className="ProductContainer">
                        <div className="ProductImage">
                            <img
                                src={product.src}
                                alt={product.alt}
                                onClick={() => onImageClick(product)} />
                        </div>
                        {
                            arrow === product.id ? 
                            <div className="ProductArrow" style={{ opacity: 1 }}>
                                <Arrow src={SvgArrow} />
                            </div>
                            :
                            ""

                        }

                    </div>
                ))
            }
        </div>
    )
}