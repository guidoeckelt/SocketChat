/**
 * Created by Guido on 25.09.2016.
 */
function LoginCheckDto(username){
    this.username = username;
}

function LoginDto(username){
    this.username = username;
}

function JoinLobbyDto(joiningLobby) {
    this.joiningLobby = joiningLobby;

}
function LeaveLobbyDto(leavingLobby) {
    this.leavingLobby = leavingLobby;

}
function SwitchLobbyDto(leavingLobby, joiningLobby) {
    this.joiningLobby = joiningLobby;
    this.leavingLobby = leavingLobby;
}

function LobbyMessageDto(username, content, lobby){
    this.username = username;
    this.content = content;
    this.lobby = lobby;
}