const express = require('express')
const app = express()

const PORT = 4000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: "API Working"
    })
})


app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})