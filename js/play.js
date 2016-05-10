var score = 0;
var scoreText;
var movementDirection;
var strawberries;
var myPlatforms;
var player = {};
var playerPosition;

var playState = {
    
    create: function() {
            //Для счетчика FPS
        game.time.advancedTiming = true;

        //Создание игрового мира 
        game.world.setBounds(0, 0, 4800, 900);

        game.physics.startSystem(Phaser.Physics.ARCADE);

        //Добавление фона

        for (var i = 0, stage = 0; i < 3; i++) {

            game.add.sprite(0 + stage, 0, 'background');
            stage += 1600;

        }



        game.add.sprite(0, 0, 'background');
        game.add.sprite(1600, 0, 'background');
        game.add.sprite(0, -5, "tree");
        game.add.sprite(620, 230, "tree");
        game.add.sprite(20, 470, "tree");
        game.add.sprite(120, 470, "tree");
        game.add.sprite(1020, 470, "tree");
        game.add.sprite(1400, 30, "tree");
        game.add.sprite(1200, 30, "tree");





        platforms = game.add.group();
        platforms.enableBody = true;
        var ground = platforms.create(0, 840, 'ground');
        ground.scale.setTo(16, 2);
        ground.body.immovable = true;

        //Добавление земли


        for (var i = 0, groundPosition = 0; i < 90; i++) {
            game.add.sprite(-3 + groundPosition, 838, "groundSprite");
            groundPosition += 109;

        }

        //Создание платформ

        myPlatforms = game.add.group();
        myPlatforms.enableBody = true;
        var platform1 = myPlatforms.create(500, 600, "platform2");
        platform1.body.immovable = true;
        platform1 = myPlatforms.create(-150, 350, "platform2");
        platform1.body.immovable = true;
        platform1 = myPlatforms.create(1200, 400, "platform3");
        platform1.body.immovable = true;
        platform1 = myPlatforms.create(2100, 300, "platform1");
        platform1.body.immovable = true;



        //player = game.add.sprite(900, 500, 'monster');
        player = game.add.sprite(900, 500, 'mushroom');
        player.test = 242;
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

        //player.animations.add('left', [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19], 30, true);
        //player.animations.add('right', [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], 30, true);
        player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 29, 30, 31], 30, true);
        player.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 30, true);


        stars = game.add.group();
        stars.enableBody = true;

        for (var i = 0; i < 24; i++)
        {
            //  Create a star inside of the 'stars' group
            var star = stars.create(i * 150, 0, 'star');

            //  Let gravity do its thing
            star.body.gravity.y = 200;

            //  This just gives each star a slightly random bounce value
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }
        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        strawberries = game.add.group();
        strawberries.enableBody = true;

        for (var i = 0; i < 3; i++)
        {
            //  Create a star inside of the 'stars' group
            var strawberry = strawberries.create(i * (Math.random() * 700), 0, 'strawberry');

            //  Let gravity do its thing
            strawberry.body.gravity.y = 200;

            //  This just gives each star a slightly random bounce value
            strawberry.body.bounce.y = 0.3;
        }

        cursors = game.input.keyboard.createCursorKeys();
    },
    
    update: function () {
        
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(player, myPlatforms);
        game.physics.arcade.collide(stars, myPlatforms);
        game.physics.arcade.collide(strawberries, myPlatforms);
        game.physics.arcade.collide(stars, platforms);
        game.physics.arcade.collide(strawberries, platforms);
        game.physics.arcade.overlap(player, stars, collect, null, this);
        game.physics.arcade.overlap(player, strawberries, collect, null, this);

        player.body.velocity.x = 0;


        if (cursors.left.isDown)
        {
            //  Move to the left

            player.body.velocity.x = -250;
            player.animations.play('left');
            movementDirection = "left";
        }
        else if (cursors.right.isDown)
        {
            //  Move to the right

            player.body.velocity.x = 250;
            player.animations.play('right');
            movementDirection = "right";
        }
        else {
            player.animations.stop();
            //if (movementDirection == "right") player.frame = 26;
            //else player.frame = 6;
            if (movementDirection == "right") player.frame = 0;
            else player.frame = 0;
        }

        if (cursors.up.isDown && player.body.touching.down)
        {
            player.body.velocity.y = -450;

        }


        //Движение камеры

        if (player.position.x > playerPosition && player.position.x > 600) {
            game.camera.x += 4;
        }

        else if (player.position.x < playerPosition && player.position.x < game.world.width - 900) {
            game.camera.x -= 4;
        }

       playerPosition = player.position.x;
       console.log(playerPosition);

        },
    
    render: function() {
        //Счетчик FPS
	   game.debug.text(game.time.fps, 100, 104, "#000000");
        game.debug.text(player.test, 100, 124, "#000000");
    }
    
};

function collect (player, trophy) {
    // Removes the trophy from the screen
    trophy.kill();
    score += 30;
    scoreText.text = 'Score: ' + score;
};
