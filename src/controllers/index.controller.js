const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};
indexCtrl.renderMenu = (req, res) => {
    res.render('menu');
};

module.exports = indexCtrl;