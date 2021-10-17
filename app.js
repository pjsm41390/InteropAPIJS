const express = require('express')
const app = express()
const port = 3000

let options = {}
app.use(express.static("public",options))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})