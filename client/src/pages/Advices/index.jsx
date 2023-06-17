import { useEffect } from "react";
import { ContentSection } from "../../components/common";
import { Grid } from "@chakra-ui/react";
import { useAppContext } from "../../context/appContext";
import AdviceSection from "./AdviceSection.jsx";
import { advices } from "../../const";

const Advices = () => {
    const { goToTop } = useAppContext();
    useEffect(() => {
        goToTop();
    }, []);
    return (
        <>
            <ContentSection title="General plant care">
                {advices.general.map(({ title, text }, index) => (
                    <AdviceSection key={index} title={title} text={text} />
                ))}
            </ContentSection>

            <ContentSection title="Repotting guide">
                <Grid
                    textAlign={{ base: "center", md: "left" }}
                    columnGap={{ md: "100px", lg: "160px" }}
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    templateRows={{ base: "repeat(8, 1fr)", md: "repeat(4, 1fr)" }}
                >
                    {advices.repotting.map(({ title, text }, index) => (
                        <AdviceSection key={index} title={title} text={text} />
                    ))}
                </Grid>
            </ContentSection>
        </>
    );
};

export default Advices;