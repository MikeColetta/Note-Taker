const storedNotes = require('../db/db.json');

// let i = storedNotes[i]

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(storedNotes));

     app.post('/api/notes', (req, res) => {
       storedNotes.push(req.body);
       res.json(true)
     });

    //  app.delete(`api/notes/${storedNotes[i].id}`, (req, res) => {
    //      storedNotes.splice(req.body, 1)
    //  });

}