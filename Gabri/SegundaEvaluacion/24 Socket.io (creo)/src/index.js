import  app  from './app.js';
import config from './config.js';
import {Server, Socket } from 'socket.io';


const {port} = config;


const server = app.listen(port,()=>{

    console.log(`listening on ${port}`);
});
const io = new Server(server);


io.on('connection',(socket) =>{
    console.log('A user has connected ');
    socket.on('disconnect',()=>{
        console.log('A user has disconnected');
    });
})

