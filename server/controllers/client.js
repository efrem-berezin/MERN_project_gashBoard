import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"
import User from "../models/User.js"
import Transaction from "../models/Transaction.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        const productsWithStats = await Promise.all(
            products.map( async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id
                });
                return {...product._doc, stat}
            })
        );

        res.status(200).json(productsWithStats);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getCustomers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: "Users not found" });
    }
};

export const getTransactions = async (req, res) => {
    try {
        // Логируем параметры запроса
        console.log("Request Params:", req.query);

        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

        // formatted sort logic
        const generateSort = () => {
            if (!sort) return {};
            const sortParsed = JSON.parse(sort);
            return {
                [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1,
            };
        };

        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const transactions = await Transaction.find({
            $or: [
                { cost: { $regex: new RegExp(search, "i") } },
                { userId: { $regex: new RegExp(search, "i") } },
            ],
        })
            .sort(sortFormatted)
            .skip(page * pageSize)
            .limit(pageSize);

        const total = await Transaction.countDocuments({
            name: { $regex: search, $options: "i" },
        });

        res.status(200).json({
            transactions,
            total,
        });
    } catch (error) {
        console.error("Error in getTransactions:", error.message);
        res.status(404).json({ message: error.message });
    }
};


export const getGeography = async (req, res) => {
    try{
        const users = await User.find()

        const mappedLocations = users.reduce((acc, { country }) => {
            const countryISO3 = getCountryISO3(country);
            if(!acc[countryISO3]) {
                acc[countryISO3] = 0
            }
            acc[countryISO3]++;
            return acc; 
        }, {});
        const formattedLocations = Object.entries(mappedLocations).map(([country, count]) => {
            return { id: country, value: count }
        });
        res.status(200).json(formattedLocations);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }

}