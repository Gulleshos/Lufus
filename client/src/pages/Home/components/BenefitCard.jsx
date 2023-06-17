import { Box, Img, Highlight } from "@chakra-ui/react";

const HighlightText = ({ text, highlight }) => {
    return (
        <Highlight query={highlight} styles={{ color: "primary2" }}>
            {text}
        </Highlight>
    );
};

const BenefitCard = ({ img, text, highlight }) => {
    return (
        <Box
            fontSize={{ base: "24px", md: "20px", lg: "24px" }}
            w={{ base: "300px", md: "240px", lg: "300px" }}
            mb={{ base: "100px", md: "0px" }}
            color="secondary2"
            textAlign="center"
        >
            <Img src={img} mb="20px" />
            <HighlightText text={text} highlight={highlight} />
        </Box>
    );
};
export default BenefitCard;
