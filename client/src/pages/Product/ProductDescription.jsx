import { GridItem, Heading, Text } from "@chakra-ui/react";

const ProductDescription = ({ description }) => {
    return (
        <GridItem colSpan={2} w="100%" mt="80px">
            <Heading
                fontWeight="bold"
                color="primary2"
                fontSize={{ base: "titleMob", md: "title" }}
                textAlign="center"
                mb="40px"
            >
                Description
            </Heading>
            <Text
                fontSize={{ base: "mainMob", md: "main" }}
                color="secondary2"
                textAlign="center"
            >
                {description}
            </Text>
        </GridItem>
    );
};

export default ProductDescription;
