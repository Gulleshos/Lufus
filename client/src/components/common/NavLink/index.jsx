import { Link as RouterLink } from "react-router-dom";
import { Text, Link } from "@chakra-ui/react";

const NavLink = ({ text, url, children, onClick, width, variant }) => {
    return (
        <Link
            as={RouterLink}
            to={url}
            p="16px"
            _hover={
                variant === "footer"
                    ? { textDecoration: "underline" }
                    : { color: "primary1" }
            }
            onClick={onClick}
            w={width}
        >
            <Text>{text}</Text>
            {children}
        </Link>
    );
};

export default NavLink;
