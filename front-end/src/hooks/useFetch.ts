import { useEffect, useState } from "react";
import { Product } from "../interfaces/IProducts";

const useFetch = (url: string) => {

    const [data, setData] = useState<Product[] | null>(null);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url)
                .then((response) => response.json())
                .then((responseData) => {
                    setData(responseData);
                })

                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }

        fetchData();
    }, [url])


    return { data, error, loading }
}


export default useFetch;