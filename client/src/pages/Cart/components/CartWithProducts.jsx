import { Text, Center, Flex } from "@chakra-ui/react";
import Checkout from "./Checkout";
import { Button } from "../../../components/common";
import SelectedCard from "./SelectedCard";

const CartWithProducts = ({
    cart,
    updateProductQuantity,
    removeFromCart,
    totalPrice,
    cleanCart,
}) => {
    return (
        <Center w="100%" flexDirection="column">
            {cart.map((el, i) => (
                <SelectedCard
                    product={el}
                    updateProductQuantity={updateProductQuantity}
                    removeFromCart={removeFromCart}
                    key={i}
                />
            ))}
            <Flex
                justifyContent="space-between"
                maxW="500px"
                w="100%"
                fontSize="title"
                mb="20px"
            >
                <Text fontWeight="bold">Total</Text>
                <Text>$ {totalPrice}</Text>
            </Flex>

            <Flex justifyContent="space-between" maxW="500px" w="100%">
                <Checkout cleanCart={cleanCart} />
                <Button type="link" text="Continue Shopping" url="/catalog" />
            </Flex>
        </Center>
    );
};

export default CartWithProducts;
