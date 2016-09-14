var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render })

var player,
    cursors,
    water,
    sky,
    bubbles,
    death,
    music,
    baddies,
    totalBubbles = 0,
    health = 100,
    breath = 100

function preload() {
  game.load.audio('theme', 'assets/theme.ogg');
  game.load.audio('bubble-pop', 'assets/bubble_pop.ogg');
  game.load.image('sky', 'assets/sky.png')
  game.load.spritesheet('waters', 'assets/waters.png', 32, 400)
  game.load.spritesheet('swimmer', 'assets/swimmer.png', 32, 32)
  game.load.spritesheet('stingray', 'assets/stingray.png', 72, 40)
  game.load.spritesheet('jellyfish', 'assets/jellyfish.png', 32, 32)
  game.load.spritesheet('death', 'assets/explosion.png', 64, 64)
  game.load.spritesheet('bubble', 'assets/bubbles.png', 32, 32)
}

function create() {
  //  GAME SETTINGS
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.world.setBounds(0, 0, 1024, 8000)
    game.stage.backgroundColor = '#3090a3'

  // AUDIO
    music = game.add.audio('theme', 0.2, true, true);
    music.play();

  // SKY BACKGROUND
    sky = game.add.tileSprite(0, 0, 1024, 420, 'sky')
    game.physics.arcade.enable(sky)
    sky.enableBody = true
    sky.body.immovable = true

  //  WATER BACKGROUND
    water = game.add.tileSprite(0, 390, 1024, 24 * 16, 'waters', 32)
    water.animations.add('waves', [0, 1, 2, 3, 2, 1])
    water.animations.play('waves', 8, true)

  // PLAYER SETTINGS
    player = game.add.sprite(game.world.width/2, 432, 'swimmer')
    player.anchor.x = 0.5
    player.anchor.y = 0.5

    //  Player physics
    game.physics.arcade.enable(player)
    player.body.collideWorldBounds = true

    //  Our swimming animations, left, right, up, and down.
    player.animations.add('left', [0, 1, 2], 10, true)
    player.animations.add('up', [3, 4, 5], 10, true)
    player.animations.add('down', [6, 7, 8], 10, true)
    player.animations.add('right', [9, 10, 11], 10, true)

  // BADDIES SETTINGS
    baddies = game.add.group()
    baddies.enableBody = true
    game.time.events.loop(1500, spawnBaddies, this)

  // BUBBLES
    bubbles = game.add.group()
    bubbles.enableBody = true
    game.time.events.loop(1500, releaseBubbles, this)

  // BARS
    // Health
    var healthConfig = {
      width: 150,
      height: 10,
      x: 110,
      y: 40,
      bg: {
        color: '#073713'
      },
      bar: {
        color: '#14a238'
      },
      animationDuration: 200,
      flipped: false
    }
    this.myHealthBar = new HealthBar(this.game, healthConfig)
    this.myHealthBar.setFixedToCamera(true)

    // Breath
    var breathConfig = {
      width: 150,
      height: 10,
      x: 110,
      y: 55,
      bg: {
        color: '#072737'
      },
      bar: {
        color: '#1462a2'
      },
      animationDuration: 200,
      flipped: false
    }
    this.myBreathBar = new HealthBar(this.game, breathConfig)
    this.myBreathBar.setFixedToCamera(true)

  // CAMERA SETTINGS
    game.camera.follow(player)
    game.camera.setPosition(game.world.width/2 - game.camera.width/2, 0)

    game.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400)

}

