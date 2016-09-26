/**
 * Created by Guido on 25.09.2016.
 */

function Lobby(nameValue){
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

    self.onMessageReceived = function (messageDto) {
        for(var user of userList){
            user.onMessageReceived(messageDto);
        }
    };

    self.getName = function(){ return name; };

    self.setName = function(value){ name = value;};
}
module.exports = Lobby;