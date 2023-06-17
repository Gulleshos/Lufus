import { Box, Image, GridItem, Text, Flex } from "@chakra-ui/react";
import Plant from "../../assets/images/products/monstera.png";
import BackIcon from "../../assets/images/icons/back.svg";

const ProductCard = ({product, handleGoBack }) => {
    return (
        <GridItem
            w="100%"
            maxW="700px"
            h={{ base: "300px", sm: "400px" }}
            position="relative"
            p={{ base: "16px", sm: "32px" }}
            colSpan={{ base: 2, lg: 1 }}
            backgroundColor="primary1"
            borderRadius="30px"
            color="secondary1"
            fontSize={{ base: "titleMob", md: "title" }}
            justifySelf="center"
        >
            <Flex
                h="100%"
                flexDirection={{ base: "row-reverse", md: "column" }}
                justifyContent={{ base: "space-between", md: "flex-end" }}
                alignItems={{ base: "flex-end", md: "initial" }}
            >
                <Box textAlign={{ base: "right", md: "unset" }}>
                    <Text fontSize={{ base: "mainMob", md: "main" }}>
                        Difficulty
                    </Text>
                    <Text fontWeight="bold">{product.difficulty}</Text>
                </Box>
                <Box>
                    <Text fontSize={{ base: "mainMob", md: "main" }}>Size</Text>
                    <Text fontWeight="bold">{product.size}</Text>
                </Box>
            </Flex>
            <Image
                src={BackIcon}
                position="absolute"
                left={{ base: "12px", sm: "28px" }}
                top={{ base: "16px", sm: "32px" }}
                w="32px"
                h="32px"
                _hover={{ cursor: "pointer" }}
                onClick={handleGoBack}
            />
            <Image
                src={product.image ? product.image : Plant}
                position="absolute"
                transform={{ base: "translate(-50%, -50%)", md: "none" }}
                top={{ base: "54%", sm: "50%", md: "auto" }}
                left={{ base: "50%", md: "initial" }}
                right={{ base: "initial", md: "0" }}
                bottom={{ base: "initial", md: "-20px" }}
                w={{ base: "200px", sm: "330px" }}
                h={{ base: "330px", sm: "495px" }}
            />
        </GridItem>
    );
};

export default ProductCard;
