import { Card, ContentSection } from "../../../components/common";

const LowCareSection = ({ care, addToCart }) => {
    return (
        <ContentSection
            title="Good low care indoor plants"
            typeControl="morePlants"
            category="easytocare"
            direction="row"
            justify="around"
        >
            {care.slice(0, 2).map((el, i) => (
                <Card product={el} addToCart={addToCart} key={i} />
            ))}
        </ContentSection>
    );
};

export default LowCareSection;
