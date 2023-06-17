import express from "express";
const router = express.Router();

import {
    getAllCatalog,
    getCatalogByField,
    getProduct,
    getHomePageData,
} from "../controllers/productsController.js";

router.route("/homepagedata").get(getHomePageData);
router.route("/catalog").get(getAllCatalog);
router.route("/catalog/:category").get(getCatalogByField);
router.route("/product/:id").get(getProduct);

export default router;
