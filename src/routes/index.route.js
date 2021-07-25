const { Router } = require('express');
const router = Router();
const {renderIndex, renderMenu, renderContact, renderReservation} = require('../controllers/index.controller');

router.get('/', renderIndex);
router.get('/menu', renderMenu);
router.get('/contact', renderContact);
router.get('/reservation', renderReservation);

module.exports = router;

