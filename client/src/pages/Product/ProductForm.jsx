import {
    Box,
    Flex,
    Button,
} from "@chakra-ui/react";
import { useState } from "react";


const ProductForm = ({
    addToCart,
    product,
    icon,
}) => {
    
    const [productCount, setProductCount] = useState(0);
    

    const handleIncrease = () => {
        if (productCount < 10) {
            setProductCount(productCount + 1)
            setTimeout(() => {}, 500);
        }
    };

    const handleDecrease = () => {
        if (productCount > 0) {
            setProductCount(productCount - 1)
            setTimeout(() => {}, 500);
        }
    };
    const handleAddToCart = () => {
        
        if (productCount < 10 && productCount > 0) {
            addToCart(product, productCount);
        }
    };
    return (
        <Flex flexDirection="column">
            <Flex justifyContent="space-between" w="100%">
                <Flex>
                    <Box
                        w="40px"
                        h="40px"
                        borderRadius="16px"
                        bg="primary1"
                        p="18px 8px"
                        onClick={handleDecrease}
                    >
                        <Box
                            w="24px"
                            h="4px"
                            borderRadius="10px"
                            bg="secondary1"
                        />
                    </Box>

                    <Box fontSize="32px" color="primary2" mx="16px">
                        {productCount}
                    </Box>

                    <Box
                        w="40px"
                        h="40px"
                        borderRadius="16px"
                        bg="primary1"
                        p="18px 8px"
                        position="relative"
                        onClick={handleIncrease}
                    >
                        <Box
                            w="24px"
                            h="4px"
                            borderRadius="10px"
                            bg="secondary1"
                        />
                        <Box
                            w="4px"
                            h="24px"
                            borderRadius="10px"
                            bg="secondary1"
                            position="absolute"
                            top="8px"
                            left="18px"
                        />
                    </Box>
                </Flex>
                <Box fontSize="title" color="primary2" ml="40px">
                    $ {productCount === 0 ? product.price : productCount * product.price}
                </Box>
            </Flex>
            <Button
                mt="10px"
                alignSelf="center"
                bg="primary1"
                w="160px"
                color="secondary1"
                fontSize="main"
                fontWeight="normal"
                borderRadius="16px"
                leftIcon={icon}
                onClick={handleAddToCart}
            >
                Add To Cart
            </Button>
        </Flex>
    );
};

export default ProductForm;
