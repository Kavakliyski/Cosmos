export interface ProductsProps {
    id: string;
    src: string;
    alt: string;
    description?: string;
    price?: string;
}

export interface ShopItemsProps {
    products: ProductsProps[];
    onImageClick: (product: ProductsProps) => void;
    arrow?: string | null;
};
