import { Box, Image, GridItem, Center, Heading, Text, Flex } from "@chakra-ui/react";
import WaterIcon from "../../assets/images/icons/drop.svg";
import TemperatureIcon from "../../assets/images/icons/temperature.svg";
import LightIcon from "../../assets/images/icons/light.svg";

import ProductForm from "./ProductForm";

const ProductInfo = ({ updateProductQuantity, addToCart, product }) => {
    
    return (
        <GridItem
            w="100%"
            maxW="700px"
            colSpan={{ base: 2, lg: 1 }}
            fontSize={{ base: "titleMob", md: "title" }}
            justifySelf="center"
            alignSelf="start"
        >
            <Heading
                fontSize={{ base: "sectionTitleMob", md: "sectionTitle" }}
                color="primary2"
            >
                {product.name}
            </Heading>
            <Text
                fontSize={{ base: "subMainMob", md: "subMain" }}
                color="primary1"
                textTransform="uppercase"
            >
                {product.placing}
            </Text>
            <Flex justifyContent="space-evenly" my="30px">
                <Center flexDir="column">
                    <Image src={WaterIcon} />
                    <Text fontSize="main" color="primary2" my="22px">
                        Water
                    </Text>
                    <Flex>
                        {Array.from(new Array(product.water)).map((el, i) => (
                            <Box
                                key={i}
                                bg="primary1"
                                borderRadius="16px"
                                h="30px"
                                w="4px"
                                mx="3px"
                            />
                        ))}
                    </Flex>
                </Center>
                <Center flexDir="column">
                    <Image src={TemperatureIcon} />
                    <Text fontSize="main" color="primary2" my="22px">
                        Temperature
                    </Text>
                    <Flex>
                        {Array.from(new Array(product.temperature)).map((el, i) => (
                            <Box
                                key={i}
                                bg="primary1"
                                borderRadius="16px"
                                h="30px"
                                w="4px"
                                mx="3px"
                            />
                        ))}
                    </Flex>
                </Center>
                <Center flexDir="column">
                    <Image src={LightIcon} />
                    <Text fontSize="main" color="primary2" my="22px">
                        Light
                    </Text>
                    <Flex>
                        {Array.from(new Array(product.light)).map((el, i) => (
                            <Box
                                key={i}
                                bg="primary1"
                                borderRadius="16px"
                                h="30px"
                                w="4px"
                                mx="3px"
                            />
                        ))}
                    </Flex>
                </Center>
            </Flex>
            <ProductForm
                updateProductQuantity={updateProductQuantity}
                addToCart={addToCart}
                product={product}
            />
        </GridItem>
    );
};

export default ProductInfo;
