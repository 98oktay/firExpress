import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

export default class Posts {

    static getAll( cb ){
        db.collection("posts").get().then((querySnapshot)=>{
            const datas = [];
            querySnapshot.forEach((doc)=>{
                const data = doc.data();
                data.id = doc.id;
                datas.push(data);
            });
            if(cb) {
                cb(datas);
            }
        });
    }

};