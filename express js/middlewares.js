

// student-info route middleware
const studentHandle = (req,res,next)=>{
     const {name,roll}= req.body;
     if(name && roll){
          next()
     }else{
          res.status(404).send('Name and Roll are required fields')
     }
}

// custom error handler middleware
const errorhandle =(err,req,res,next)=>{
     const Status = err.status || 500;

     res.status(Status).send({
          success : false,
          error : err.message || 'internal server error'
     })

}


module.exports= {
     studentHandle,
     errorhandle
}