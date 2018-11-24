import * as functions from 'firebase-functions';
import App from './App';

exports.firExpress = functions.https.onRequest(App);