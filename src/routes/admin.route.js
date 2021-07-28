const { Router } = require('express');
const router = Router();
const {renderAdmin, renderMenuA, renderSigninForm, signin, logout} = require('../controllers/admin.controller');


// Admin Views

router.get('/admin', renderAdmin);
router.get('/admin/menu', renderMenuA);

// Login admin
router.get('/admin/signin', renderSigninForm);
router.post('/admin/signin', signin);
router.get('/admin/logout', logout);

//router.get('admin/menu/edit)

module.exports = router;
