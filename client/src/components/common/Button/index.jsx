import { Box, Text, Img, Link, Button as ActionButton, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


const Button = ({ type, url, text, onClick }) => {

    return type === "link" ? (
        <Link as={RouterLink} to={url}>
            <Text
                display="inline-block"
                lineHeight="28px"
                color="secondary1"
                p="14px"
                backgroundColor="primary1"
                borderRadius="22px"
                fontSize={{ base: "mainMob", sm: "main" }}
                _hover={{ bg: "#27824c" }}
            >
                {text}
            </Text>
                    
        </Link>
    ) : (
        <ActionButton
            onClick={onClick}
            color="secondary1"
            p="14px"
            h="56px"
            backgroundColor="primary1"
            borderRadius="22px"
            fontWeight="normal"
            fontSize={{ base: "mainMob", sm: "main" }}
            _hover={{ bg: "#27824c" }}
        >
            {text}
        </ActionButton>
    );
};

export default Button;
