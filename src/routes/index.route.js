const { Router } = require('express');
const router = Router();
const {renderIndex, renderMenu} = require('../controllers/index.controller');

router.get('/', renderIndex);
router.get('/menu', renderMenu);


// router.get('/menu', (req, res) => {
//     res.render('menu');
// });

// router.get('/contactanos', (req, res) => {
//     res.render('contact');
// });

// router.get('/reservacion', (req, res) =>{
//     res.send('Reservaciones');
// })

module.exports = router;

