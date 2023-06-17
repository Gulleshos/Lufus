import { Outlet } from "react-router-dom";
import { Container, Box } from "@chakra-ui/react";
import { Header, Footer } from '../../components/modules';

const Layout = () => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Container maxW="1200px" flex="1 0 auto">
                <Outlet />
            </Container>
            <Footer />
        </Box>
    );
};

export default Layout;