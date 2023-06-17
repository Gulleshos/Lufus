import { Link as RouterLink } from "react-router-dom";
import { Box, Text, Img, Link, Button, Flex } from "@chakra-ui/react";

import AddToCartImg from "../../../assets/images/icons/addToCart.svg";
import Monstera from "../../../assets/images/products/monstera.png";

const ProductCard = ({ product, addToCart }) => {
    const handleAddToCart = () => {
        
        if (product.quantity < 11 || product.quantity === undefined) {
            addToCart(product, 1);
        }
    };
    return (
        <Flex
            backgroundColor="primary1"
            borderRadius="16px"
            position="relative"
            flexDirection="column"
            justifyContent="flex-end"
            h="300px"
            w="240px"
            p="12px"
            mb={{ base: "100px", md: "0px" }}
            color="secondary1"
            textAlign="start"
            _last={{ mb: "0px" }}
        >
            <Button
                position="absolute"
                top="0px"
                left="0px"
                background="primary1"
                colorScheme="green"
                borderRadius="16px"
                p="32px 12px"
                _active={{ background: "#33ab64" }}
                onClick={handleAddToCart}
                _hover={{ cursor: "pointer" }}
            >
                <Img src={AddToCartImg} h="36px" w="42px" />
            </Button>
            <Box position="absolute" bottom="70px" left="50px" h="330px" w="220px">
                <Img src={product.image ? product.image : Monstera} h="330px" w="220px" />
            </Box>
            {product.discountPrice !== 0 ? (
                <>
                    <Text
                        fontSize="main"
                        textDecoration="line-through"
                        color="secondary2"
                    >
                        {`$ ${product.price}`}
                    </Text>
                    <Text fontSize="title" fontWeight="bold">
                        {`$ ${product.discountPrice}`}
                    </Text>
                </>
            ) : (
                <Text fontSize="title" fontWeight="bold">
                    {`$ ${product.price}`}
                </Text>
            )}
            <Link as={RouterLink} to={`/product?id=${product._id}`}>
                <Text fontSize="main" fontWeight="bold" mt="16px">
                    {product.name.length > 15
                        ? product.name.slice(0, 14) + "..."
                        : product.name}
                </Text>
            </Link>
            <Text textTransform="uppercase" color="primary2" fontSize="subMain">
                {product.placing}
            </Text>
        </Flex>
    );
};

export default ProductCard;
