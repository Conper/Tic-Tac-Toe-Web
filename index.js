
var turn = 0;
var w = 0;

window.addEventListener('resize', () => {
    const container = document.querySelector('.container');
    const content = document.querySelector('.content');
    
    const scaleFactor = 0.81;
    
    container.style.transform = `scale(${scaleFactor})`;
    content.style.transform = `scale(${1 / scaleFactor})`;
  });

function a(){
	if (document.getElementById("a").style.color != "red" && turn < 9 && w == 0){
	if (document.getElementById("a").style.color != "red" && turn % 2 == 0 && turn < 9){
	document.getElementById("a").innerHTML = "X";}
	else {document.getElementById("a").innerHTML = "O";}
	turn++;
	document.getElementById("a").style.color = "red";
	document.getElementById("a").style.textShadow = "2px 1px 1px black";}
	win();
}

function b(){
	if (document.getElementById("b").style.color != "red" && turn < 9 && w == 0){
	if (document.getElementById("b").style.color != "red" && turn % 2 == 0 && turn < 9){
	document.getElementById("b").innerHTML = "X";}
	else {document.getElementById("b").innerHTML = "O";}
	turn++;
	document.getElementById("b").style.color = "red";
	document.getElementById("b").style.textShadow = "2px 1px 1px black";}
	win();
}

function c(){
	if (document.getElementById("c").style.color != "red" && turn < 9 && w == 0){
	if (document.getElementById("c").style.color != "red" && turn % 2 == 0 && turn < 9){
	document.getElementById("c").innerHTML = "X";}
	else {document.getElementById("c").innerHTML = "O";}
	turn++;
	document.getElementById("c").style.color = "red";
	document.getElementById("c").style.textShadow = "2px 1px 1px black";}
	win();
}

function d(){
	if (document.getElementById("d").style.color != "red" && turn < 9 && w == 0){
	if (document.getElementById("d").style.color != "red" && turn % 2 == 0 && turn < 9){
	document.getElementById("d").innerHTML = "X";}
	else {document.getElementById("d").innerHTML = "O";}
	turn++;
	document.getElementById("d").style.color = "red";
	document.getElementById("d").style.textShadow = "2px 1px 1px black";}
	win();
}

function e(){
	if (document.getElementById("e").style.color != "red" && turn < 9 && w == 0){
	if (document.getElementById("e").style.color != "red" && turn % 2 == 0 && turn < 9){
	document.getElementById("e").innerHTML = "X";}
	else {document.getElementById("e").innerHTML = "O";}
	turn++;
	document.getElementById("e").style.color = "red";
	document.getElementById("e").style.textShadow = "2px 1px 1px black";}
	win();
}

function f(){
	if (document.getElementById("f").style.color != "red" && turn < 9 && w == 0){
	if (document.getElementById("f").style.color != "red" && turn % 2 == 0 && turn < 9){
	document.getElementById("f").innerHTML = "X";}
	else {document.getElementById("f").innerHTML = "O";}
	turn++;
	document.getElementById("f").style.color = "red";
	document.getElementById("f").style.textShadow = "2px 1px 1px black";}
	win();
}

function g(){
	if (document.getElementById("g").style.color != "red" && turn < 9 && w == 0){
	if (document.getElementById("g").style.color != "red" && turn % 2 == 0 && turn < 9){
	document.getElementById("g").innerHTML = "X";}
	else {document.getElementById("g").innerHTML = "O";}
	turn++;
	document.getElementById("g").style.color = "red";
	document.getElementById("g").style.textShadow = "2px 1px 1px black";}
	win();
}

function h(){
	if (document.getElementById("h").style.color != "red" && turn < 9 && w == 0){
	if (document.getElementById("h").style.color != "red" && turn % 2 == 0 && turn < 9){
	document.getElementById("h").innerHTML = "X";}
	else {document.getElementById("h").innerHTML = "O";}
	turn++;
	document.getElementById("h").style.color = "red";
	document.getElementById("h").style.textShadow = "2px 1px 1px black";}
	win();
}

function i(){
	if (document.getElementById("i").style.color != "red" && turn < 9 && w == 0){
	if (document.getElementById("i").style.color != "red" && turn % 2 == 0 && turn < 9){
	document.getElementById("i").innerHTML = "X";}
	else {document.getElementById("i").innerHTML = "O";}
	turn++;
	document.getElementById("i").style.color = "red";
	document.getElementById("i").style.textShadow = "2px 1px 1px black";}
	win();
}

function reload(){
	location.reload();
	
}

