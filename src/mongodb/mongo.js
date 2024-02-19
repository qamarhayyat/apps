const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve HTML form to the client
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    // Extract form data
    const formData = req.body;

    // Connect to MongoDB
    mongodb.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;

        // Select database and collection
        const db = client.db('your_database_name');
        const collection = db.collection('your_collection_name');

        // Insert form data into MongoDB
        collection.insertOne(formData, (err, result) => {
            if (err) throw err;
            console.log('Form data inserted:', result.ops);
            res.send('Form submitted successfully!');
            client.close();
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
