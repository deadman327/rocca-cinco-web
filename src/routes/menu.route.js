const { Router } = require('express');
const router = Router();
const { renderFoodForm, createNewFood, renderMenu, renderEditForm, updateFood, deleteFood } = require('../controllers/menu.controller');


// New food
router.get('/menu/add', renderFoodForm);
router.post('menu/new-food', createNewFood);

// Get all foods
router.get('/menu', renderMenu);

// Edit food
router.get('/menu/edit/:id', renderEditForm);
router.put('/menu/edit-food/:id', updateFood);

// Delete food
router.delete('/menu/delete/:id', deleteFood);

module.exports = router;