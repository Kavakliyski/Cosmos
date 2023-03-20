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
}

export interface ProductOrder {
    image?: string;
    title?: string;
    price?: number;
    size?: string;
}