/**
 * Created by Guido on 23.09.2016.
 */
var viewmodel;
function SocketChatViewModel(){
    var self = this;

    //Private
    var socket;

    //Public - Bindings
    self.messages = ko.observableArray();

    self.user = ko.observable();
    self.messageContent = ko.observable();

    self.login = function(){

    };

    self.joinLobby = function(){
        socket.emit('lobby join',message);
    };
    self.leaveLobby = function(){
        socket.emit('lobby leave',message);
    };
    self.sendLobbyMessage= function () {
        var message = { "user": self.user(), "content": self.messageContent()};
        socket.emit('lobby message',message);
    };

    self.init = function(){
        socket = io();
        // Add a connect listener
        socket.on('connect', function(socket) {
            console.log('Connected!');
        });
        socket.on('disconnect',function () {
            console.log('Disconnected!');
        })
    };

}

$(document).ready(function(){
    viewmodel = new SocketChatViewModel();
    ko.applyBindings(viewmodel);
    viewmodel.init();
});