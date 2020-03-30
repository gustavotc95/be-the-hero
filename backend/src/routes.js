const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routers = express.Router();

routers.post('/sessions', SessionController.create);

routers.get('/ongs', OngController.index);
routers.post('/ongs', OngController.create);

routers.get('/profile', ProfileController.index);

routers.get('/incidents', IncidentController.index);
routers.post('/incidents', IncidentController.create);
routers.delete('/incidents/delete/:id', IncidentController.delete);


module.exports = routers
