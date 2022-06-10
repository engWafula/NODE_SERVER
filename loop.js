// node myfile.js
const pendingTimers=[]
const pendingOsTasks=[]
const pendingOperations=[]


// new tasks,timers and operations are recorded rom myFile
myFile.runContents()


function shouldContinue(){
    // any pending setTimeOut,setInterval,setImmediate
    // chwck two any pending os tasks like server listening to port
    //chwck 3: any pending long running operations (like fs module)
  return pendingOperations.length || pendingOsTasks.length || pendingTimers.length
}

//entire body executes in one tick
while(shouldContinue()){
    // 1) Here node first looks at pending timers and see if any functions are ready to be called

//2) node looks at pendingOsTaks and pendingOperations and calls relevant callbacks

//3) node pauses temporarily.Continue when..
//-a new Timer is complete
//-a new pendingOperation is done
//-a new pendingOsTask is done


// 4) look at pending timers call any setImmmediate

//5) handle any close "Events"
}


//exit back to terminal