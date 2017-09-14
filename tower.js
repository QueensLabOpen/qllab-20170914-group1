class Tower {
  var x, y, name, bullet, tower;
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
}

  InitTower()
  {
      var towerPath = "grafics/tower_" + this.name + ".png";
       tower = PIXI.Texture.fromImage(towerPath);
       bullet = PIXI.Texture.fromImage("grafics/player_red.png");
        
       var newBullet = new PIXI.Sprite(bullet);
       newBullet.anchor.x = 0.5;
       newBullet.anchor.y = 0.5;

       newBullet.position.x = 200;
       newBullet.posiion.y = 150;

       stage1.addChild(newBullet);

       console.log("Tower created" + name);
}

  var bullets = [];
  var bulletSpeed = 5;
  function rotateToPoint(mx, my, px, py) {
      var self = this;
      var dist_Y = my - py;
      var dist_X = mx - px;
      var angle = Math.atan2(dist_Y, dist_X);
      //var degrees = angle * 180/ Math.PI;
      return angle;
  }

function animate() {
    requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    bunny.rotation = rotateToPoint(renderer.plugins.interaction.mouse.global.x, renderer.plugins.interaction.mouse.global.y, bunny.position.x, bunny.position.y);

    for (var b = bullets.length - 1; b >= 0; b--) {
        bullets[b].position.x += Math.cos(bullets[b].rotation) * bulletSpeed;
        bullets[b].position.y += Math.sin(bullets[b].rotation) * bulletSpeed;
    }
    // render the container
    renderer.render(stage1);
}

  shoot: function() {
      
      var bullet = new PIXI.Sprite(bullet);
      bullet.position.x = bullet.x + Math.cos(bunny.rotation) * 20;
      bullet.position.y = bullet.position.y + Math.sin(bunny.rotation) * 20;
      bullet.rotation = rotation;
      stage1.addChild(bullet);
      bullets.push(bullet);
     //remove bullets


      animate(); 

  }
}