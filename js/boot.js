var bootState = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;
        game.scale.refresh();
    },

    preload: function() {
        game.load.image('loadBar', 'assets/pb2.png');
        game.load.image('loadBarOuter', 'assets/pb1.png');
        game.load.image('logo', 'assets/melolontha.png');
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start("load");
    }
};