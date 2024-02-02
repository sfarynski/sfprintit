const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let dotline = `<a class="dot" href="#"></a><br/>`

let counter=0
let Slide=document.querySelector(".banner-img")
//let Dots = document.querySelectorAll(".dots .dot")

function addDotLine(){
	let dots = document.querySelector(".dots")
	dots.innerHTML +=dotline
}

function addAllDots(){
	for (let i=0;i<slides.length;i++){
		addDotLine()
	}
}

function changeSelectedDot(){
	let allDots = document.querySelectorAll(".dots .dot")
	for (let i=0;i<allDots.length;i++){
		allDots[i].classList.remove("dot_selected")
		if (i===counter){
			allDots[i].classList.add("dot_selected")
		}
	}
}
function changeTagLine(){
	let imgText = document.querySelector("#banner p")
	//console.log("Valeur de counter: "+counter)
	//console.log(slides[counter].tagLine)
	imgText.innerHTML=slides[counter].tagLine

}


function slideShow(){

	counter++
	if (counter>slides.length-1){
		counter=0
	}
	Slide.setAttribute("src", "./assets/images/slideshow/"+slides[counter].image)
	//console.log("Valeur de counter: "+counter)
	changeSelectedDot()
	changeTagLine()
}

function initDots(){
	//ajouter tous les dots pour chaque photo du slide
	addAllDots()
	let dot1=document.querySelector(".dots .dot")
	//selectionner le premier dot pour la première photo
	dot1.classList.add("dot_selected")
}

function lancerJeu() {
	initDots()
	let next = document.querySelector(".arrow_right")
	let prev = document.querySelector(".arrow_left")
	let imgSlide=document.querySelector(".banner-img")
	
	//affichage des dots en parti base 


	let myInterval = setInterval(slideShow, 4000);
	next.addEventListener("click",()=>{
		clearInterval(myInterval)
		counter++
		if (counter>slides.length-1){
			counter=0
		}
		imgSlide.setAttribute("src", "./assets/images/slideshow/"+slides[counter].image)
		//console.log("Valeur de counter: "+counter)
		changeSelectedDot()
		changeTagLine()
	})
	prev.addEventListener("click",()=>{
		clearInterval(myInterval)
		counter--
		if (counter<0){
			counter=slides.length-1
		}
		imgSlide.setAttribute("src", "./assets/images/slideshow/"+slides[counter].image)
		//console.log("Valeur de counter: "+counter)
		changeSelectedDot()
		changeTagLine()
		
	})
	
}
lancerJeu()