var bootState = {
    preload: function() {
        game.load.image('loadBar', 'assets/platform3.png');    
    },
    
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start("load");
    }
};