var bootState = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        game.scale.setScreenSize();
        game.scale.refresh();
    },

    preload: function() {
        game.load.image('loadBar', 'assets/platform3.png');
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start("load");
    }
};