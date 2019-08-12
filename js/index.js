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

