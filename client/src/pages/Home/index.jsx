import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import {
    Carousel,
    BenefitsSection,
    DiscountSection,
    InfoSection,
    LowCareSection,
} from "./components";

import { LoadingSection } from "../../components/modules";

import useFetch from "../../hooks/useFetch";
import useCart from "../../hooks/useCart";
const Home = () => {
    const { data, isLoading } = useFetch("homepagedata");
    const { goToTop } = useAppContext();
    const { addToCart } = useCart();

    useEffect(() => {
        goToTop();
    }, []);

    return (
        <>
            <Carousel />

            <BenefitsSection />

            {isLoading ? (
                <LoadingSection />
            ) : (
                <DiscountSection
                    isLoading={isLoading}
                    sales={data.sales}
                    addToCart={addToCart}
                />
            )}

            <InfoSection />

            {isLoading ? (
                <LoadingSection />
            ) : (
                <LowCareSection
                    isLoading={isLoading}
                    care={data.easytocare}
                    addToCart={addToCart}
                />
            )}
        </>
    );
};

export default Home;
