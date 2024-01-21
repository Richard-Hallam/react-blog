const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const sqlite3 =require('sqlite3');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const db = new sqlite3.Database('./PostsDb');
const jsonParser = bodyParser.json();

app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM table1'
    db.addListener(query, (err, rows) =>{
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        console.log('data fetched succsessfully', rows);
        res.json(rows);
    });
});

app.post('/api/newRecord', jsonParser, function(req, res) {
    const entry_id = req.body.entry_id;
    const name = req.body.name;
    console.log( name);
    const query = 'INSERT INTO table1 (entry_id, name) VALUES (?,?)'
    db.run(query, [entry_id, name], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      console.log(`Row inserted`);
      res.json({ message: 'Row inserted successfully' });
    })
  })
  
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  