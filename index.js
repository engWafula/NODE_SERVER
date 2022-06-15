process.env.UV_THREADPOOL_SIZE=1


const express =require('express')
const crypto =require("crypto")
const cluster =require("cluster")
const app= express()
 //if file is executed in master mode
if(cluster.isMaster){
    //causes index.js to be executed but in child mode
  cluster.fork()
//   cluster.fork()
//   cluster.fork()
//   cluster.fork()
}
else{

    const start = Date.now();

app.get('/',(req,res)=>{
    crypto.pbkdf2('a','b',100000,521,'sha512',()=>{
        res.send("hello there")
      })
  
})

app.get('/fast',(req,res)=>{
    res.send('this is fast')
})

app.listen(3000)
}