export interface ProductsProps {
    id: string;
    src: string;
    alt?: string;
    description?: string;
    price?: number;
    data?: object;
    attributes?: any;
}

export interface ShopItemsProps {
    products: any | ProductsProps[];
    onImageClick: (product: ProductsProps) => void;
    arrow?: string | null;
};

export interface Product {
    id: number;
    title: string;
    products: any;
    product: any;
    data: any
    count: number;
    price: number;
    size: string;
    image: string;
}

export interface ShoppingCartProps {
    orderedProduct?: Product[];
    setOrderedProduct?: (products: Product[]) => void;
}

export interface ShopProps {
    setOrderedProducts: any;
}

export interface ShopItemPreviewProps {
    product: any;
    setOrderedProducts: (updateFunction: (prevOrderedProducts: OrderedProduct[]) => OrderedProduct[]) => void;
}

export interface OrderedProduct {
    image: string;
    title: string;
    price: number;
    size: string;
    count: number;
}