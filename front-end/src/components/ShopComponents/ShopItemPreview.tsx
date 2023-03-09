// styles
import "../../styles/Shop_styles/ShopItemPreview.scss";
import styled from "styled-components";

// IF
import { ProductsProps } from "../../interfaces/IProducts";


const ProductDescription = styled.p`
    color: #161616;
    font-size: 1.8rem;
`

const ProductPrice = styled.p`
    color: #161616;
    font-size: 3rem;
    font-weight: bold;
`

const SizeButton = styled.button`
    width: 40px;
    height: 40px;
    border: 1px solid #1d0623;
    border-radius: 0px;
    color: #1d0623;
    background-color: #e4e4e4;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        color: #e4e4e4;
        background-color: #1d0623;
    }
`

const OrderButton = styled.button`
    width: 300px;
    height: 40px;
    text-transform: uppercase;
    background-color: #1d0623;
    color: #e4e4e4;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    box-shadow: 1px 1px 10px 1px #161616;
`


export const ShopItemPreview = ({ img }: { img: ProductsProps | null }) => {

    if (!img) {
        return null; // or return some default content
    }

    return (

        <div className="ShopItemPreviewContainer">
            <img src={img.src} />
            <h5>{img.alt}</h5>
            <br />
            <ProductDescription>{img.description}</ProductDescription>
            <div className="ProductSizeContainer">
                <SizeButton>S</SizeButton>
                <SizeButton>M</SizeButton>
                <SizeButton>L</SizeButton>
                <SizeButton>XL</SizeButton>
            </div>
            <ProductPrice>{img.price}</ProductPrice>
            <OrderButton>Поръчай сега</OrderButton>
        </div>
    )
}
