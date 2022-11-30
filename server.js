#!/usr/bin/env node

import {roll} from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const app = express();
const args = minimist(process.argv.slice(2));

var sides = 6;
var dice = 2;
var rolls = 1;

app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
    res.send("200 OK");
    res.end();
});

app.get('/app/roll/', (req, res) => {
    sides = parseInt(req.params.sides);
    dice = parseInt(req.params.dice);
    rolls = parseInt(req.params.rolls);
    res.send(roll(sides, dice, rolls));
    res.end();
});

/*
app.get('/app/roll/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
    res.end();
});

 */

app.get('/app/roll/:sides/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), 2, 1));
    res.end();
});

app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
    res.end();
});

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
    res.end();
});

app.use((req, res) => {
    res.status(404).send("404 NOT FOUND");
    res.end();
})

console.log(app.listen(args.port || 5000));
