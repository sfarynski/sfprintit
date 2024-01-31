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


let dotline = `<a class="dot" href="#"></a><br/>`;

function addDotLine(){
	let dots = document.querySelector(".dots")
	dots.innerHTML +=dotline
}

function addAllDots(){
	for (let i=0;i<slides.length;i++){
		addDotLine()
	}
}

function changeSelectedDot(dots){
	for (let i=0;i<dots.length;i++){
		dots[i].classList.remove("dot_selected")
		if (i===counter){
			dots[i].classList.add("dot_selected")
		}
	}
}
let counter=0


function lancerJeu() {
	addAllDots()
	let dot1=document.querySelector(".dots .dot")
	console.log(dot1)
	dot1.classList.add("dot_selected")
	let next = document.querySelector(".arrow_right")
	let prev = document.querySelector(".arrow_left")
	let imgSlide=document.querySelector(".banner-img")
	let allDots = document.querySelectorAll(".dots .dot")
	next.addEventListener("click",()=>{
		counter++
		if (counter>slides.length-1){
			counter=0
		}
		imgSlide.setAttribute("src", "./assets/images/slideshow/"+slides[counter].image)
		//console.log("Valeur de counter: "+counter)
		changeSelectedDot(allDots)
	})
	prev.addEventListener("click",()=>{
		counter--
		if (counter<0){
			counter=slides.length-1
		}
		imgSlide.setAttribute("src", "./assets/images/slideshow/"+slides[counter].image)
		//console.log("Valeur de counter: "+counter)
		changeSelectedDot(allDots)
		
	})

}
lancerJeu()