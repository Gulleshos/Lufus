import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { Router, theme } from "./utils";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/700.css";
import "normalize.css";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <RouterProvider router={Router} />
        </ChakraProvider>
    );
}

export default App;
 