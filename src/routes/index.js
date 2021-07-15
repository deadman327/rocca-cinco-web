const router = require('express').Router();

router.get('/',(req, res) => {
    res.render('index');
});

router.get('/menu', (req, res) => {
    res.render('menu');
});

router.get('/contactanos', (req, res) => {
    res.render('contact');
});

router.get('/reservacion', (req, res) =>{
    res.send('Reservaciones');
})

module.exports = router;

