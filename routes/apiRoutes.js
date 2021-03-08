const storedNotes = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(storedNotes));

    app.post('/api/notes', (req, res) => {
      storedNotes.push(req.body);
      res.json(true);
    })

    app.delete('api/notes', (req, res) => {
        storedNotes.splice(req.body, 1)
    })

}