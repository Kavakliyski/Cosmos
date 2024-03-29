// styles
import "../../styles/Shop_styles/Shop.scss";

// components
import { ShopItems } from "./ShopItems";
import { ShopItemPreview } from "./ShopItemPreview";

// IF
import { OrderedProduct, Product, ProductsProps, ShopProps } from "../../interfaces/IProducts";

// react
import { useEffect, useState } from "react";

// axios
import axios from "axios";


export const ShopMenu = ({ setOrderedProducts }: { setOrderedProducts: (updateFunction: (prevOrderedProducts: OrderedProduct[]) => OrderedProduct[]) => void }) => {

    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [selectedImage, setSelectedImage] = useState<ProductsProps | null>(data && data[0]);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(data && data[3].id);

    // const [orderProduct, setOrderProduct] = useState<{ image: string, title: string, price: string, size: string } | null>(null);

    // ======================== strapi deloyment stopped ========================
    // useEffect(() => {

    //     setLoading(true);

    //     axios.get(`${import.meta.env.VITE_STRAPI_CMS_URL}/api/products?populate=*`)
    //         .then((response) => {
    //             setError(null)
    //             console.log(response.data.data);
    //             setData(response.data.data);                                                // save the respone into data const
    //             handleImageClick(response.data.data[0])                                     // set the first object in the array
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error);
    //             console.log(error);
    //             setLoading(false);
    //         });
    // }, [])

    // ======================== alternative in strapi is stopped ========================
    useEffect(() => {
        fetch("../../../strapi-products-api.json")
            .then((response) => (response.json()))
            .then((jsonData) => (handleImageClick(jsonData[0]), setData(jsonData)));
        setLoading(false);
    }, []);


    const handleImageClick = (data: ProductsProps) => {

        setSelectedImage(data);
        setSelectedItemId(data.id);
    };


    if (loading) return <h2>Loading..</h2>
    if (error) return <h2>Error <br />{error.message}</h2>

    return (
        <>
            <div className="ShopContainer">
                <ShopItems products={data} onImageClick={handleImageClick} arrow={selectedItemId} />
                <ShopItemPreview product={selectedImage} setOrderedProducts={setOrderedProducts} />
            </div>
        </>
    )
}