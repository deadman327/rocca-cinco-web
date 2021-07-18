import {Router} from "express";
import {
    renderPromotionForm,
    createNewPromotion,
    renderPromotions,
    renderEditForm,
    updatePromotion,
    deletePromotion,
} from "../controllers/promotions.controller";
const router = Router();

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

export default router;