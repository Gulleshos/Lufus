import { useEffect } from "react";
import { ContentSection } from "../../components/common";
import { Text, Img, Center } from "@chakra-ui/react";
import AboutUsImg from "../../assets/images/aboutUs.svg";
import { useAppContext } from "../../context/appContext";

const AboutUs = () => {
    const { goToTop } = useAppContext();
    useEffect(() => {
        goToTop();
    }, []);
    return (
        <ContentSection title="About us">
            <Text
                textAlign="center"
                fontSize={{ base: "mainMob", md: "main" }}
                mb="40px"
            >
                Lufus is a team of friends who are very fond of indoor plants.
                Having met in college, they realized that they have a lot in
                common, I also really like to take care of plants. Over time,
                this hobby grew into something more. And with the rest, the team
                grew a bit, and it was decided to create a store where everyone
                can easily buy a pet of their choice.
            </Text>
            <Text
                textAlign="center"
                fontSize={{ base: "mainMob", md: "main" }}
                mb="100px"
            >
                At first Lufus worked in a small house, but over time it grew to
                his own modern greenhouse in the south of the country, where
                each plant is cared for with special attention.
            </Text>
            <Center>
                <Img src={AboutUsImg} />
            </Center>
        </ContentSection>
    );
};

export default AboutUs;