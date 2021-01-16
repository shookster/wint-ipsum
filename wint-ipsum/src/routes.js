const loremIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");

const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});

    response.write(fileContents);
    response.end();
});

// Route generates the lorem ipsum text and reloads amodified index.html
router.post('/', (request, response) => {

})