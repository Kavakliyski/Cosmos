// styles
import "../../styles/Shop_styles/Shop.scss";

// components
import { ShopItems } from "./ShopItems";
import { ShopItemPreview } from "./ShopItemPreview";

// IF
import { ProductOrder, ProductsProps } from "../../interfaces/IProducts";

// react
import { useEffect, useState } from "react";

// axios
import axios from "axios";


export const ShopMenu = ({ setOrderedProduct }: { setOrderedProduct: (product: ProductOrder) => void }) => {

    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [selectedImage, setSelectedImage] = useState<ProductsProps | null>(data && data[0]);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(data && data[3].id);

    // const [orderProduct, setOrderProduct] = useState<{ image: string, title: string, price: string, size: string } | null>(null);


    useEffect(() => {

        setLoading(true);

        axios.get(`${import.meta.env.VITE_STRAPI_CMS_URL}/api/products?populate=*`)
            .then((response) => {
                setError(null)
                setData(response.data.data);                                                // save the respone into data const
                handleImageClick(response.data.data[0])                                     // set the first object in the array
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                console.log(error);
                setLoading(false);
            });
    }, [])


    const handleImageClick = (data: ProductsProps) => {

        setSelectedImage(data);
        setSelectedItemId(data.id);
    };


    if (loading) return <h2>Loading..</h2>
    if (error) return <h2>Error.. <br /> {error}</h2>

    return (
        <>
            <div className="ShopContainer">
                <ShopItems products={data} onImageClick={handleImageClick} arrow={selectedItemId} />
                <ShopItemPreview product={selectedImage} setOrderedProduct={setOrderedProduct} />
            </div>
        </>
    )
}