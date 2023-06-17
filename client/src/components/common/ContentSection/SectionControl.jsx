import { Button } from "../index.jsx";

const SectionControl = ({ type, category }) => {
    switch (type) {
        case "morePlants":
            return <Button type="link" text="More Plants" url={`/catalog/${category}`} />;
        case "continue":
            return <Button type="link" text="Continue Shopping" url="/catalog" />;
    }
};

export default SectionControl;
