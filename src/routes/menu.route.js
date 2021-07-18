import {Router} from "express";
import {
    renderFoodForm,
    createNewFood,
    renderMenu,
    renderEditForm,
    updateFood,
    deleteFood,
} from "../controllers/menu.controller";
const router = Router();

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

export default router;