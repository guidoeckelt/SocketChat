/**
 * Created by Guido on 25.09.2016.
 */
function User(socketValue){
    var self = this;

    var socket = socketValue;
    var name;
    var lobby;


    self.OnUserJoined = function (user) {

    };
    self.OnUserLeft = function (user) {

    };

    self.OnMessageReceived = function(messageDTO){
        socket.emit(messageDTO);
    };

    self.getName = function(){ return name; };
    self.getSocket = function () { return socket; };

    self.setName = function(value){ name = value;};
    self.setLobby = function(value){ name = value;};

}
module.exports = User;