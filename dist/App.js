'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _twig = require('twig');

var _twig2 = _interopRequireDefault(_twig);

var _Posts = require('./models/Posts');

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.set('view engine', 'twig');

app.get("*", function (req, res) {

    _Posts2.default.getAll(function (datas) {
        console.log(datas);

        res.render("home", {
            message: "Hello from Express on Firebase!",
            datas: datas,
            url: req.url
        });
    });
});

exports.default = app;