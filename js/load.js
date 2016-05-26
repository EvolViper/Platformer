var loadState = {
	preload: function() {
		game.stage.backgroundColor = "#15171C";

		var loadingLabels = game.add.text("LOADING...", {font: "30px Courier", align: "center", fill: "#ffffff"});
		var loadingBarOuter = game.add.sprite(game.world.centerX, game.world.centerY, "loadBarOuter")
		var loadingBar = game.add.sprite(game.world.centerX - 173.5, game.world.centerY - 21.7, "loadBar");
		loadingBarOuter.anchor.setTo(0.5);
		loadingBar.anchor.setTo(0.0);
		game.load.setPreloadSprite(loadingBar);

		game.load.audio('magntron', 'assets/magntron.mp3');
		//game.load.image('background', 'assets/background.png');
		game.load.image('mountains-back', 'assets/mountains-back.png');
		game.load.image('mountains-mid', 'assets/mountains-mid.png');
		game.load.image('cloud2', 'assets/cloud2.png');
		game.load.image('cloud3', 'assets/cloud3.png');
		game.load.image('ground', 'assets/platform.png');
		game.load.image('platform1', 'assets/platform1.png');
		game.load.image('platform2', 'assets/platform2.png');
		game.load.image('platform3', 'assets/platform3.png');
		game.load.image('tree', 'assets/tree.png');
		game.load.image('kit', 'assets/kit.png');
		game.load.image('groundSprite', 'assets/ground2.png');
		game.load.spritesheet('monster', 'assets/monster_run.png', 222, 240, 32);
		game.load.spritesheet('monster_attack', 'assets/monster_attack.png', 229, 272, 20);
		game.load.spritesheet('monster_run_attack', 'assets/monster_run_attack.png', 252, 272, 32);
        game.load.spritesheet('monster_death', 'assets/monster_death.png', 320, 240, 28);
		game.load.spritesheet('mushroom', 'assets/mushroom_move.png', 143, 200, 32);
		game.load.spritesheet('mushroom_death', 'assets/mushroom_death.png', 238, 200, 22);
		game.load.spritesheet('mushroom_attack', 'assets/mushroom_attack.png', 190, 200, 15);
	},

	create: function() {
		game.time.events.add(400, this.startMenu, this);
	},

	startMenu: function() {
		game.state.start("menu");
	}
};
