// Introdução ao typescript - WEB API COM EXPRESS
// ENTRY POINT - indes.tx (compilando para -> index.js)

//import * as express from 'express;

import express from 'express';
import Rotas from './routes';

const app = express();

app.use(express.json());
app.use(Rotas);

app.listen(3000, () => {
    console.log('*** API INICIADA NA PORTA 3000');
    console.log('*** PRESSIONE CTRL+C PARA FINALIZAR ***');
});