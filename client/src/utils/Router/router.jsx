import { createBrowserRouter } from "react-router-dom";
import {
    Home,
    Catalog,
    Product,
    Advices,
    AboutUs,
    Gallery,
    Cart,
    Error,
} from "../../pages";
import { Layout } from "../index";

import { CategoryPage } from "../../pages/Catalog";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                path: "catalog",
                element: <Catalog />,
                children: [
                    {
                        path: "/catalog",
                        element: <CategoryPage category="allproducts"/>,
                    },
                    {
                        path: "sales",
                        element: <CategoryPage category="sales" />,
                    },
                    {
                        path: "indoor",
                        element: <CategoryPage category="indoor" />,
                    },
                    {
                        path: "outdoor",
                        element: <CategoryPage category="outdoor" />,
                    },
                    {
                        path: "easytocare",
                        element: <CategoryPage category="easytocare" />,
                    },
                    {
                        path: "small",
                        element: <CategoryPage category="small" />,
                    },
                    {
                        path: "medium",
                        element: <CategoryPage category="medium" />,
                    },
                    {
                        path: "large",
                        element: <CategoryPage category="large" />,
                    },
                    {
                        path: "lowlight",
                        element: <CategoryPage category="lowlight" />,
                    },
                ],
            },
            {
                path: "product",
                element: <Product />,
            },
            {
                path: "advices",
                element: <Advices />,
            },
            {
                path: "gallery",
                element: <Gallery />,
            },
            {
                path: "aboutus",
                element: <AboutUs />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
]);
