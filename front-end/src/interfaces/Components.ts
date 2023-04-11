import { Product } from "./IProducts";


export interface IHeader {

    orderedProducts: IOrderedProducts[];
    setOrderedProducts: Function
}


interface IOrderedProducts {
    image: any;
    title: any;
    price: any;
    count: any;
    size: any;
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