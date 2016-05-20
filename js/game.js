var winW = document.body.offsetWidth;           
var winH = window.innerHeight; 
console.log(winH);
console.log(winW);

//var game = new Phaser.Game(winW, winH, Phaser.AUTO, "container")
var game = new Phaser.Game(1600, 900, Phaser.AUTO, "container")

game.state.add("boot", bootState);
game.state.add("load", loadState);
game.state.add("menu", menuState);
game.state.add("play", playState);
game.state.add("win", winState);

game.state.start("boot");