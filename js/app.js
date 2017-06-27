let wsUri = "ws://echo.websocket.org/";
let websocket = new WebSocket(wsUri);

websocket.onmessage = function(evt) { console.log('MESSAGE: ' + evt.data) };

function left() {
	console.log('left');
	websocket.send("left");
}
