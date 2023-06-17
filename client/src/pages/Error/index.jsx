import { Link as RouterLink } from "react-router-dom";
import ErrorImage from "../../assets/images/error.svg";
import { Center, Image, Link } from "@chakra-ui/react";

const Error = () => {
    return (
        <Center w="100vw" h="100vh">
            <Link as={RouterLink} to="/">
                <Image src={ErrorImage} />
            </Link>
        </Center>
    );
};

export default Error;