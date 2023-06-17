import { Card, ContentSection } from "../../../components/common";

const DiscountSection = ({ sales, addToCart }) => {
    return (
        <ContentSection
            title="Our discounts"
            direction="row"
            justify="around"
            typeControl="morePlants"
            category="sales"
        >
            {sales.slice(0, 3).map((el, i) => (
                <Card product={el} addToCart={addToCart} key={i} />
            ))}
        </ContentSection>
    );
};

export default DiscountSection;