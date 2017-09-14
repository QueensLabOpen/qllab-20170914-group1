class Map {

  // Grids
  //private var background = null;
  var background_texure = null;
  var foreground = null;

  // Grid sizes
  var width = null;
  var height = null;

  // Area sizes
  var area_width = null;
  var area_height = null;

  constructor(width, height, area_width, area_heigth){
    this.width = width;
    this.heigth = height;

    foreground = new Array(area_width, area_height);

    background_texure = PIXI.Sprite.fromImage("graphics/background_grass.png");


  }

  draw: function(app){
    //background_texure = PIXI.Texture.fromImage("graphics/background_grass.png");
    app.x = app.renderer.width / 2;
    app.y = app.renderer.height / 2;
    app.stage.addChild(background_texture);


    // Draw the grid
  }

  grid(){
    // Create the grid
  }

  addChild(child, x, y){


    return false;
  }

}
export default Map;
