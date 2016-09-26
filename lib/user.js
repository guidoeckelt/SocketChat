/**
 * Created by Guido on 25.09.2016.
 */
function User(socketValue){
    var self = this;

    var socket = socketValue;
    var name;
    var lobby;


    self.onUserJoined = function (user) {

    };
    self.onUserLeft = function (user) {

    };

    self.onMessageReceived = function(messageDTO){
        socket.emit('lobby message',messageDTO);
    };

    self.getName = function(){ return name; };
    self.getSocket = function () { return socket; };

    self.setName = function(value){ name = value;};
    self.setLobby = function(value){ name = value;};

}
module.exports = User;