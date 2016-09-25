/**
 * Created by Guido on 23.09.2016.
 */

// init project
var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var io = require('socket.io')(http);

var User = require("./lib/user");
var Lobby = require("./lib/lobby");

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// listen for requests :)
var listener = http.listen(3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});

//Socket Chat View
var socketChatHtml = __dirname+'/views/socketchat.html';
app.get("/", function (request, response) {
  response.sendFile(socketChatHtml);
});

var users = new Array();
var lobbys = new Array();

//Socket Connections
io.on('connection', function(socket){
    OnConnect(socket);
});

lobbys.push(new Lobby("Home"));

function OnConnect(socket){
    console.log('a socket connection established');
    var user = new User(socket);
    users.push(user);
    socket.on('login',function(loginDTO){

    });
    socket.on('lobby join',function(lobbyJoinDTO){

    });
    socket.on('lobby leave',function(lobbyLeaveDTO){

    });
    socket.on('lobby message', function(messageDTO){
        //OnNewMessage(messageDTO);
        console.log(messageDTO.user+': '+messageDTO.content);
    });
    socket.on('user rename',function(userRenameDTO){

    });
    socket.on('disconnect', function(){
        console.log('a socket connection is closed');
        users.splice(users.indexOf(user),1);
    });
}

function OnNewMessage(lobby, message){
    console.log(message.user +': '+message.content);
}