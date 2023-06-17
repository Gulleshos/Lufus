import { Image, Text, Box } from "@chakra-ui/react";
import EmptyCartImage from "../../../assets/images/emptyCart.svg";
import { Button } from "../../../components/common";

const EmptyCart = () => {
    return (
        <Box>
            <Image src={EmptyCartImage} />
            <Text
                fontSize={{ base: "titleMob", sm: "title" }}
                color="primary2"
                m="100px 0 25px 0"
            >
                Your cart is empty
            </Text>
            <Button type="link" text="Continue Shopping" url="/catalog" />
        </Box>
    );
};

export default EmptyCart;
