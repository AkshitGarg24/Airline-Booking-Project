const { CityMiddleware } = require('../../../middlewares')
const { CityController } = require('../../../controllers')
const express = require('express')
const router = express.Router()

router
    .get('/', CityController.getAllCity)
    .get('/:id', CityController.getCity)
    .post('/', CityMiddleware.validateName, CityMiddleware.validateState, CityMiddleware.validateCountry, CityController.createCity)
    .patch('/:id', CityController.updateCity)
    .delete('/:id', CityController.deleteCity)

module.exports = router