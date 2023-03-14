
const testRoute = require('./routes/myTestRoute');

const express = require('express')//require the express package
const app = express() //storing express package (app is our webserver)
const port = 3000 //set the port to 3000

app.use('/', express.static('public'))

// app.get('/', (req, res) => { //App.get is a binding for an endpoint.
//     res.send('Hello World!')
// })

// app.get('/test', (req, res) => {
//     res.send('This is a test')
//     })

app.use('/mytest', testRoute);


app.listen(port, () => {
console.log(`Example applistening at http://localhost:${port}`)
})

//app 1 port 1 need to listen (labEx) normally 4 digit port number eg 3001, 3002

//MVC, model, view is the controler, the controller is data handerler