import { Skeleton } from "@chakra-ui/react";

const CardSkeleton = () => {
    return (
        <Skeleton
            borderRadius="16px"
            h="300px"
            w="240px"
            p="12px"
            mb={{ base: "100px", md: "0px" }}
            _last={{ mb: "0px" }}
        />
    );
};

export default CardSkeleton;
