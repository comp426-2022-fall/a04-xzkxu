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
    res.send(roll(6, 2, 1));
});

app.get('/app/roll/', (req, res) => {
    res.status(200).send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
});

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
