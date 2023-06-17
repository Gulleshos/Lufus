import useCatalog from "../../../hooks/useCatalog";
import { Card, CardSkeleton } from "../../../components/common";
import { GridItem } from "@chakra-ui/react";

const CategoryPage = ({ category }) => {
    const { products, isLoading, addToCart } = useCatalog(category);

    return isLoading
        ? Array.from(new Array(12)).map((el, i) => (
            <GridItem key={i} justifySelf="center">
                <CardSkeleton />
            </GridItem>
        ))
        : products.map((el) => (
            <GridItem key={el._id} justifySelf="center">
                <Card product={el} addToCart={addToCart} />
            </GridItem>
        ));
};

export default CategoryPage;