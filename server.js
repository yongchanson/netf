const express = require('express');
const path = require('path');


let initial_path = path.join(__dirname, "movie");

let app = express();
// let person = express.Router();

app.use(express.static(initial_path));


app.get("/:id[a-z]", (req, res) => {
    res.sendFile(path.join(initial_path, "person.html"));
})

app.get('/:id[0-9]', (req, res) => {
    res.sendFile(path.join(initial_path, "detail.html"));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.use((req, res) => {
    res.json("404 Not Found!");
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`listenting on http://localhost:${PORT}`);
})

