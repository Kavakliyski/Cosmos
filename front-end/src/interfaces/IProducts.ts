export interface ProductsProps {
    id: string;
    src: string;
    alt: string;
    description?: string;
    price?: string;
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