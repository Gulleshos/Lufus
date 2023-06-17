import { Heading, Text, Box } from "@chakra-ui/react";

const AdviceSection = ({ title, text }) => {
    return (
        <Box>
            <Heading color="primary1" fontSize="title">
                {title}
            </Heading>
            <Text mb="50px" mt="30px" fontSize={{ base: "mainMob", md: "main" }}>
                {text}
            </Text>
        </Box>
    );
};

export default AdviceSection;
