const { Router } = require('express');
const router = Router();
const {renderAdmin, renderLoginForm, signin, logout} = require('../controllers/admin.controller');
const { isAuthenticated } = require ('../helpers/auth');

// Admin Views
router.get('/admin', isAuthenticated, renderAdmin);
router.get('/admin/signin', renderLoginForm);
router.post('/admin/signin', signin);
router.get('/admin/logout', logout);

module.exports = router;