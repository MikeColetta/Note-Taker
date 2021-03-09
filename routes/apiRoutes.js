const fs = require('fs');
const storedNotes = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(storedNotes));

    app.post('/api/notes', (req, res) => {
        storedNotes.push(req.body);
        try {
            fs.writeFileSync('./db/db.json', JSON.stringify(storedNotes, null, 4))
            res.json(true)
        }
        catch (error) {
            res.json(error)
        }
     });

    app.delete('/api/notes/:id', (req, res) => {
        let indexToDelete = -1
        storedNotes.forEach((note, index) => {
            if (note.id === req.params.id) {
                indexToDelete = index
            }
        })
        storedNotes.splice(indexToDelete, 1)
        try {
            fs.writeFileSync('./db/db.json', JSON.stringify(storedNotes, null, 4))
            res.json(true)
        }
        catch (error) {
            res.json(error)
        }
    });

}