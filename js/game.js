var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "container");

game.state.add("boot", bootState);
game.state.add("load", loadState);
game.state.add("menu", menuState);
game.state.add("play", playState);
game.state.add("win", winState);

game.state.start("boot");
