import {
    Flex,
    Text,
    Center,
    Image,
} from "@chakra-ui/react";
import SealSoftWhiteImg from "../../../assets/images/icons/sealsoftWhite.svg";

import InstagramIcon from "../../../assets/images/icons/instagram.svg";
import FacebookIcon from "../../../assets/images/icons/facebook.svg";
import TelegramIcon from "../../../assets/images/icons/telegram.svg";

import { NavLink } from "../../common";

const Footer = () => {
    return (
        <Center
            py="30px"
            color="#fff"
            backgroundColor="primary1"
            flexDirection="column"
            textAlign="center"
            w="100%"
        >
            <Flex
                fontSize={{ base: "subMainMob", md: "subMain" }}
                justifyContent="space-between"
                flexDirection={{ base: "column", sm: "row" }}
            >
                <NavLink url="/" text="Home page" variant="footer" />
                <NavLink url="/catalog" text="Catalog" variant="footer" />
                <NavLink url="/advices" text="Advices" variant="footer" />
                <NavLink url="/gallery" text="Gallery" variant="footer" />
                <NavLink url="/aboutus" text="About us" variant="footer" />
            </Flex>
            <Text mb="6px">lufu.shop@plant.com</Text>
            <Flex>
                <Image src={InstagramIcon} m="10px" />
                <Image src={FacebookIcon} m="10px" />
                <Image src={TelegramIcon} m="10px" />
            </Flex>
            <Image src={SealSoftWhiteImg} mt="10px" />
        </Center>
    );
};

export default Footer;
