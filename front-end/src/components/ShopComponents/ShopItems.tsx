// stlyes
import "../../styles/Shop_styles/ShopItems.scss";
import styled from "styled-components";

// IF
import { ShopItemsProps } from "../../interfaces/IProducts";

// arrow
import SvgArrow from "../../assets/cosmos_arrow.svg"

const Arrow = styled.img`
    width: 60px !important;
`


export const ShopItems = ({ products, onImageClick, arrow }: ShopItemsProps) => {


    return (
        <div className="ShopItemsContaier">
            {
                products && products.map((product: any) => (
                    <div key={product.id} className="ProductContainer">
                        <div className="ProductImage">
                            <img
                                src={`${import.meta.env.VITE_STRAPI_CMS_URL}${product.attributes.image.data.attributes.url}`}
                                onClick={() => onImageClick(product)}
                            />

                        </div>
                        <div className="ProductArrow" style={{ opacity: arrow === product.id ? 1 : 0 }}>
                            <Arrow src={SvgArrow} />
                        </div>

                    </div>
                ))
            }
        </div>
    )
}