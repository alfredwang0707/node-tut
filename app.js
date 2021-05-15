const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on - listen for event
customEmitter.on('response',(name,id)=>{
    console.log(`data receieved user ${name} with id:${id}`);
})

customEmitter.emit('response')
customEmitter.on('response',()=>{
    console.log('some other logic here');
})

customEmitter.emit('response', 'alfred,', 34)


