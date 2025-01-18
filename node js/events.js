
const eventEmitter = require('events')

// event object 
const customEvent = new eventEmitter()

// event creating 
customEvent.on('hello',(content)=>{
     console.log(content)
})

// event calling 
customEvent.emit('hello','this is a first event')