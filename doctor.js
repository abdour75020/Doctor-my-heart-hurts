var rond = document.querySelector("#rouge");
var noir = document.querySelector(".type2");

rond.addEventListener("click", function(){
	document.body.classList.toggle("red");
	alert("Tu a cliqué sur mon épaule, ca fait très mal!!");
	

});

noir.addEventListener("click", function(){
	alert("Ca ce n'est pas l'épaule, tu t'es trompé lalalerre !!!");
})