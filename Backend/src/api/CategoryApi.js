const express = require('express');
const router = express.Router();
const controller = require('../controller/CategoryController');

module.exports = function () {

    // http://localhost:8090/category/create
    router.post('/create', controller.createCategory);

    // http://localhost:8090/category
    router.get('/', controller.getCategory);

    // http://localhost:8090/category/vehicle/:id
    router.get('/vehicle/:id', controller.getVehiclesByCategory);

    // http://localhost:8090/category/amount/:id
    router.get('/amount/:id', controller.getCategoryAmount);

    return router;
};