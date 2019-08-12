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

