function addClass(element, className) {
	var stringToAdd = ' ' + className;
	element.className += stringToAdd;
};

function removeClass(element, className) {
	var classes = element.className.split(' ');
	var index = classes.indexOf(className)
	if (index > -1) {
		classes.splice(index);
	}
	element.className = classes.join(' ');
}

function hasClass(element, className) {
	return element.className.indexOf(className) > -1;
}

function getElement(name) {
	return document.getElementById(name);
}

var player = 0;
function handleClick(event) {
	var element = event.target;

	if (hasClass(element, "red")) {
		return
    }
    if (hasClass(element, "blue")) {
        return
    }

	if (player === 0) {
        addClass(element, "red")
    } else{
        addClass(element, "blue")
    }

	
	var turn 
	var notPlaying
	if (player === 0) {
		turn = getElement("player-blue")
		notPlaying = getElement("player-red")
	} else {
		turn = getElement("player-red")
		notPlaying = getElement("player-blue")
	}
    addClass (turn, "playing")
    removeClass (notPlaying, "playing")
	if (player === 0) {
		player = 1;
	} else {
		player = 0;
	}
} 

var elementsInClass = document.getElementsByClassName("square");
for (var i = 0; i < 9; i++) {
  var element = elementsInClass[i];
  element.addEventListener('click', handleClick);
}
