const Vehicle = require('../model/VehicleModel');

// Crate New Vehicle
const createVehicle = async (req, res) => {
    if (req.body) {
        const vehicle = new Vehicle(req.body);
        await vehicle.save()
            .then(data => {
                res.status(200).send({data: data});
            }).catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

// Get all Vehicles
const getVehicle = async (req, res) => {
    await Vehicle.find({}).populate('categories', 'name description amount')
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error.message});
        });
}

//Get Categories by Vehicle
const getCategoryByVehicle = async (req, res) => {
    if (req.params && req.params.id) {
        await Vehicle.findById(req.params.id).populate('categories', 'name description amount')
            .then(data => {
                res.status(200).send({categories: data.categories});
            }).catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

//Get Vehicle Amount
const getVehicleAmount = async (req, res) => {
    if (req.params && req.params.id) {
        await Vehicle.findById(req.params.id)
            .then(data => {
                res.status(200).send({amount: data.amount});
            }).catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}



module.exports = {
    createVehicle,
    getVehicle,
    getCategoryByVehicle,
    getVehicleAmount
};