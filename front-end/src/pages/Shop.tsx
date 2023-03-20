import { ShopMenu } from "../components/ShopComponents/ShopMenu"

import { ProductOrder, ShopProps } from "../interfaces/IProducts"


function Shop({ setOrderedProducts }: ShopProps) {


    return (
        <div>
            <h1>Магазин</h1>
            <ShopMenu setOrderedProducts={setOrderedProducts} />
        </div>
    )
}

export default Shop