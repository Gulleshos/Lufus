import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `"Rubik", sans-serif`,
        body: `"Rubik", sans-serif`,
    },
    colors: {
        primary1: "#31A05E",
        primary2: "#3a3a3a",
        secondary1: "#fff",
        secondary2: "#606060",
    },
    fontSizes: {
        main: "24px",
        mainMob: "20px",
        subMain: "18px",
        subMainMob: "16px",
        title: "32px",
        titleMob: "26px",
        sectionTitle: "46px",
        sectionTitleMob: "40px",
    },
    components: {
        Heading: {
            variants: {
                "section-title": {
                    color: "primary2",
                    mb: "10px",
                },
            },
        },
    },
});

export default theme;
