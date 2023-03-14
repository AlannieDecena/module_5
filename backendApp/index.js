
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


//-----------------------------------------------------------------------//
//app 1 port 1 need to listen (labEx) normally 4 digit port number eg 3001, 3002

// const app1 = express() 
// const port1 = 3001
// app1.use('/', express.static('public'))
// app1.listen(port1, () => {
//     console.log(`Example applistening at http://localhost:${port1}`)
//     })
    
// app1.use('/mytest', testRoute);

// const app2 = express() 
// const port2 = 3002
// app2.use('/', express.static('public'))
// app2.listen(port2, () => {
//     console.log(`Example applistening at http://localhost:${port2}`)
//     })
    
// app2.use('/mytest', testRoute);

// const app3 = express() 
// const port3 = 3003
// app3.use('/', express.static('public'))
// app3.listen(port3, () => {
//     console.log(`Example applistening at http://localhost:${port3}`)
//     })
    
// app3.use('/mytest', testRoute);

//-----------------------------------------------------------------------//