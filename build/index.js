"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
express_1.application.get('/ping', (req, res) => {
    res.status(200).send("pong");
});
//# sourceMappingURL=index.js.map