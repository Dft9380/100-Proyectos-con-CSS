const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
let active = false;

function startAnimation() {
	
	!active ? activateMenu() : deActivateMenu();
	
}

function activateMenu() {
	first.classList.add("firstAdd")
	second.classList.add("secondAdd")
	third.classList.add("thirdAdd")
	
	first.classList.remove("firstRemove")
	second.classList.remove("secondRemove")
	third.classList.remove("thirdRemove")
	
	active = true;
}

function deActivateMenu() {
	first.classList.remove("firstAdd")
	second.classList.remove("secondAdd")
	third.classList.remove("thirdAdd")
	
	first.classList.add("firstRemove")
	second.classList.add("secondRemove")	
	third.classList.add("thirdRemove")
	
	active = false;
}