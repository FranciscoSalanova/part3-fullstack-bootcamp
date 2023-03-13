const express = require('express')
const app = express()

let notes = [
    {
        "id": 1,
        "content": "Primera nota de la lista",
        "date": "2022-08-03T16:08:00.098Z",
        "important": true
    },
    {
        "id": 2,
        "content": "Segunda nota de la lista",
        "date": "2022-08-03T16:09:00.091Z",
        "important": true
    },
    {
        "id": 3,
        "content": "Tercera nota de la lista",
        "date": "2022-08-03T16:10:00.298Z",
        "important": true
    },
    {
        "id": 4,
        "content": "Cuarta nota de la lista",
        "date": "2022-08-03T16:11:00.299Z",
        "important": true
    }
]

// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     response.end(JSON.stringify(notes))
// })

app.get('/', (req, res) => {
    res.send(
        '<h1>Hello World!</h1>'
    )
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find((note) => note.id === id)
    if (note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter((note) => note.id !== id)
    res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
