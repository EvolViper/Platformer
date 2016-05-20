var menuState = {
    
    create: function() {
        var nameLabel = game.add.text(80, 80, "Menu State", {font: "50px Arial", fill: "#ffffff"});  
        var nameLabel = game.add.text(80, game.world.height - 80, "Press 'W' to start", {font: "25px Arial", fill: "#ffffff"});  
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        wkey.onDown.addOnce(this.start, this);
        game.input.onDown.add(this.start, this);
    },
    
    start: function() {
        game.state.start("play");
    }
};