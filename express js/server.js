const express = require('express');

const {studentHandle,errorhandle} = require('./middlewares')

const app = express(); // create express instance 

const PORT = 3000;

app.use(express.urlencoded({extended:true})) //recieve form data from user
app.use(express.json()) //json data from server

app.get('/', (req,res)=>{
     res.send('this is home route')
})
const studentInfo = (req,res)=>{
     const {name,roll} = req.body;
     res.status(200).send({
          name,
          roll
     })
}
app.post('/student-info',studentHandle,studentInfo)

app.get('/error', (req, res, next) => {
     const error = new Error('This is a custom error!');
     error.status = 400;
     next(error); 
 });
 
app.use(errorhandle)

app.listen(PORT,()=>{
     console.log(`server is running at ${PORT} `)
})
