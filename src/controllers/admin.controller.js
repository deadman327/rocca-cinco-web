const adminCtrl = {};
const Menu = require('../models/Menu');

// Render Admin Panel
adminCtrl.renderAdmin = (req, res) =>{
    res.render('admin/admin');
};

// Render 
adminCtrl.renderMenuA = async (req, res) =>{
    const data = await Menu.find().lean();
    res.render('admin/menu/menu', {data});
};




module.exports = adminCtrl;