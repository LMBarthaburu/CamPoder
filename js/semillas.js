function imgSlider(anything) {
	document.querySelector(".bolsa").src = anything;
}
function changeColor(color){
	const circle = document.querySelector(`.circle`);
	circle.style.background=color;
}
function changeText1() {
	document.getElementById(`texto-tipo`).innerHTML="Semillas de Maíz"
}
function changeText2() {
	document.getElementById(`texto-tipo`).innerHTML="Semillas de Sorgo"
}
function changeText3() {
	document.getElementById(`texto-tipo`).innerHTML="Semillas de Soja"
}
function changeColor2(color){
	const fondo = document.getElementById(`texto-tipo`);
	fondo.style.background=color;
}