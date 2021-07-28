const { Router } = require('express');
const router = Router();
const { renderPromotionForm, createNewPromotion, renderPromotions, renderEditForm, updatePromotion, deletePromotion } = require('../controllers/promotions.controller');
const { isAuthenticated } = require ('../helpers/auth');
// New promotion
router.get('/promotions/add',isAuthenticated, renderPromotionForm);
router.post('/promotions/new-food',isAuthenticated, createNewPromotion);

// Get all promotions
router.get('/promotions', renderPromotions);

// Edit promotion
router.get('/promotions/edit/:id',isAuthenticated, renderEditForm);
router.put('/promotions/edit-food/:id',isAuthenticated, updatePromotion);

// Delete promotion
router.delete('/promotions/delete/:id',isAuthenticated, deletePromotion);

module.exports = router;