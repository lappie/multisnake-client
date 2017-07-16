let wsUri = "ws://localhost:9001";
let websocket = null;

let userid = 1;
let connected = false;

function start() {
	websocket = new WebSocket(wsUri);

	websocket.onmessage = function(evt) { console.log('MESSAGE: ' + evt.data) };
	websocket.onclose = function(evt) {
		connected = false;
		document.getElementById('closed').style.display = 'block';
		window.setTimeout(start, 5000);
	};
	websocket.onopen = function(evt) {
		connected = true;
		document.getElementById('closed').style.display = 'none';
		document.getElementById('register-screen').style.display = 'block';
	}
}
start();

function send(msg) {
	if(connected)
		websocket.send(userid + "/" + msg);
}

function buttonAnimation(el) {
	el.style.backgroundColor = "#aaa";
}

function resetAnimation(el) {
	el.style.backgroundColor = "white";
}

function register() {
	let playername = document.getElementById("player-name").value;
	if(playername.length == 0)
		return;
	userid = playername;
	send("register");
	document.getElementById('register-screen').style.display = 'none';
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
