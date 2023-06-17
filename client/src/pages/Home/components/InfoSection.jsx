import { Text } from "@chakra-ui/react";
import { ContentSection } from "../../../components/common";
import {Underline} from "../../../components/common";

const InfoSection = () => {
    return (
        <ContentSection>
            <Underline variant="long" />
            <Text maxW="800px" my="50px">
                Indoor plants should be an essential component of every interior
                design. Greenery brightens up indoor spaces and is known to have
                mood-boosting qualities.
            </Text>
            <Text maxW="800px" mb="50px">
                Indoor plants are popular because they are relatively easy to
                take care of, provide health benefits and can be used in a
                variety of indoor décor themes. Indoor plants are a great option
                for those who have little yard space for an outdoor garden or
                for those who live in climates with severely cold winters.
            </Text>
            <Underline variant="long" />
        </ContentSection>
    );
};

export default InfoSection;
