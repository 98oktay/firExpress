import express from "express";
import twig from 'twig';
import Posts from './models/Posts';

const app = express();
app.set( 'view engine', 'twig' );

app.get("*", (req, res) => {


    Posts.getAll((datas)=>{
        console.log(datas);

        res.render("home", {
            message : "Hello from Express on Firebase!",
            datas:datas,
            url: req.url
        })
    });

});

export default app;