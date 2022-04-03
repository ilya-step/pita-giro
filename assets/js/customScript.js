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


// Попап
p = $('.popup__overlay')
$('.popup__toggle').click(function () {
	p.addClass('_active')
})
p.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p.removeClass('_active')
})

// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
let selector2 = document.querySelector('input[type="tel"]');
selector2.addEventListener('input', function () {
	const re = /^\d*(\.\d+)?$/
});


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
		margin: 10, //Отступ от картино если выводите больше 1
		nav: true, //Включил навигацию
		dots: false, //Отключил точки
		smartSpeed: 1000, //Время движения слайда
		checkVisible: false,
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
// слайдер отзывы
$(document).ready(function () {
	$(".owl-carousel-feed").owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		nav: true, //Включил навигацию
		dots: false, //Отключил точки
		smartSpeed: 1000, //Время движения слайда
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			700: {
				items: 2
			},
			900: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
});

// Аккордион с вопросами
$('.accordion').accordion({
	heightStyle: 'content',
	active: 1,
	header: '> .accordion-item > .accordion-header'
});

// квиз
var quizCounter = 1;
var qiuzButtons = document.getElementsByClassName("quiz-btn");
var l;
var answers1 = document.querySelector(".answers1");
var answers2 = document.querySelector(".answers2");
var answers3 = document.querySelector(".answers3");
var answers4 = document.querySelector(".answers4");
var answers5 = document.querySelector(".answers5");
var questCounter = document.querySelector(".quest-counter");
var answers4 = document.querySelector(".answers4");
var question = document.querySelector(".question");
var progressLine = document.querySelector(".progress-line");
var quizButtons = document.querySelector(".quiz-buttons");
for (l = 0; l < qiuzButtons.length; l++) {
	qiuzButtons[l].addEventListener("click", function () {
		if (this.classList.contains("_prev")) {
			// кнопка назад
			if (quizCounter == 2) {
				quizCounter--;
				answers2.classList.remove("show");
				answers1.classList.add("show");
				questCounter.innerHTML = "Вопрос 1 из 4";
				question.innerHTML = "1. Куда вы хотите заказать шторы?";
				progressLine.style.width = "25%";
				return;
			};
			if (quizCounter == 3) {
				quizCounter--;
				answers3.classList.remove("show");
				answers2.classList.add("show");
				questCounter.innerHTML = "Вопрос 2 из 4";
				question.innerHTML = "2. Сколько окон хотите оформить?";
				progressLine.style.width = "50%";
				return;
			};
			if (quizCounter == 4) {
				quizCounter--;
				answers4.classList.remove("show");
				answers3.classList.add("show");
				questCounter.innerHTML = "Вопрос 3 из 4";
				question.innerHTML = "3. Какой вид оформления Вас интересует?";
				progressLine.style.width = "75%";
				return;
			};
		} else {
			// кнопка вперёд
			if (quizCounter == 1) {
				quizCounter++;
				answers1.classList.remove("show");
				answers2.classList.add("show");
				questCounter.innerHTML = "Вопрос 2 из 4";
				question.innerHTML = "2. Сколько окон хотите оформить?";
				progressLine.style.width = "50%";
				return;
			};
			if (quizCounter == 2) {
				quizCounter++;
				answers2.classList.remove("show");
				answers3.classList.add("show");
				questCounter.innerHTML = "Вопрос 3 из 4";
				question.innerHTML = "3. Какой вид оформления Вас интересует?";
				progressLine.style.width = "75%";
				return;
			};
			if (quizCounter == 3) {
				quizCounter++;
				answers3.classList.remove("show");
				answers4.classList.add("show");
				questCounter.innerHTML = "Вопрос 4 из 4";
				question.innerHTML = "4. Какой тип штор вас интересует?";
				progressLine.style.width = "95%";
				return;
			};
			if (quizCounter == 4) {
				quizCounter++;
				answers4.classList.remove("show");
				answers5.classList.add("show");
				questCounter.innerHTML = "Расчет пройден на 100%";
				question.innerHTML = "";
				progressLine.style.width = "100%";
				quizButtons.classList.remove("show");
				document.querySelector(".quiz__info").style.display = "none";
				document.querySelector(".win-bg").style.display = "block";
				document.querySelector(".quiz__body").classList.add("win");
				return;
			};
		}
	});
}