function win(){
	let a = document.getElementById("a").innerHTML;
	let b = document.getElementById("b").innerHTML;
	let c = document.getElementById("c").innerHTML;
	let d = document.getElementById("d").innerHTML;
	let e = document.getElementById("e").innerHTML;
	let f = document.getElementById("f").innerHTML;
	let g = document.getElementById("g").innerHTML;
	let h = document.getElementById("h").innerHTML;
	let i = document.getElementById("i").innerHTML;
	let won;
	
	if (turn % 2 == 0){
		document.getElementById("turn").innerHTML = "TURN: X";
		won = "Player O";
	}else{
		document.getElementById("turn").innerHTML = "TURN: O";
		won = "Player X";
		}
	
	if (turn == 9){
		document.getElementById("title").innerHTML = "DRAW";
		document.getElementById("a").style.color = "#99FFFF"; document.getElementById("a").style.textShadow = "3px 3px 1px #6666FF, 5px 5px 1px black";
		document.getElementById("b").style.color = "#99FFFF"; document.getElementById("b").style.textShadow = "3px 3px 1px #6666FF, 5px 5px 1px black";
		document.getElementById("c").style.color = "#99FFFF"; document.getElementById("c").style.textShadow = "3px 3px 1px #6666FF, 5px 5px 1px black";
		document.getElementById("d").style.color = "#99FFFF"; document.getElementById("d").style.textShadow = "3px 3px 1px #6666FF, 5px 5px 1px black";
		document.getElementById("e").style.color = "#99FFFF"; document.getElementById("e").style.textShadow = "3px 3px 1px #6666FF, 5px 5px 1px black";
		document.getElementById("f").style.color = "#99FFFF"; document.getElementById("f").style.textShadow = "3px 3px 1px #6666FF, 5px 5px 1px black";
		document.getElementById("g").style.color = "#99FFFF"; document.getElementById("g").style.textShadow = "3px 3px 1px #6666FF, 5px 5px 1px black";
		document.getElementById("h").style.color = "#99FFFF"; document.getElementById("h").style.textShadow = "3px 3px 1px #6666FF, 5px 5px 1px black";
		document.getElementById("i").style.color = "#99FFFF"; document.getElementById("i").style.textShadow = "3px 3px 1px #6666FF, 5px 5px 1px black";
		}
	
	if (a == b && a == c){
		document.getElementById("title").innerHTML = "Won " + won;
		document.getElementById("a").style.color = "yellow"; document.getElementById("a").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("b").style.color = "yellow"; document.getElementById("b").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("c").style.color = "yellow"; document.getElementById("c").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		w = 1;}
	if (d == e && d == f){document.getElementById("title").innerHTML = "Won " + won;
		document.getElementById("d").style.color = "yellow"; document.getElementById("d").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("e").style.color = "yellow"; document.getElementById("e").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("f").style.color = "yellow"; document.getElementById("f").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		w = 1;}
	if (g == h && g == i){document.getElementById("title").innerHTML = "Won " + won;
		document.getElementById("g").style.color = "yellow"; document.getElementById("g").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("h").style.color = "yellow"; document.getElementById("h").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("i").style.color = "yellow"; document.getElementById("i").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		w = 1;}
	
	if (a == d && a == g){document.getElementById("title").innerHTML = "Won " + won;
		document.getElementById("a").style.color = "yellow"; document.getElementById("a").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("d").style.color = "yellow"; document.getElementById("d").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("g").style.color = "yellow"; document.getElementById("g").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		w = 1;}
	if (b == e && b == h){document.getElementById("title").innerHTML = "Won " + won;
		document.getElementById("b").style.color = "yellow"; document.getElementById("b").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("e").style.color = "yellow"; document.getElementById("e").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("h").style.color = "yellow"; document.getElementById("h").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		w = 1;}
	if (c == f && c == i){document.getElementById("title").innerHTML = "Won " + won;
		document.getElementById("c").style.color = "yellow"; document.getElementById("c").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("f").style.color = "yellow"; document.getElementById("f").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("i").style.color = "yellow"; document.getElementById("i").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		w = 1;}
	
	if (a == e && a == i){document.getElementById("title").innerHTML = "Won " + won;
		document.getElementById("a").style.color = "yellow"; document.getElementById("a").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("e").style.color = "yellow"; document.getElementById("e").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("i").style.color = "yellow"; document.getElementById("i").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		w = 1;}
	if (c == e && c == g){document.getElementById("title").innerHTML = "Won " + won;
		document.getElementById("c").style.color = "yellow"; document.getElementById("c").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("e").style.color = "yellow"; document.getElementById("e").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		document.getElementById("g").style.color = "yellow"; document.getElementById("g").style.textShadow = "3px 3px 1px #FF0000, 5px 5px 1px black";
		w = 1;}
}