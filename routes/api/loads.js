const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/loads')

// add routes
// Index /api/loads
router.get('/', dataController.index, apiController.index)
// Delete /api/loads/:id
router.delete('/:id', dataController.destroy, apiController.show)
// Update /api/loads/:id
router.put('/:id', dataController.update, apiController.show)
// Create /api/loads
router.post('/', dataController.create, apiController.show)
// Show /api/loads/:id
router.get('/:id', dataController.show, apiController.show)


module.exports = router
