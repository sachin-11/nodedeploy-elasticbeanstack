const express = require('express')



const app = express();

app.get('/demo', (req, res) => {
    res.status(200).send('Hello this is secound deployment of elastic beanstack')
})

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`server is listen on port ${PORT}`)
})