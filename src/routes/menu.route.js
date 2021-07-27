const { Router } = require('express');
const router = Router();
const { renderDishForm, createNewDish, renderMenu, renderEditForm, updateDish, deleteDish } = require('../controllers/menu.controller');


// New dish
router.get('/admin/menu/add', renderDishForm);
router.post('/admin/menu/new-dish', createNewDish);

// Get all foods
router.get('/menu', renderMenu);
// Edit dish
router.get('/menu/edit/:id', renderEditForm);
router.put('/menu/edit-dish/:id', updateDish);

// Delete dish
router.delete('/menu/delete/:id', deleteDish);

module.exports = router;