const { Router } = require('express');
const router = Router();
const { renderPromotionForm, createNewPromotion, renderPromotions, renderEditForm, updatePromotion, deletePromotion } = require('../controllers/promotions.controller');

// New promotion
router.get('/menu/add', renderPromotionForm);
router.post('menu/new-food', createNewPromotion);

// Get all promotions
router.get('/menu', renderPromotions);

// Edit promotion
router.get('/menu/edit/:id', renderEditForm);
router.put('/menu/edit-food/:id', updatePromotion);

// Delete promotion
router.delete('/menu/delete/:id', deletePromotion);

module.exports = router;