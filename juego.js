
// Bucle principal del juego

let fps = 25;

setInterval(function(){
	
	principal();
}, 1000/fps);

function principal(){
	
	borrarLienzo();
	gravedad();
	dibujarPersonaje()
};

let ancho = 500;

let alto = 250;

let lienzo, ctx;

function inicializa(){
	
	lienzo = document.getElementById("lienzo");
	
	ctx = lienzo.getContext("2d");
	
	cargaImagenes();
	
};


function borrarLienzo(){
	
	lienzo.width = ancho;
	
	lienzo.height = alto;
	
	
};



// función oyente para leer por teclado

document.addEventListener("keydown", function(evento){
	
	if (evento.keyCode == 32){
		console.log("Salta");
		
		saltar();
		
	}
	
});

// Empezando a trabajar con las imágenes

let img_personaje;

function cargaImagenes(){
	
	img_personaje = new Image();
	
	img_personaje.src = "imagenes/personaje1_der.png";
	
}

let personaje = {y : 150, vy: 0, gravity : 2, salto : 20, vymax : 9, saltando : false};

function dibujarPersonaje(){
	
	ctx.drawImage(img_personaje, 0, 0, 46, 46, 100, personaje.y, 50, 50);
}

// Estableciendo la mecanica del juego

function saltar(){
	
	personaje.saltando = true;
	
	personaje.vy = personaje.salto;
	
	
}

function gravedad(){
	
	if (personaje.saltando == true){
		
		if (personaje.y > 150){
			
			personaje.saltando = false;
			
			personaje.vy = 0;
			
			personaje.y = 150;
		}
		else{
			
		personaje.vy -= personaje.gravity;
		
		personaje.y -= personaje.vy;
			
			
		}
		
		
	}
	
	
}


	