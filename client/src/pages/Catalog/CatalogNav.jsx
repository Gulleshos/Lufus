import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Heading,
    Stack,
    Link,
    Text,
    GridItem,
    Menu,
    MenuButton,
    MenuList,
    MenuOptionGroup,
    MenuItemOption,
    Button,
    Image,
} from "@chakra-ui/react";

import CategoryIcon from "../../assets/images/icons/categoriesBurger.svg";
import SortIcon from "../../assets/images/icons/sortArrows.svg";

import { sortTypes, categories } from "../../const";
const FilterSection = ({ title, buttonIcon, children }) => {
    return (
        <Stack my="50px" fontSize="subMain">
            <Heading fontSize="main" my="20px">
                {title}
            </Heading>
            {children}
        </Stack>
    );
};
const FilterSectionMobile = ({ title, buttonIcon, children }) => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                borderRadius="16px"
                colorScheme="green"
                fontSize="main"
                fontWeight="normal"
                leftIcon={<Image src={buttonIcon} />}
            >
                {title}
            </MenuButton>
            <MenuList w="80px">
                <Stack fontSize="subMain" px="10px" w="100%">
                    <MenuOptionGroup type="radio" defaultValue="1">
                        {children}
                    </MenuOptionGroup>
                </Stack>
            </MenuList>
        </Menu>
    );
};

const CatalogNav = ({ sortCatalog }) => {
    return (
        <GridItem>
            <Box display={{ base: "none", md: "block" }}>
                <Heading color="primary2">Filters</Heading>
                <Box w="140px" h="4px" bg="primary2" borderRadius="16px" my="10px" />

                <FilterSection title="Sort By">
                    {sortTypes.map(({ sortType, text }) => (
                        <Text
                            key={sortType}
                            onClick={() => sortCatalog(sortType)}
                            _hover={{ color: "primary1", cursor: "pointer" }}
                        >
                            {text}
                        </Text>
                    ))}
                </FilterSection>

                <FilterSection title="Categories">
                    {categories.map(({ text, link }) => (
                        <Link
                            key={link}
                            as={RouterLink}
                            to={link}
                            _hover={{ color: "primary1" }}
                        >
                            {text}
                        </Link>
                    ))}
                </FilterSection>
            </Box>

            <Box display={{ base: "block", md: "none" }} mb="100px">
                <Box
                    my="50px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <FilterSectionMobile title="Sort By" buttonIcon={SortIcon}>
                        {sortTypes.map(({ sortType, text }) => (
                            <MenuItemOption
                                value={sortType}
                                onClick={() => {
                                    sortCatalog(sortType);
                                }}
                            >
                                {text}
                            </MenuItemOption>
                        ))}
                    </FilterSectionMobile>

                    <FilterSectionMobile title="Categories" buttonIcon={CategoryIcon}>
                        {categories.map(({ text, link }) => (
                            <MenuItemOption value={link}>
                                <Link
                                    as={RouterLink}
                                    to={link}
                                    _hover={{ color: "primary1" }}
                                >
                                    {text}
                                </Link>
                            </MenuItemOption>
                        ))}
                    </FilterSectionMobile>
                </Box>
            </Box>
        </GridItem>
    );
};

export default CatalogNav;
