var bootState = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        game.scale.refresh();
         
    },
    
    preload: function() {
        game.load.image('loadBar', 'assets/progress_bar.png');    
    },
    
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start("load");
        
    }
};