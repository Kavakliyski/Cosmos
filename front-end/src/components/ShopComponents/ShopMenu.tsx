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

// axios
import axios from "axios";


export const ShopMenu = () => {

    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {

        setLoading(true);

        axios.get("http://localhost:1337/api/products?populate=*")
            .then((response) => {
                // console.log(response.data.data);
                setData(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                console.log(error);
                setLoading(false);
            });
    }, [])


    const [selectedImage, setSelectedImage] = useState<ProductsProps | null>(data && data[3]);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(data && data[3]);

    const handleImageClick = (data: ProductsProps) => {

        setSelectedImage(data);
        setSelectedItemId(data.id);
    };

    
    return (
        <>
            <div className="ShopContainer">


                <ShopItems products={data} onImageClick={handleImageClick} arrow={selectedItemId} />
                <ShopItemPreview product={selectedImage} />
            </div>
        </>
    )
}