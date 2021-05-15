const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on - listen for event
customEmitter.on('response',()=>{
    console.log('data receieved');
})

customEmitter.emit('response')
customEmitter.on('response',()=>{
    console.log('some other logic here');
})

customEmitter.emit('response')


