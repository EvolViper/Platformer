var menuState = {

    create: function() {
    	var nameLogo = game.add.image(750, 350, 'logo', 'assets/melolontha.png')
        var nameLabel = game.add.text(750, game.world.height - 550, "START", {font: "30px Proxima Nova", fill: "#ffffff"});
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        wkey.onDown.addOnce(this.start, this);
        game.input.onDown.add(this.start, this);
    },

    start: function() {
        game.state.start("play");
    }
};
