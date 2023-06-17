import { Center, Flex, Heading } from "@chakra-ui/react";
import SectionControl from "./SectionControl.jsx";
import { Underline } from "../";

const ContentSection = ({
    title,
    children,
    direction,
    justify,
    category,
    typeControl,
}) => {
    return (
        <Center
            flexDirection="column"
            textAlign="center"
            color="secondary2"
            fontSize="main"
            my="50px"
            w="100%"
        >
            {title && (
                <>
                    <Heading
                        variant="section-title"
                        fontSize={{
                            base: "sectionTitleMob",
                            md: "sectionTitle",
                        }}
                    >
                        {title}
                    </Heading>
                    <Underline />
                </>
            )}

            <Flex
                flexDirection={
                    direction === "row"
                        ? { base: "column", md: "row" }
                        : { base: "column" }
                }
                justifyContent={justify === "around" ? "space-around" : "space-between"}
                alignItems="center"
                w="100%"
                mb="100px"
            >
                {children}
            </Flex>

            {typeControl && <SectionControl type={typeControl} category={category} />}
        </Center>
    );
};

export default ContentSection;
