import Product from "../models/Product.js";

const categories = {
    sales: {
        field: "discountPrice",
        value: { $gt: 0 },
    },
    indoor: {
        field: "placing",
        value: "indoor",
    },
    outdoor: {
        field: "placing",
        value: "outdoor",
    },
    easytocare: {
        field: "difficulty",
        value: "easy",
    },
    small: {
        field: "size",
        value: "small",
    },
    medium: {
        field: "size",
        value: "medium",
    },
    large: {
        field: "size",
        value: "large",
    },
    lowlight: {
        field: "light",
        value: 1,
    },
};

const getHomePageData = async (req, res) => {
    try {
        const care = await Product.find({ difficulty: "easy" });
        const sales = await Product.find({ discountPrice: { $gt: 0 } });
        res.json({ easytocare: care, sales: sales });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

const getAllCatalog = async (req, res) => {
    try {
        const result = await Product.find();
        res.json(result);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

const getCatalogByField = async (req, res) => {
    const category = req.params.category;
    const { field, value } = categories[category];
    try {
        const result = await Product.find({ [field]: value });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: e.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const result = await Product.findById(productId);
        if (!result) {
            res.status(404).json({ error: "Product not found" });
        } else {
            res.json(result);
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export { getAllCatalog, getCatalogByField, getProduct, getHomePageData };
