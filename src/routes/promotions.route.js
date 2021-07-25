const { Router } = require('express');
const router = Router();
const { renderPromotionForm, createNewPromotion, renderPromotions, renderEditForm, updatePromotion, deletePromotion } = require('../controllers/promotions.controller');

// New promotion
router.get('/promotions/add', renderPromotionForm);
router.post('/promotions/new-food', createNewPromotion);

// Get all promotions
router.get('/promotions', renderPromotions);

// Edit promotion
router.get('/promotions/edit/:id', renderEditForm);
router.put('/promotions/edit-food/:id', updatePromotion);

// Delete promotion
router.delete('/promotions/delete/:id', deletePromotion);

module.exports = router;