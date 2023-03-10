// styles
import "../../styles/Shop_styles/Shop.scss";

// components
import { ShopItems } from "./ShopItems";
import { ShopItemPreview } from "./ShopItemPreview";

// images
import Cloth1 from "../../assets/forShop/cloth1.jpg"
import Cloth2 from "../../assets/forShop/cloth2.jpg"
import Cloth3 from "../../assets/forShop/cloth3.jpg"
import Cloth4 from "../../assets/forShop/cloth4.jpg"
import Cloth5 from "../../assets/forShop/cloth5.jpg"
import Cloth6 from "../../assets/forShop/cloth6.jpg"

// IF
import { Product, ProductsProps } from "../../interfaces/IProducts";

// react
import { useEffect, useState } from "react";

// hooks
import useFetch from "../../hooks/useFetch";


export const ShopMenu = () => {

    const { data, error, loading } = useFetch('http://localhost:1337/api/products');

    const products: ProductsProps[] = [
        { id: 'id1', src: Cloth1, alt: 'тениска космос', description: 'Брандирана тениска "Космос" от премиум материали.', price: '40 лева' },
        { id: 'id2', src: Cloth2, alt: 'Cloth 2', description: 'gfdsafdsa2' },
        { id: 'id3', src: Cloth3, alt: 'Cloth 3', description: 'gfdsgfd3' },
        { id: 'id4', src: Cloth4, alt: 'Cloth 4', description: 'gfdgfssg4' },
        { id: 'id5', src: Cloth5, alt: 'Cloth 5', description: 'gfds5' },
        { id: 'id6', src: Cloth6, alt: 'Cloth 6', description: 'kjhg6' },
    ];

    const [selectedImage, setSelectedImage] = useState<ProductsProps | null>(products[0]);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(products[0].id);


    const handleImageClick = (products: ProductsProps) => {

        setSelectedItemId(products.id);

        setSelectedImage(products);

    };

    
    if (!data) return <p>loading</p>

    return (
        <div className="ShopContainer">
            {
                data.map((product: any) => (
                    <div key={product.id}>
                        <p>{product.Title}</p>
                        <p>{product.title}</p>
                        <p>{product.title}</p>
                        <p>{product.title}</p>
                    </div>
                ))
            }

            {/* <ShopItems products={products2} onImageClick={handleImageClick} arrow={selectedItemId} /> */}
            {/* <ShopItemPreview product={selectedImage} /> */}
        </div>
    )
}