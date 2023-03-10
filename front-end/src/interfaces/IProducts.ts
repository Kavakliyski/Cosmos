export interface ProductsProps {
    id: string;
    src: string;
    alt: string;
    description?: string;
    price?: string;
    data?: object;
}

export interface ShopItemsProps {
    products: any | ProductsProps[];
    onImageClick: (product: ProductsProps) => void;
    arrow?: string | null;
};

export interface Product {
    data: any;
    id: number;
    title: string;
}