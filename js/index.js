// Your code goes here


// have our nav links change when we hover over them
// (yes, we could have done this just by using css!)
const navEnter = event => {
	event.target.classList.add('hover');
};

const navLeave = event => {
	event.target.classList.remove('hover');
};

const navList = document.querySelectorAll('.nav-link');

navList.forEach(element => {
	element.addEventListener('mouseenter', navEnter);
	element.addEventListener('mouseleave', navLeave);
});


// how about if we click on a paragraph, it changes to zapf-dingbats and back
// not sure about correct font family name to use for Zapf, though
const paraList = document.querySelectorAll('p');

paraList.forEach(element => {
	element.addEventListener('click', event => {
		event.target.classList.toggle('zap');
	});
});


// apply these to the whole document...

// log every key press the user makes
document.addEventListener('keydown', event => {
	console.log(`You pressed: ${event.key}`);
});


// complain if the user double-clicks on the page
document.addEventListener('dblclick', event => {
	alert(`Ouch! ${event.target} says stop clicking on me!`);
});


// let's make the scroll-bar do something freaky
// randomly change the color as we scroll on the page
const html = document.querySelector('html');

window.addEventListener('scroll', event => {
	let red = Math.floor(Math.random()*256);
	let green = Math.floor(Math.random()*256);
	let blue = Math.floor(Math.random()*256);
	html.style.backgroundColor = `rgb(${red},${green},${blue})`;
});


