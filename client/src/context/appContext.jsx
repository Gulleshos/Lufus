import { useReducer, useContext, createContext, useState, useEffect } from "react";
import { BASE_API_URL, categoryTitle } from "../const";
import reducer from "./reducer";
import axios from "axios";

import {
    GET_CATALOG_DATA_BEGGIN,
    GET_CATALOG_DATA_SUCCESS,
    SORT_CATALOG,
    ADD_TO_CART,
    UPDATE_COUNT_PRODUCT,
    REMOVE_FROM_CART,
    UPDATE_TOTAL,
    SHOW_CHECKOUT_ALERT,
    CLOSE_CHECKOUT_ALERT,
    CLEAN_CART,
    UPDATE_CART,
} from "./actions";

const initialState = {
    isLoading: false,
    categoryTitle: "All Plants",
    products: [],
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    totalPrice: 0,
    showCheckoutAlert: false,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        if (storedCart) {
            dispatch({
                type: UPDATE_CART,
                payload: storedCart,
            });
        }
    }, []);

    useEffect(() => {
        if (state.cart) {
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
        console.log(`saved ${state.cart.length} items to localStorage`);
    }, [state.cart]);

    const getCatalogData = async (category) => {
        dispatch({ type: GET_CATALOG_DATA_BEGGIN });
        const title = categoryTitle[category] || "All Plants";
        try {
            const { data } = await axios.get(
                `${BASE_API_URL}catalog/${category === "allproducts" ? "" : category}`
            );
            dispatch({
                type: GET_CATALOG_DATA_SUCCESS,
                payload: { data, title },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const sortCatalog = (type) => {
        const sortProducts = state.products;
        switch (type) {
            case "LTH":
                sortProducts.sort((a, b) => a.price - b.price);
                break;
            case "HTL":
                sortProducts.sort((a, b) => b.price - a.price);
                break;
            case "AZ":
                sortProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "ZA":
                sortProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }
        dispatch({
            type: SORT_CATALOG,
            payload: sortProducts,
        });
    };

    const addToCart = (product, quantity) => {
        const itemIndex = state.cart.findIndex((item) => item._id === product._id);

        if (itemIndex !== -1) {
            console.log(`quantity : ${quantity}`);

            const updatedCart = [...state.cart];
            const newQuantity = updatedCart[itemIndex].quantity + quantity;

            updatedCart[itemIndex].quantity = newQuantity > 10 ? 10 : newQuantity;

            dispatch({
                type: UPDATE_COUNT_PRODUCT,
                payload: updatedCart,
            });
        } else {
            const newItem = { ...product, quantity };
            dispatch({
                type: ADD_TO_CART,
                payload: newItem,
            });
        }
    };

    const updateProductQuantity = (itemId, quantity) => {
        const updatedCart = state.cart.map((item) => {
            if (item._id === itemId) {
                return {
                    ...item,
                    quantity,
                };
            }
            return item;
        });
        dispatch({
            type: UPDATE_COUNT_PRODUCT,
            payload: updatedCart,
        });
    };

    const removeFromCart = (itemId) => {
        const updatedCart = state.cart.filter((item) => item._id !== itemId);
        dispatch({
            type: REMOVE_FROM_CART,
            payload: updatedCart,
        });
    };
    const cleanCart = () => {
        dispatch({
            type: CLEAN_CART,
        });
    };

    const updateTotal = (totalPrice) => {
        dispatch({
            type: UPDATE_TOTAL,
            payload: totalPrice,
        });
    };

    const checkout = () => {
        try {
            dispatch({ type: SHOW_CHECKOUT_ALERT });
            setTimeout(() => {
                dispatch({ type: CLOSE_CHECKOUT_ALERT });
            }, 3000);
            dispatch({ type: CLEAN_CART });
        } catch (error) {
            console.log(error);
        }
    };

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                getCatalogData,
                addToCart,
                updateProductQuantity,
                sortCatalog,
                checkout,
                updateTotal,
                removeFromCart,
                goToTop,
                cleanCart,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
