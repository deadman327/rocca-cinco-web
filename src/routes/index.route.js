const { Router } = require('express');
const router = Router();
const {renderIndex} = require('../controllers/index.controller');

router.get('/', renderIndex);

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

