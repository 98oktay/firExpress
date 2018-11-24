'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _firebaseAdmin = require('firebase-admin');

var admin = _interopRequireWildcard(_firebaseAdmin);

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

var Posts = function () {
    function Posts() {
        _classCallCheck(this, Posts);
    }

    _createClass(Posts, null, [{
        key: 'getAll',
        value: function getAll(cb) {
            db.collection("posts").get().then(function (querySnapshot) {
                var datas = [];
                querySnapshot.forEach(function (doc) {
                    var data = doc.data();
                    data.id = doc.id;
                    datas.push(data);
                });
                if (cb) {
                    cb(datas);
                }
            });
        }
    }]);

    return Posts;
}();

exports.default = Posts;
;