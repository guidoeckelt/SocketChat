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
app.get("/", function (request, response){
    response.sendFile(socketChatHtml);
});

var users = new Array();
var lobbys = new Array();

//Socket Connections
io.on('connection', function(socket){
    OnSocketConnect(socket);
});

lobbys.push(new Lobby("Home"));

function OnSocketConnect(socket){
    console.log('a socket connection established');
    var user = new User(socket);
    users.push(user);
    socket.on('login check',function(loginCheckDTO){

    });
    socket.on('login',function(loginDTO){
        user.setName(loginDTO.username);

    });
    socket.on('lobby join',function(lobbyJoinDTO){

    });
    socket.on('lobby leave',function(lobbyLeaveDTO){

    });
    socket.on('lobby switch',function(lobbySwitchDTO){

    });
    socket.on('lobby message', function(lobbyMessageDTO){
        OnLobbyMessage(lobbyMessageDTO);
    });
    socket.on('user rename',function(userRenameDTO){

    });
    socket.on('disconnect', function(){
        OnDisconnect(user);
    });
}

function OnLobbyMessage(lobbyMessageDTO){
    console.log(lobbyMessageDTO.username+': '+lobbyMessageDTO.content);
    for(var user of users){
        user.onMessageReceived(lobbyMessageDTO);
    }
}

function OnDisconnect(user) {
    console.log('a socket connection is closed');
    users.splice(users.indexOf(user),1);
}