const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.con');
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 180) {
		header.style.backgroundColor = '#353570';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function Next(){
	switch(document.title){
		case "ADS-1":
			location.href="ads2.html";
			break;
		case "ADS-2":
			location.href="ads3.html";
		case "ADS-3":
			alert("On Last Page");
	}
}
function Previous(){
	switch(document.title){
		case "ADS-1":
			alert("On First Page");
			break;
		case "ADS-2":
			location.href="ads1.html";
		case "ADS-3":
			location.href="ads2.html";
	}
}