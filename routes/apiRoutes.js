const fs = require('fs');
const storedNotes = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(storedNotes));

    app.post('/api/notes', (req, res) => {
        storedNotes.push(req.body);
        try {
            console.log(storedNotes)
            fs.writeFileSync('./db/db.json', JSON.stringify(storedNotes, null, 4))
            res.json(true)
        }
        catch (error) {
            console.log(error)
            res.json(error)
        }
     });

    app.delete('/api/notes/:id', (req, res) => {
        console.log(req.params.id)
    });

}