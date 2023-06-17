import { Outlet } from "react-router-dom";
import { ContentSection } from "../../components/common";
import CatalogNav from "./CatalogNav.jsx";
import useCatalog from "../../hooks/useCatalog";
import { Grid } from "@chakra-ui/react";

import CategoryPage from "./CategoryPage";

const Catalog = () => {
    const { categoryTitle, sortCatalog } = useCatalog();

    return (
        <ContentSection title={categoryTitle}>
            <Grid
                gridTemplateColumns={{ md: "180px 1fr" }}
                w="100%"
                gap="5"
                align="start"
            >
                <CatalogNav sortCatalog={sortCatalog} />
                <Grid
                    templateColumns={{
                        base: "240px",
                        md: "repeat(2, 240px)",
                        lg: "repeat(3, 240px)",
                    }}
                    justifyContent={{
                        base: "center",
                        md: "space-around",
                        lg: "space-between",
                    }}
                    rowGap="100px"
                >
                    <Outlet />
                </Grid>
            </Grid>
        </ContentSection>
    );
};

export { Catalog, CategoryPage };