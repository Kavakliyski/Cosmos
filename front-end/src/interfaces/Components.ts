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
    orderedProducts: any;
    setOrderedProducts: Function;
}