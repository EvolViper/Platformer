var menuState = {

    create: function() {
    	var nameLogo = game.add.image(game.world.centerX, game.world.centerY, 'logo')
        nameLogo.anchor.setTo(0.5);
        var nameLabel = game.add.text(game.world.centerX - 35, game.world.centerY + 150, "PRESS 'W' TO START", {font: "10px Proxima Nova", fill: "#ffffff"});
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        wkey.onDown.addOnce(this.start, this);
        game.input.onDown.add(this.start, this);
    },

    start: function() {
        game.state.start("play");
    }
};
