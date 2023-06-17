import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { ContentSection } from "../../components/common";
import { Grid } from "@chakra-ui/react";
import { gallery } from "../../const";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
    const { goToTop } = useAppContext();
    useEffect(() => {
        goToTop();
    }, []);

    return (
        <ContentSection title="Gallery">
            <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(5, 1fr)">
                {gallery.map((image, index) => (
                    <GalleryItem
                        key={index}
                        image={image}
                        isLarge={index === 2 || index === 5 || index === 8}
                    />
                ))}
            </Grid>
        </ContentSection>
    );
};

export default Gallery;