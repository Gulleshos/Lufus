import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { ContentSection } from "../../components/common";
import useCart from "../../hooks/useCart";

import EmptyCart from "./components/EmptyCart.jsx";
import CartWithProducts from "./components/CartWithProducts";

const Cart = () => {
    const { cart, removeFromCart, updateProductQuantity } = useCart();
    const { checkout, totalPrice, updateTotal, goToTop, cleanCart } = useAppContext();

    useEffect(() => {
        goToTop();
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            let price = 0;
            cart.forEach((item) => {
                price += item.price * item.quantity;
            });
            updateTotal(price);
        }
    }, [cart]);

    return (
        <ContentSection title="Your cart" onSubmit={checkout}>
            {cart.length === 0 ? (
                <EmptyCart />
            ) : (
                <CartWithProducts
                    cart={cart}
                    updateProductQuantity={updateProductQuantity}
                    removeFromCart={removeFromCart}
                    totalPrice={totalPrice}
                    cleanCart={cleanCart}
                />
            )}
        </ContentSection>
    );
};

export default Cart;
