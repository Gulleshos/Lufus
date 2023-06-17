import { Box } from "@chakra-ui/react";

const Underline = ({ variant }) => {
    return (
        <Box
            backgroundColor="primary2"
            borderRadius="16px"
            maxW={variant === "long" ? "900px" : "230px"}
            w="100%"
            mb={variant === "long" ? "0px" : "100px"}
            h="4px"
        />
    );
};

export default Underline;