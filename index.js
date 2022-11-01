const express = require('express')
const cors    = require('cors');
const app = express()
const port = process.env.PORT || 3000
const routerApi = require('./routes/index');
app.use(express.json());
app.use(cors());
routerApi(app);

app.get('/', (req, res) => {
  res.send('App up!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// 