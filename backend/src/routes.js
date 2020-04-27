const express            = require('express'); // pacote para lidar com requisições http

const OngController      = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController  = require('./controllers/ProfileController');
const SessionController  = require('./controllers/SessionController');

const routes = express.Router();

//routes.use(express.json());

/**
 * Session Routes
 */
routes.post('/sessions', SessionController.create);

/**
 * Ong Routes
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/**
 * Incidents Routes
 */
routes.get('/incidents', IncidentController.index);
routes.get('/profile', ProfileController.index);    // Especific ong Incidents list
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete); //id é um request param

module.exports = routes;


    //const query = request.query; //Query
    //const params = request.params; // Route Params
    //const body = request.body; // Request Body

    
    //return response.send('Hello World');
    // return response.json({
    //     evento: 'Semana Omnistack 11.0',
    //     aluno: 'Gabriel Rocha',
    //     idade: 28
    // });