const Menu = require('../models/Menu');
const menuCtrl = {};

menuCtrl.renderFoodForm = async (req, res) => {
    res.send("Hello");
};
menuCtrl.createNewFood = (req, res) => {
    res.send("Hello");
};
menuCtrl.renderMenu = async (req, res) => {
    const dishes = await Menu.find();
    res.status(200).json(dishes);
};
menuCtrl.renderEditForm = (req, res) => {
    res.send("Hello");
};
menuCtrl.updateFood = (req, res) => {
    res.send("Hello");
};
menuCtrl.deleteFood = (req, res) => {
    res.send("Hello");
};

module.exports = menuCtrl;