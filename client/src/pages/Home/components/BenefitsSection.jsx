import DeliveryImg from "../../../assets/images/homePage/delivery.svg";
import QualityImg from "../../../assets/images/homePage/quality.svg";
import TipsImg from "../../../assets/images/homePage/tips.svg";

import { ContentSection } from "../../../components/common";
import BenefitCard from "./BenefitCard.jsx";

const BenefitsSection = () => {
    return (
        <ContentSection title="Why Lufus?" direction="row">
            <BenefitCard
                img={DeliveryImg}
                text="Fast delivery nationwide to your door"
                highlight="Fast delivery"
            />
            <BenefitCard
                img={QualityImg}
                text="Incredible quality of all products"
                highlight="Incredible quality"
            />
            <BenefitCard
                img={TipsImg}
                text="Many useful tips and instruction for plant care"
                highlight="Many useful tips"
            />
        </ContentSection>
    );
};

export default BenefitsSection;
