#!/usr/bin/env node

import {roll} from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const app = express();
const args = minimist(process.argv.slice(2));

app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
    res.send("200 OK");
    res.end();
});

app.get('/app/roll/', (req, res) => {
    var sides = 6;
    var dice = 2;
    var rolls = 1;
    if(req.body.sides) {sides = req.body.sides;}
    if(req.body.dice) {sides = req.body.dice;}
    if(req.body.rolls) {sides = req.body.rolls;}
    res.send(roll(sides, dice, rolls));
});

app.get('/app/roll/:sides/', (req, res) => {
    res.send(roll(parseInt(req.body.sides), 2, 1));
    res.end();
});

app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), 1));
    res.end();
});

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));
    res.end();
});

app.use((req, res) => {
    res.status(404).send("404 NOT FOUND");
    res.end();
})

console.log(app.listen(args.port || 5000));
