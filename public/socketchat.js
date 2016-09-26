/**
 * Created by Guido on 23.09.2016.
 */
var viewmodel;
function SocketChatViewModel(){
    var self = this;

    //Private
    var socket;


    var canSend = function(){
        return (null != self.username() && null != self.username().trim() )
            && (null != self.lobbyMessageContent() && null != self.lobbyMessageContent().trim() )
    };


    //Public - Bindings
    //Login
    self.isLoginFormVisble  = ko.observable(false);
    self.loginName = ko.observable('');
    self.isLoginNameUnique = ko.observable(false);

    //Chat
    self.lobbys = ko.observableArray();
    self.lobbyMessages = ko.observableArray();
    self.lobbyUser = ko.observableArray();

    self.username = ko.observable();
    self.lobbyMessageContent = ko.observable();
    self.canSendLobbyMessage = ko.computed(function () {
        return canSend();
    });

    self.loginCheck = function(){

    };

    self.login = function(){
        var loginDto = new LoginDto(self.loginName());
        socket.emit('login', loginDto);
    };

    self.joinLobby = function(){
        socket.emit('lobby join',message);
    };
    self.leaveLobby = function(){
        socket.emit('lobby leave',message);
    };
    self.switchLobby = function(){
        socket.emit('lobby leave',message);
    };
    self.sendLobbyMessage= function () {
        var lobbyMessageDto = new LobbyMessageDto(self.username(), self.lobbyMessageContent());
        socket.emit('lobby message',lobbyMessageDto);
        self.lobbyMessageContent(null);
    };

    self.init = function(){
        socket = io();

        socket.on('connect', function(socket) {
            console.log('Connected!');
        });
        socket.on('disconnect',function () {
            console.log('Disconnected!');
        });

        socket.on('lobby message',function (lobbyMessageDto) {
            var lobbyMessage = {'username': lobbyMessageDto.username,'content':lobbyMessageDto.content};
            self.lobbyMessages.push(lobbyMessage);
        })
    };

}

$(document).ready(function(){
    viewmodel = new SocketChatViewModel();
    viewmodel.init();
    ko.applyBindings(viewmodel);
});