import * as flsFunctions from "./modules/functions.js"

flsFunctions.isWebp()

window.onload = function () {
	const preloader = document.querySelector('.preloader')
	preloader.style.display = 'none'

	setTimeout(addActiveBg, 500)
	setTimeout(addActiveSlider, 3000)
	setTimeout(hideCar, 4500)
}

const image = document.querySelector('.content__image')
const bg = document.querySelector('.header__inner')
const title = document.querySelector('.content__title')
const carStroke = document.querySelector('.car-stroke')
const carSolid = document.querySelector('.car-solid')

function addActiveBg() {
	bg.classList.add('active')
}

function addActiveSlider() {
	image.classList.add('active')
	image.style.transition = '3s'
}

function showTitle() {
	title.style.transition = 'all 3s ease-in-out'
	title.style.opacity = '1'
	title.style.visibility = 'visible'
}

function addActiveCar() {
	carStroke.style.height = '0'
	carSolid.style.transition = '2.5s'
	carSolid.style.opacity = '1'
	carSolid.style.visibility = 'visible'
	carSolid.style.height = '100%'
}

function hideCar() {
	carStroke.style.transition = 'opacity 2.5s ease-in-out'
	carStroke.style.opacity = '0'
	setTimeout(showTitle, 500)
	setTimeout(addActiveCar, 2500)
}



