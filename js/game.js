var winW = document.body.offsetWidth;           
var winH = window.innerHeight; 
if (window.innerHeight < 900) winH = window.innerHeight;
else winH = 900;
if (window.innerWidth < 1600) winW = window.innerWidth;
else winW = 1600;
console.log(winH);
console.log(winW);

//var game = new Phaser.Game(winW, winH, Phaser.AUTO, "container")
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "container")

game.state.add("boot", bootState);
game.state.add("load", loadState);
game.state.add("menu", menuState);
game.state.add("play", playState);
game.state.add("win", winState);

game.state.start("boot");