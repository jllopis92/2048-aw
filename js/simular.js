function simularJuego(gameManager){

  this.mov = 0;

}
simularJuego.prototype.randomMov = function(){
	var numero=Math.floor(Math.random() * 4);
	
	if(numero==2){
		numero=1;
	}
	this.mov = numero;
	return this.mov;
}