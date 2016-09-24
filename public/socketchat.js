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

    self.sendMessage= function () {
        var message = { "user": self.user(), "content": self.messageContent()};
        socket.emit('chat message',message);
    };

    self.init = function(){
        socket = io();
        // Add a connect listener
        socket.on('connect', function(socket) {
            console.log('Connected!');
        });
    };

}

$(document).ready(function(){
    viewmodel = new SocketChatViewModel();
    ko.applyBindings(viewmodel);
    viewmodel.init();
});