// Скрипт появления фона Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	// проверка прокрутки
	if (prevScrollpos < 50) {
		document.getElementById("navbar").classList.remove('_active');
	} else {
		document.getElementById("navbar").classList.add('_active');
	}
	prevScrollpos = currentScrollPos;
}


// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelector('.menu-item');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});

	// закрыть меню при переходе на эелемент меню
	var menuItems = document.getElementsByClassName("menu-item");
	var j;
	for (j = 0; j < menuItems.length; j++) {
		menuItems[j].addEventListener("click", function () {
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});
	}
}


// аккордион
var acc = document.getElementsByClassName("categories-accordion");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.height) {
			panel.style.height = null;
		} else {
			panel.style.height = panel.scrollHeight + "px";
		}
	});
}


// плавная прокрутка по якорям
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

// слайдер
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 20, //Отступ от картино если выводите больше 1
		nav: true, //Включил навигацию
		dots: false, //Отключил точки
		smartSpeed: 1000, //Время движения слайда
		checkVisible: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1200: {
				items: 2
			}
		}
	});
});


// счетчик товара в карточке товара
let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let countPost = document.getElementById("num");
let number = 1;
buttonCountPlus.onclick = function () {
	if (number <= 100) {
		number++;
		count.innerHTML = number;
		countPost.value = number;
	}
};
buttonCountMinus.onclick = function () {
	if (number >= 2) {
		number--;
		count.innerHTML = number;
		countPost.value = number;
	}
}