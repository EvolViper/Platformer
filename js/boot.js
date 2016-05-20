var bootState = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
         
    },
    
    preload: function() {
        game.load.image('loadBar', 'assets/platform3.png');    
    },
    
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start("load");
        
    }
};