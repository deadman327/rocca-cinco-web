const Promotion = require('../models/Promotions');
const promotionCtrl = {};

promotionCtrl.renderPromotionForm = (req, res) => {
    res.render('admin/promotions/new-promotion');
};
promotionCtrl.createNewPromotion = (req, res) => {
    res.send("Hello");
};
promotionCtrl.renderPromotions = (req, res) => {
    res.render('admin/promotions/promotions');
};
promotionCtrl.renderEditForm = (req, res) => {
    res.render('admin/promotions/edit-promotion');
};
promotionCtrl.updatePromotion = (req, res) => {
    res.send("Hello");
};
promotionCtrl.deletePromotion = (req, res) => {
    res.send("Hello");
};

module.exports = promotionCtrl;