// react
import { useState } from "react";

// styles
import "../../styles/Shop_styles/ShopItemPreview.scss";
import styled from "styled-components";

// IF
import { OrderedProduct, ShopItemPreviewProps } from "../../interfaces/IProducts";

// unloaded img
import LoadingImg from "../../../public/assets/forShop/lower_quality/loading.jpg"


const ProductDescription = styled.p`
    color: #161616;
    font-size: 1.5rem;
`

const ProductPrice = styled.p`
    color: #161616;
    font-size: 3rem;
    font-weight: bold;
`

const SizeButton = styled.button<{ isSelected: boolean }>`
    width: 40px;
    height: 40px;
    border: 1px solid #1d0623;
    border-radius: 0px;
    color: ${({ isSelected }) => isSelected ? "#e4e4e4" : "#1d0623"};
    background-color: ${({ isSelected }) => isSelected ? '#1d0623' : '#e4e4e4'};
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 0px 0px 7px 0px #1d0623;

    &:hover {
        color: #e4e4e4;
        background-color: #1d0623;
        box-shadow: 0px 0px 17px 0px #1d0623;
        transition: all 100ms
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


export const ShopItemPreview = ({ product, setOrderedProducts }: ShopItemPreviewProps) => {

    const [size, setSize] = useState<string | null>(null);

    const [imageLoaded, setImageLoaded] = useState(false);

    console.log('imageLoaded', imageLoaded)

    const handleSizeSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSize((e.target as HTMLButtonElement).value);
    }

    const handleOrder = (image: string, title: string, price: number, size: string) => {

        if (size === 'null') {
            alert("Изберете размер")
            return false;
        }

        console.log('handle order', image, title, price, size)

        setOrderedProducts((prevOrderedProducts: OrderedProduct[]) => {
            const index = prevOrderedProducts.findIndex((p) => p.title === title && p.size === size);
            if (index !== -1) {
                const newOrderedProducts = [...prevOrderedProducts];
                newOrderedProducts[index].count += 1;
                return newOrderedProducts;
            } else {
                return [
                    ...prevOrderedProducts,
                    { image, title, price, size, count: 1 },
                ];
            }
        });
    };


    if (!product) {
        return null;
    }


    return (

        <div className="ShopItemPreviewContainer">
            <img
                onLoad={() => setImageLoaded(true)}
                src={imageLoaded ? `${import.meta.env.VITE_STRAPI_CMS_URL}${product.attributes.image.data.attributes.url}` : LoadingImg}
            />
            <h5>{product.attributes.Title}</h5>
            <br />
            <ProductDescription>{product.attributes.Description}</ProductDescription>
            <div className="ProductSizeContainer">
                <SizeButton isSelected={size === 'S'} value={'S'} onClick={handleSizeSelect}>S</SizeButton>
                <SizeButton isSelected={size === 'M'} value={'M'} onClick={handleSizeSelect}>M</SizeButton>
                <SizeButton isSelected={size === 'L'} value={'L'} onClick={handleSizeSelect}>L</SizeButton>
                <SizeButton isSelected={size === 'XL'} value={'XL'} onClick={handleSizeSelect}>XL</SizeButton>
            </div>
            <ProductPrice>{product.attributes.Price} лева</ProductPrice>
            <OrderButton onClick={
                () => handleOrder(
                    `${import.meta.env.VITE_STRAPI_CMS_URL}${product.attributes.image.data.attributes.url}`,
                    `${product.attributes.Title}`,
                    product.attributes.Price,
                    `${size}`
                )
            }>Поръчай сега</OrderButton>
        </div>
    )
}
