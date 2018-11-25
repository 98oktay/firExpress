import express from "express";
import twig from 'twig';
import Posts from './models/Posts';

const app = express();
app.set( 'view engine', 'twig' );

if (process.env.NODE_ENV === 'development') {
    app.use(require('easy-livereload')({
        watchDirs: [
            path.join(__dirname, '../public/css/'),
            path.join(__dirname, '../dist')
        ],
    }));
}

app.get("*", (req, res) => {

    Posts.getAll((datas)=>{
        res.render("home", {
            message : "Hello from firExpress : Express on Firebase!",
            datas:datas,
            url: req.url
        })
    });

});

export default app;