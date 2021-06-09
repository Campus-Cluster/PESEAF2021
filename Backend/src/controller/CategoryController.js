const Category = require('../model/CategoryModel');

// Crate New Category
const createCategory = async (req, res) => {
    if (req.body) {
        const category = new Category(req.body);
        await category.save()
            .then(data => {
                res.status(200).send({data: data});
            }).catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

// Get all Categories
const getCategory = async (req, res) => {
    await Category.find({}).populate('vehicles', 'name type model code')
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error.message});
        });
}

//Get Vehicles by Category
const getVehiclesByCategory = async (req, res) => {
    if (req.params && req.params.id) {
        await Category.findById(req.params.id).populate('vehicles', 'name type model code')
            .then(data => {
                res.status(200).send({vehicles: data.vehicles});
            }).catch(error => {
                res.status(500).send({error: error.message});
            });
    } else {
        console.log('No ID!')
    }
}

//Get Category Amount
const getCategoryAmount = async (req, res) => {
    if (req.params && req.params.id) {
        await Category.findById(req.params.id)
            .then(data => {
                res.status(200).send({amount: data.amount});
            }).catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

module.exports = {
    createCategory,
    getCategory,
    getVehiclesByCategory,
    getCategoryAmount
};