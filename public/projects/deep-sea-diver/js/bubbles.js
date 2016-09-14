// Function to create multiple bubbles
function releaseBubbles () {
  var bubble = bubbles.create(game.world.randomX, player.previousPosition.y + 500, 'bubble');
  bubble.animations.add('bubble', [0, 1, 2, 3, 4, 5, 6])
  bubble.scale.set(game.rnd.realInRange(0.4, 1.7));

  game.add.tween(bubble).to({ y: -256 }, 32000, Phaser.Easing.Sinusoidal.InOut, true, 0, 1500, false);

  totalBubbles++
}

// Function to collect bubbles for the player to increase breath
function collectBubbles (player, bubbles) {
  killBubbles(bubbles)
  //  TODO: Add breath back to breath meter
  breath = breath + 2

  var pop = game.add.audio('bubble-pop', 1, false, true);
  pop.play();
}

// Function to destroy bubbles without player collection
function destroyBubbles(player, bubbles) {
  killBubbles(bubbles)
}

// Re-writing the built in game.kill() function to incorporate waiting for animation
function killBubbles (bubbles) {
  bubbles.alive = false
  bubbles.animations.play('bubble', 12)
  bubbles.events.onAnimationComplete.addOnce(function() {
      bubbles.exists = false
      bubbles.visible = false
      bubbles.events.destroy()
      totalBubbles--

  }, bubbles)

  if (bubbles.events) {
      bubbles.events.onKilled$dispatch(bubbles)
  }

  return bubbles
}
