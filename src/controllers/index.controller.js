const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

indexCtrl.renderMenu = (req, res) => {
    res.render('menu');
};

indexCtrl.renderContact = (req, res) => {
    res.render('contact');
};

indexCtrl.renderReservation = (req, res) => {
    res.render('reservation');
};

module.exports = indexCtrl;