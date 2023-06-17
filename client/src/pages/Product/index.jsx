import { Grid } from "@chakra-ui/react";
import { LoadingSection } from "../../components/modules";

import useProduct from "../../hooks/useProduct";
import ProductCard from "./ProductCard";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";

const Product = () => {
    const { data, isLoading, addToCart, handleGoBack, updateProductQuantity } = useProduct();

    return isLoading ? (
        <LoadingSection />
    ) : (
        <Grid
            h="100%"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={8}
            my="50px"
        >
            <ProductCard
                difficulty={data.difficulty}
                size={data.size}
                image={data.image}
                product={data}
                handleGoBack={handleGoBack}
            />
            <ProductInfo
                name={data.name}
                placing={data.placing}
                water={data.water}
                temperature={data.temperature}
                light={data.light}
                addToCart={addToCart}
                product={data}
                updateProductQuantity={updateProductQuantity}
            />
            <ProductDescription description={data.description} />
        </Grid>
    );
};

export default Product;
