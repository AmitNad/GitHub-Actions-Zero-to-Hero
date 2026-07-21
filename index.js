import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8081

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello Amit you did great' })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`)
})