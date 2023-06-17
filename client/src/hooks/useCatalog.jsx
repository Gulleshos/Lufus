import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

const useCatalog = (category) => {
    const {
        categoryTitle,
        sortCatalog,
        goToTop,
        addToCart,
        getCatalogData,
        products,
        isLoading,
    } = useAppContext();

    useEffect(() => {
        getCatalogData(category);
        goToTop();
        console.log('reload')
    }, [category]);

    return { categoryTitle, sortCatalog, addToCart, isLoading, products };
};

export default useCatalog;