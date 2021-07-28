const { Router } = require('express');
const router = Router();
const { renderDishForm, createNewDish, renderMenu, renderEditForm,renderMenuA, updateDish, deleteDish } = require('../controllers/menu.controller');
const { isAuthenticated } = require ('../helpers/auth');

// New dish
router.get('/admin/menu/add', isAuthenticated, renderDishForm);
router.post('/admin/menu/new-dish', isAuthenticated, createNewDish);

// Get all foods

router.get('/admin/menu', isAuthenticated, renderMenuA);
router.get('/menu', renderMenu);
// Edit dish
router.get('/admin/menu/edit/:id', isAuthenticated, renderEditForm);
router.put('/admin/menu/edit-dish/:id', isAuthenticated, updateDish);

// Delete dish
router.delete('/admin/menu/delete/:id', isAuthenticated, deleteDish);

module.exports = router;