console.log("Hello");
/********************Navbar On Mobile**************************/
const openIcon = document.querySelector('.icon');
const linksWrapper = document.querySelector('.links-wrapper');
const backdrop = document.querySelector('.backdrop');
const closeIcon = document.querySelector('.close-btn');
const navLink = document.querySelector('.links');
const body = document.querySelector('body');

openIcon.addEventListener('click', () => {
	linksWrapper.classList.add('open');
	body.classList.add('no-scroll');
});

closeIcon.addEventListener('click', () => {
	linksWrapper.classList.remove('open');
	body.classList.remove('no-scroll');
});

backdrop.addEventListener('click', () => {
	linksWrapper.classList.remove('open');
	body.classList.remove('no-scroll');
});

navLink.addEventListener('click', () =>{
	linksWrapper.classList.remove('open');
	body.classList.remove('no-scroll');
});
/********************Navbar On Mobile-**************************/


/********************Year copyright footer-**************************/
const yearEvo = document.querySelector('.year');
const date = new Date();
const year = date.getFullYear();
yearEvo.innerHTML = year;
/********************Year copyright footer-**************************/
