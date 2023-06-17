import { Link as RouterLink } from "react-router-dom";
import { Box, Image, Flex, Text, Link, Spacer } from "@chakra-ui/react";

import Plant from "../../../assets/images/products/monstera.png";
import RemoveFromCartIcon from "../../../assets/images/icons/removeFromCart.svg";

const QuantityButton = ({ onClick, type }) => {
    return (
        <Box
            w="34px"
            h="34px"
            borderRadius="12px"
            bg="secondary1"
            p="15px 6px"
            position="relative"
            onClick={onClick}
        >
            {type === "decrease" ? (
                <Box w="22px" h="4px" borderRadius="10px" bg="primary2" />
            ) : (
                <>
                    <Box w="22px" h="4px" borderRadius="10px" bg="primary2" />
                    <Box
                        w="4px"
                        h="22px"
                        borderRadius="10px"
                        bg="primary2"
                        position="absolute"
                        top="6px"
                        left="15px"
                    />
                </>
            )}
        </Box>
    );
};

const SelectedCard = ({ product, updateProductQuantity, removeFromCart }) => {
    const handleIncrease = () => {
        if (product.quantity < 10) {
            updateProductQuantity(product._id, ++product.quantity);
            setTimeout(() => {}, 500);
        }
    };
    const handleDecrease = () => {
        if (product.quantity > 0) {
            updateProductQuantity(product._id, --product.quantity);
            setTimeout(() => {}, 500);
        }
        if (product.quantity === 0) {
            removeFromCart(product._id);
        }
    };
    const handleRemove = () => {
        removeFromCart(product._id);
    };
    return (
        <Flex
            w="100%"
            maxW="600px"
            h={{ base: "180px", sm: "240px" }}
            p={{ base: "16px", sm: "20px" }}
            mb="120px"
            borderRadius="16px"
            bg="primary1"
            position="relative"
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="flex-end"
            color="primary2"
        >
            <Image
                src={product.image ? product.image : Plant}
                position="absolute"
                left={{ base: "-20px", md: "-20px" }}
                bottom={{ base: "20px", md: "20px" }}
                h={{ base: "250px", sm: "330px" }}
                w={{ base: "170px", sm: "220px" }}
            />

            <Image
                src={RemoveFromCartIcon}
                h="30px"
                w="30px"
                onClick={handleRemove}
                _hover={{ cursor: "pointer" }}
            />
            <Spacer />
            <Link as={RouterLink} to={`/product?id=${product._id}`} color="secondary1">
                <Text
                    fontSize={{ base: "titleMob", sm: "title" }}
                    fontWeight="bold"
                    mb="10px"
                    w={{ base: "200px", sm: "260px" }}
                    textAlign="right"
                >
                    {product.name}
                </Text>
            </Link>
            <Flex
                alignItems="center"
                w="100%"
                maxW={{ base: "210px", sm: "260px", md: "300px" }}
            >
                <Flex alignItems="center">
                    <QuantityButton type="decrease" onClick={handleDecrease} />
                    <Box
                        fontSize={{ base: "titleMob", sm: "title" }}
                        color="primary2"
                        w={{ base: "46px", sm: "70px", md: "80px" }}
                    >
                        {product.quantity}
                    </Box>
                    <QuantityButton onClick={handleIncrease} />
                </Flex>
                <Spacer />
                <Text fontSize={{ base: "titleMob", sm: "title" }}>
                    $ {product.price * product.quantity}
                </Text>
            </Flex>
        </Flex>
    );
};

export default SelectedCard;
