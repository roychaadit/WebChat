 
const bodyParser = require('body-parser');
 
const cors = require('cors')
  // environment variables
  const PORT          = 3000
  
  // npm packages
  const express                  = require('express')
  const { createServer }         = require('http')
  const { Server: SocketServer } = require('socket.io')
  const { expressCspHeader, INLINE, SELF } = require('express-csp-header')

  const app = express()




var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1";

const {ObjectId} = require('mongodb');

var path = require('path');
var public = path.join(__dirname, 'public');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())
 
app.post("/webchat/add",function(req,res) {
   console.log("getting add")
   
    var item = req.body
  
     MongoClient.connect(url, function(err, db) {
        if (err) throw err;
      
        var dbo = db.db("WebChat");
        console.log("Adding one to " , item)
        dbo.collection("messages").insertOne(item,function(err, result) {
          if (err) throw err;
          console.log(result);
  
          res.send(result)
          db.close();
        });
     });
  });

  app.get("/webchat/list/:code",function(req,res){
    var room = req.params.code
    console.log("Code is  " , room);
 
    MongoClient.connect(url, function(err, db) {
       if (err) throw err;  
      
       var dbo = db.db("WebChat");
       dbo.collection("messages").find({ room : room }).toArray(function(err2, availableCodes) {
   
            if (err2) throw err2;

            res.status(200).send(availableCodes)
            
            db.close();
 
       });
    });
 })




  const httpServer = createServer(app)
  const io = new SocketServer(httpServer,  {
   cors: {
     origin: 'http://localhost:8080',
     methods: ["GET", "POST","DELETE", "PUT", "PATCH"],
     credentials : true,
     transports: ['websocket', 'polling'],
     credentials: true
   },
   transports: ['websocket', 'polling'],
   credentials: true,
   allowEIO3: true

 })

//   app.use(expressCspHeader({
//     directives: {
//       'default-src': [SELF],
//       'script-src': [SELF, INLINE, 'https://cdnjs.cloudflare.com'],
//       'connect-src': [SELF],
//     }
//   }))

  // serve static files in the 'public' directory
  app.use('/', express.static(__dirname + '/public'))
  
  // socket.io functions
  io.on('connection', (socket) => {
   socket.on('chat', function(data) {
      io.emit(data.room, {msg : data.msg, from : data.from})
  });
})
  
  // start listening
  httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT} (HTTP + SOCKET.IO) ...`)
  }) 



 

// // server-side
// const io = require("socket.io")(http, {
//    cors: {
//      origin: "*",
//      methods: ["GET", "POST","PATCH","PUT","DELETE"],
//      allowedHeaders: ["*"],
//      credentials: false
//    },
//     transports : ['websocket'] 
   
//  });
  
 


//  console.log("Server Started Listening at  3000")
 
//Whenever someone connects this gets executed

// io.on('connection', function(socket) {
//     console.log('A user connected');
 
    //Whenever someone disconnects this piece of code executed
//     socket.on('disconnect', function () {
//        console.log('A user disconnected');
//     });
//  });



 
// app.listen(3000);


//   http.listen(3000, function() {
//     console.log('listening on *:3000');
//  });
