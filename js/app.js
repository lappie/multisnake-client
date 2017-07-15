let wsUri = "ws://localhost:9001";
let websocket = new WebSocket(wsUri);

let userid = 1;

websocket.onmessage = function(evt) { console.log('MESSAGE: ' + evt.data) };
websocket.onclose = function(evt) { document.getElementById('closed').style.display = 'block'};

function send(msg) {
	websocket.send(userid + "/" + msg);
}

function buttonAnimation(el) {
	el.style.backgroundColor = "#aaa";
}

function resetAnimation(el) {
	el.style.backgroundColor = "white";
}

var body = document.getElementById("app");
body.onkeydown = function(e) {
    e = e || window.event;
		if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) >= 0) {
			let msg = e.code.substring(5).toLowerCase();
			send(msg);

			//Do animation:
			el = document.getElementById(msg);
			buttonAnimation(el);
		}
};

body.onkeyup = function(e) {
	e = e || window.event;
	if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) >= 0) {
		let msg = e.code.substring(5).toLowerCase();
		el = document.getElementById(msg);
		resetAnimation(el);
	}
}
