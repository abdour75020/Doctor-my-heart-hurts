var rond = document.querySelector("#rouge");
var noir = document.querySelector("#haut1");
var text = document.querySelector("#epaule");
var haut = document.querySelector("#up");
var milieu = document.querySelector("#milieu");
var bas = document.querySelector("#bas");
var pied = document.querySelector("#doigt");

rond.addEventListener("mouseover", function(){
	document.body.classList.toggle("red");
	text.innerHTML = "L'EPAULE : L'épaule (nom féminin) est la région morphologique se situant à la jonction du tronc avec le membre supérieur. Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d'orienter le membre supérieur dans lespace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l'environnement situé à sa portée.";

});
rond.addEventListener("mouseout", function(){
    	text.innerHTML = "";
	document.body.classList.remove("red");
});

noir.addEventListener("mouseover", function(){
	text.innerHTML = "Le coude (ou articulation olécranienne) est la partie du membre supérieur située entre le bras et l'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou fosse cubitale). C'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l'avant-bras. Il unit ainsi trois os entre eux : le radius, l'ulna (cubitus) et l'humérus.";
	document.body.classList.toggle("blue");
});

noir.addEventListener("mouseout", function(){
     text.innerHTML = "";
	document.body.classList.remove("blue");
	
});

haut.addEventListener("mouseover", function(){
text.innerHTML = "Le poignet est une région du membre supérieur située entre la main et l'avant-bras, et contenant le carpe. Élément-clé pour le fonctionnement de la main, il permet les mouvements (c'est-à-dire les changements de place et d’orientation) de la main par rapport à l’avant-bras, transmet les forces appliquées de la main à l’avant-bras, permet d'adapter la capacité de flexion-extension maximale des doigts et de la préhension."
document.body.classList.toggle("blue");
});

haut.addEventListener("mouseout", function(){
text.innerHTML = "";
document.body.classList.remove("blue");

});

milieu.addEventListener("mouseover", function(){
text.innerHTML ="La hanche ou articulation coxo-fémorale est une articulation (énarthrose) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os : l'os iliaque et le fémur."
document.body.classList.toggle("blue");	
});

milieu.addEventListener("mouseout", function(){
text.innerHTML = "";
document.body.classList.remove("blue");

});

bas.addEventListener("mouseover", function(){
text.innerHTML = "Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l'articulation fémoro-patellaire et la double articulation fémoro-tibiale."
document.body.classList.toggle("blue");
});

bas.addEventListener("mouseout", function(){
text.innerHTML = "";
document.body.classList.remove("blue");

});

pied.addEventListener("mouseover", function()
{
text.innerHTML = "Le pied est la partie distale du membre inférieur de l'homme. Il est relié à la jambe par l'articulation de la cheville. Il supporte le poids du corps en position debout et permet la locomotion."
document.body.classList.toggle("blue");
});

pied.addEventListener("mouseout", function(){
text.innerHTML = "";
document.body.classList.remove("blue");

});






