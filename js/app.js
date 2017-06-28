let wsUri = "ws://localhost:9000";
let websocket = new WebSocket(wsUri);

let userid = 1;

websocket.onmessage = function(evt) { console.log('MESSAGE: ' + evt.data) };

function send(msg) {
	websocket.send(userid + "/" + msg);
}

function buttonAnimation(el) {
	el.style.backgroundColor = "#aaa";
}

function resetAnimation(el) {
	el.style.backgroundColor = "white";
}
