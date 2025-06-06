"use strict";
// Introdução ao typescript - WEB API COM EXPRESS
// ENTRY POINT - indes.tx (compilando para -> index.js)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as express from 'express;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(3000, () => {
    console.log('*** API INICIADA NA PORTA 3000');
    console.log('*** PRESSIONE CTRL+C PARA FINALIZAR ***');
});
