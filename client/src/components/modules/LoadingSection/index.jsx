import { Center, Skeleton } from "@chakra-ui/react";

const LoadingSection = () => {
    return (
        <Center flexDirection="column">
            <Skeleton
                w={{ base: "70%", md: "50%" }}
                h="58px"
                borderRadius="16px"
                mb="16px"
            />
            <Skeleton w="230px" h="4px" borderRadius="16px" mb="100px" />
            <Skeleton w="100%" h="500px" borderRadius="30px" mb="100px" />
            <Skeleton w="40%" h="40px" borderRadius="16px" />
        </Center>
    );
};

export default LoadingSection;
