module.exports = {

    User : function(socketValue){
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


        socket.on('chat message', function(messageDTO){
            //OnNewMessage(messageDTO);
        });
    },
    Lobby : function(nameValue){
        var self = this;

        var name = nameValue;
        var userList = new Array();

        self.add = function (joinedUser) {
            userList.push(joinedUser);
            for(var user of userList){
                if(user != joinedUser){
                    user.OnUserJoined(joinedUser);
                }
            }
        };
        self.remove = function (leftUser) {
            userList.splice(userList.indexOf(leftUser),1);
            for(var user of userList){
                if(user != leftUser){
                    user.OnUserLeft(leftUser);
                }
            }
        };

        self.OnMessageReceived = function (message) {
            for(var user of userList){
                user.OnMessageReceived(messageDto);
            }
        };

        self.getName = function(){ return name; };

        self.setName = function(value){ name = value;};
    }

};