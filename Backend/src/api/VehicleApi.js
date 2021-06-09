const express = require('express');
const router = express.Router();
const controller = require('../controller/VehicleController');

module.exports = function () {

    // http://localhost:8090/vehicle/create
    router.post('/create', controller.createVehicle);

    // http://localhost:8090/vehicle
    router.get('/', controller.getVehicle);

    // http://localhost:8090/vehicle/category/:id
    router.get('/category/:id', controller.getCategoryByVehicle);

    // http://localhost:8090/vehicle/amount/:id
    router.get('/amount/:id', controller.getVehicleAmount);

    return router;
};