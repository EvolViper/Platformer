var loadState = {
    preload: function() {
        game.stage.backgroundColor = "#2A4480";
        
        var loadingLabels = game.add.text(80, 150, "loading...", {font: "30px Courier", fill: "#ffffff"});
        var loadingBar = game.add.sprite(game.world.centerX, game.world.centerY, "loadBar");
        loadingBar.anchor.setTo(0.5);
        game.load.setPreloadSprite(loadingBar);
        
        game.load.image('background', 'assets/background.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('platform1', 'assets/platform1.png');
        game.load.image('platform2', 'assets/platform2.png');
        game.load.image('platform3', 'assets/platform3.png');
        game.load.image('tree', 'assets/tree.png');
        game.load.image('groundSprite', 'assets/ground2.png');
        game.load.spritesheet('monster', 'assets/sprites32.png', 214, 235);
        game.load.spritesheet('mushroom', 'assets/mushroom_move.png', 143, 200, 32);
        game.load.spritesheet('mushroom_death', 'assets/mushroom_death.png', 238, 200, 22);
    },
    
    create: function() {
        game.time.events.add(400, this.startMenu, this);
    },
    
    startMenu: function() {
        game.state.start("menu");
    }
};