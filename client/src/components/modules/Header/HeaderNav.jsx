import { Flex, Image } from "@chakra-ui/react";
import { NavLink } from "../../common";
import CartIcon from "../../../assets/images/icons/cart.svg";

const HeaderNav = () => {
    return (
        <>
            <Flex
                fontSize="main"
                color="primary2"
                alignItems="center"
                display={{ base: "none", md: "flex" }}
            >
                <NavLink text="Catalog" url="/catalog" />
                <NavLink text="Advices" url="/advices" />
                <NavLink text="Gallery" url="/gallery" />
                <NavLink text="About us" url="/aboutus" />
            </Flex>
            <NavLink url="/cart">
                <Image src={CartIcon} />
            </NavLink>
        </>
    );
};

export default HeaderNav;
