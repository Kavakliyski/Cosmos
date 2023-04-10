import { Product } from "./IProducts";


export interface IHeader{

    orderedProducts: object;
    setOrderedProducts: Function
}

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    orderProduct?: {
        image: string,
        title: string,
        price: number,
        size: string
    } | null;
    orderedProducts: Product[];
    setOrderedProducts: Function;
}