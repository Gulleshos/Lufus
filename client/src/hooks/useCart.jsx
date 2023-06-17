import { useAppContext } from "../context/appContext";

const useCart = () => {
    const { addToCart, updateProductQuantity, removeFromCart, cart } = useAppContext();

    return { cart, addToCart, updateProductQuantity, removeFromCart };
};

export default useCart;
