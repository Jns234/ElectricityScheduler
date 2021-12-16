const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const heaterId = 20
const ventilationId = 21
const boilerId = 22
var siteId = "c640";
const siteName = 'https://' + siteId + '.by.enlife.io';
const wizard = false;

app.get("/api/agatark", (req, res) => {
  console.log(req.body.id)
  
  res.status(200).send({
    id: id
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})