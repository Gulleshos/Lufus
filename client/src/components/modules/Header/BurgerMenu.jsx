import LogoIcon from "../../../assets/images/icons/logo.svg";
import SealSoftIcon from "../../../assets/images/icons/sealsoftWhite.svg";
import CartIcon from "../../../assets/images/icons/cart.svg";
import BurgerIcon from "../../../assets/images/icons/burger.svg";
import ArrowIcon from "../../../assets/images/icons/arrow.svg";

import {
    Flex,
    Spacer,
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Center,
    Image,
    Divider,
} from "@chakra-ui/react";
import { NavLink } from "../../common";

const BurgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box display={{ md: "none" }}>
            <Box p="16px" onClick={onOpen}>
                <Image src={BurgerIcon} />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent position="relative">
                    <DrawerHeader>
                        <Flex alignItems="center">
                            <Box p="16px" onClick={onClose}>
                                <Image src={ArrowIcon} />
                            </Box>

                            <Spacer />

                            <NavLink url="/" onClick={onClose}>
                                <Image src={LogoIcon} />
                            </NavLink>

                            <Spacer />

                            <NavLink url="/cart" onClick={onClose}>
                                <Image src={CartIcon} />
                            </NavLink>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody fontSize="28px">
                        <Flex
                            flexDirection="column"
                            textAlign="center"
                            alignItems="center"
                        >
                            <Divider w="100px" />

                            <NavLink
                                url="/catalog"
                                width="100%"
                                onClick={onClose}
                                text="Catalog"
                            />

                            <Divider w="200px" />

                            <NavLink
                                url="/advices"
                                width="100%"
                                onClick={onClose}
                                text="Advices"
                            />

                            <Divider w="200px" />

                            <NavLink
                                url="/gallery"
                                width="100%"
                                onClick={onClose}
                                text="Gallery"
                            />

                            <Divider w="200px" />

                            <NavLink
                                url="/aboutus"
                                width="100%"
                                onClick={onClose}
                                text="About us"
                            />

                            <Divider w="100px" />
                        </Flex>
                    </DrawerBody>
                    <Center>
                        <Image
                            src={SealSoftIcon}
                            w="300px"
                            position="absolute"
                            top="80vh"
                        />
                    </Center>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default BurgerMenu;