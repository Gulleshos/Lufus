import { GridItem, Image } from "@chakra-ui/react";

const GalleryItem = ({ image, isLarge }) => (
    <GridItem
        rowSpan={{ base: isLarge ? 4 : 2, md: isLarge ? 2 : 1 }}
        colSpan={{ base: isLarge ? 4 : 2, md: isLarge ? 2 : 1 }}
        justifySelf="center"
    >
        <Image src={image} />
    </GridItem>
);

export default GalleryItem;