const { Router } = require('express');
const router = Router();
const {renderAdmin, renderMenuA} = require('../controllers/admin.controller');


// Admin Views

router.get('/admin', renderAdmin);
router.get('/admin/menu', renderMenuA);

//router.get('admin/menu/edit)

module.exports = router;