function update() {
  // CONTROL SETTINGS
    cursors = game.input.keyboard.createCursorKeys()

  // COLLISIONS
    game.physics.arcade.collide(player, sky)
    game.physics.arcade.overlap(player, baddies, ouchBaddies, null, this)
    game.physics.arcade.overlap(player, bubbles, collectBubbles, null, this)
    game.physics.arcade.collide(sky, bubbles, destroyBubbles, null, this)

  // BREATH AND HEALTH
    if (player.previousPosition.y < 475) {
      breath = 100
      this.myBreathBar.setPercent(100)
    }
    else {
      game.time.events.loop(2000, holdBreath, this)
    }

    if (breath > 100) {
      breath = 100
    }

    // Death animation
    if (health <= 0) {
      // death()
      player.kill()
    }

  // CHARACTER MOVEMENT

    //Reset the players velocity (movement)
    player.body.velocity.y = 0
    player.body.velocity.x = 0

    if (cursors.up.isDown && cursors.right.isDown){
      //  Move up and right
      player.body.velocity.y = -100
      player.body.velocity.x = 150

      player.animations.play('right')
    }
    else if (cursors.up.isDown && cursors.left.isDown){
      //  Move up and left
      player.body.velocity.y = -100
      player.body.velocity.x = -150

      player.animations.play('left')
    }
    else if (cursors.down.isDown && cursors.right.isDown){
      //  Move down and right
      player.body.velocity.y = 100
      player.body.velocity.x = 150

      player.animations.play('right')
    }
    else if (cursors.down.isDown && cursors.left.isDown){
      //  Move down and left
      player.body.velocity.y = 100
      player.body.velocity.x = -150

      player.animations.play('left')
    }
    else if (cursors.left.isDown)
    {
      //  Move to the left
      player.body.velocity.x = -150

      player.animations.play('left')
    }
    else if (cursors.right.isDown)
    {
      //  Move to the right
      player.body.velocity.x = 150

      player.animations.play('right')
    }
    else if (cursors.up.isDown){
      //  Move up
      player.body.velocity.y = -100

      player.animations.play('up')
    }
    else if (cursors.down.isDown){
      //  Move down
      player.body.velocity.y = 150

      player.animations.play('down')
    }
    else
    {
      //  Stand still
      player.animations.play('down')
    }
    console.log(breath)
}

function render() {
  // var zone = game.camera.deadzone
  //
  // game.context.fillStyle = 'rgba(255,0,0,0.6)'
  // game.context.fillRect(zone.x, zone.y, zone.width, zone.height)
  //
  // game.debug.cameraInfo(game.camera, 32, 32)
  // game.debug.spriteCoords(player, 32, 500)
}

function death() {
  // Death explosion
  death = game.add.sprite(player.position.x, player.position.y, 'death')
  death.animations.add('death', null, 10, false)
  death.animations.play('death', 10, false, false)
}

function holdBreath() {
  if (breath <= 0) {
    breath = 0
    health = health - 0.01
    this.myHealthBar.setPercent(health)

    if (health < 20) {
      game.camera.flash(0xa21414, 1500, false)
    }

  } else {
    breath = breath - 0.01
  }
  this.myBreathBar.setPercent(breath)
}

function spawnBaddies () {

  var jellyfish = baddies.create(game.world.randomX, player.previousPosition.y + 500, 'jellyfish')
  var stingray = baddies.create(-100, player.previousPosition.y + game.rnd.realInRange(0, 1000), 'stingray')

  jellyfish.animations.add('up', null, 10, true)
  jellyfish.animations.play('up', 8)

  stingray.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true)
  stingray.animations.add('right', [6, 7, 8, 9, 10, 11], 10, true)
  stingray.animations.play('right', 6)

  jellyfish.scale.set(game.rnd.realInRange(0.7, 1.2))

  game.add.tween(jellyfish).to({ y: 420 }, 32000, Phaser.Easing.Sinusoidal.InOut, true, 0, 1500, false);
  game.add.tween(stingray).to({ x: 1280 }, 32000, Phaser.Easing.Sinusoidal.InOut, true, 0, 1500, false);

}

function ouchBaddies () {
  health = health - 0.1
  game.camera.shake()
  game.camera.flash(0xa21414, 1500, false)
}
