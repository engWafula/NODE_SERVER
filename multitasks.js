process.env.UV_THREADPOOL_SIZE=5

const https=require('https')
const fs= require('fs')
const crypto=require('crypto')

const start = Date.now();



function makeRequest(){
    https.request('https://www.google.com',res=>{
        res.on("data",()=>{})
        res.on("end",()=>{
            console.log(Date.now()-start)
        })
    }).end()
}


function doHash(){
    crypto.pbkdf2('a','b',100000,521,'sha512',()=>{
        console.log("Hash:",Date.now()-start)
      })
}


makeRequest()

fs.readFile("multitasks.js","utf-8",()=>{
   console.log("FS:",Date.now()-start)
})

doHash()
doHash()
doHash()
doHash()