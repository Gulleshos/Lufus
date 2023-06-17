import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import useFetch from "./useFetch";

const useProduct = () => {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get("id");
    const { data, isLoading } = useFetch(`product/${productId}`);
    const { addToCart, goToTop } = useAppContext();

    useEffect(() => {
        goToTop();
    }, []);

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return { data, isLoading, addToCart, handleGoBack };
};

export default useProduct;
