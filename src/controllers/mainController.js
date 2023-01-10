const path = require('path');

const controller = {
    index: (req,res) => {
        res.render(path.join(__dirname, "../views/home"));
    },

    login: (req,res) => {
        res.render(path.join(__dirname, '../views/login'))
    },

    register: (req,res) => {
        res.render(path.join(__dirname, '../views/register.ejs'))
    },
}

module.exports = controller;