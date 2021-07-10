const router = require('express').Router();

router.get('/',(req, res) => {
    res.send('Rocca Cinco Restaurant')
});

router.get('/menu', (req, res) => {
    res.send('Menu del restaurante')
});

router.get('/contactanos', (req, res) => {
    res.send('Contacto del restaurante')
});

router.get('/reservacion', (req, res) =>{
    res.send('Reservaciones');
})

module.exports = router;

