var loadState = {
    preload: function() {
        var loadingLabels = game.add.text(80, 150, "loading...", {font: "30px Courier", fill: "#ffffff"});
        game.load.image('sky', 'assets/sky.png');
        game.load.image('background', 'assets/background.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('platform1', 'assets/platform1.png');
        game.load.image('platform2', 'assets/platform2.png');
        game.load.image('platform3', 'assets/platform3.png');
        game.load.image('star', 'assets/star.png');
        game.load.image('tree', 'assets/tree.png');
        game.load.image('strawberry', 'assets/strawberry.png');
        game.load.image('groundSprite', 'assets/ground2.png');
        game.load.spritesheet('monster', 'assets/sprites32.png', 214, 235);
    },
    
    create: function() {
        game.state.start("menu");
    }
};