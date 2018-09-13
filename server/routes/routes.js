const Controllers = require('../controllers/controllers');

module.exports = (app) => {
    app.get('/tasks', (req, res) => {
        Controllers.tasks(req, res);
    });

    app.get('/tasks/:id', (req, res) => {
        Controllers.task_by_id(req, res);
    });

    app.post('/task', (req, res) => {
        Controllers.post(req, res);
    });

    app.put('/task/:id', (req, res) => {
        Controllers.put(req, res);
    });

    app.delete('/task/:id', (req, res) => {
        Controllers.delete(req, res);
    });
}