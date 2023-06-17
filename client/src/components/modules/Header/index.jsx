import { Link as RouterLink } from "react-router-dom";
import { Container, Flex, Spacer, Link, Image } from "@chakra-ui/react";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "./BurgerMenu";
import LogoIcon from "../../../assets/images/icons/logo.svg";

const Header = () => {
    return (
        <Container maxW="1232px" my="16px">
            <Flex h="70px" alignItems="center">
                <BurgerMenu />

                <Spacer display={{ md: "none" }} />

                <Link as={RouterLink} to="/" px="16px">
                    <Image src={LogoIcon} />
                </Link>

                <Spacer />

                <HeaderNav />
            </Flex>
        </Container>
    );
};

export default Header;