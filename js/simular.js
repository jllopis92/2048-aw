function simularJuego(gameManager){

  this.mov = 0;

}
simularJuego.prototype.randomMov = function(){
	this.mov = Math.floor(Math.random() * 4);
	return this.mov;
}