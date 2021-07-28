const adminCtrl = {};
const Menu = require('../models/Menu');
const passport = require('passport');

//const Admin = require('../models/Admin');

// Render Admin Panel
adminCtrl.renderAdmin = (req, res) =>{
    res.render('admin/admin');
};

// Render 
adminCtrl.renderMenuA = async (req, res) =>{
    const data = await Menu.find().lean();
    res.render('admin/menu/menu', {data});
};

// Login
adminCtrl.renderSigninForm = (req, res) =>{
    res.render('admin/login');
    
};
/*
adminCtrl.signin = (req, res) =>{
    //   res.render('admin/login');
    res.send('iniciar sesion');
};
*/
adminCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/admin/signin',
    successRedirect: '/admin'
    // Here Messengue of error
})

adminCtrl.logout = (req, res) =>{
    res.send('Sesión cerrada');
};






module.exports = adminCtrl;