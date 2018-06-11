## Building a Game engine for the web.

Why?

## same basic questions.
what genre, single vs multiplayer, which platforms are we targeting, tools for development, how does the game scale?

If you look at the game industry, lot of tools already available.

browser games
mostly hobby grown projects
development often copied from app dev paradigms rather than games
no real technical standard
a lot of legacy custom code.

browser games have very long lifespan.

## Frameworks
* no commercial js framework
* a couple of tiny projects
 - most are concepts
 - most are dead

## games possible on web
2D
* Puzzles
* Adventure
* Board games
* card games
* platformers
* jump and runs
2.5D
* RPG's
* Strategy
 - turn based
 - real time
* Simulation

So for Isometric games like AOE or farmville etc what we need?

* Free mouse panning
* Infinite real time worlds
* non-rectangular objects
* Animated characters
* chat bubbles
* collision detection
* pathfinding
* walking into houses
* mashups with normal html content
* sound effects
* scalable viewports
* MMO ready server


## Rendering
how do i render 2000 objects in < 50 ms?

canvas is slower than html rendering..

what can we do?
## Block Rendering
* directly replace innerHTML with a huge string instead of multiple DOM append operations
* huge performance boost
  - Native parsing of html engine is really fast
  - reflow and repaint only occur once.
* HUge disadvntage?:  no reference to individual nodes

## Lazy node rendering
* fixes the main disadvantage of block rendering
* after innerHTMLis set run
var ele = $('* ', container).
* you have now the colection of all elements.
* now you know the order of construction, you can refernce back.

## smart rendering
##### conservative method
* build <div>'s and style them via Javascript (on the style tag)
render them out en bloque through innerHTML

## delegation

## Action surfaces
Paul Bakaus

## Basic Entity class
```js

EntityClass = Class.extend({
  //can be referenced by child classes
  pos: {x:0,y:0},
  size: {x:0,y:0},
  // can be overloaded by child classes
  update: function() {}

});

GameEngineClass = Class.extend({
  spawnEntity: function (typeName){
    if(typeName == "Player") {
      return new PlayerClass();
    } else if(typeName == "Monster") {
      return new MonsterClass();
    } else if(typeName == "Tank") {
      return new TankClass();
    }
  }
});

var gGameEngine = new GameEngineClass();
```
Note: using a else if or switch case for small number entities is ok. But in general we will need a factory to reference as below
```js

EntityClass = Class.extend({
  //can be referenced by child classes
  pos: {x:0,y:0},
  size: {x:0,y:0},
  _killed: false,
  currSpriteName: null,
  zindex: 0,
  // can be overloaded by child classes
  update: function() {},
  draw: function() {
    if(this.currSpriteName) {
      //drawSprite
    }
  }

});




GameEngineClass = Class.extend({
  // To keep track of entities we have spawn.
  entities: [],
  // Factory object, containing all the types like Player, hammer, tank, monster, mine etc
  factory: {},
  spawnEntity: function (typeName) {
    var ent =  new (factory[typeName])();
    this.entities.push(ent);
    return ent;
  },
  update: function() {
    // Run through the entities list and call each entity's update method
    for (var i = 0; i < this.entities.length; i++) {
      var ent = this.entities[i];
      if(!ent._killed) {
        ent.update();
      }
    }
  }
});

var gGameEngine = new GameEngineClass();
```

### Collision detection
```js
intersectRect = function(r1, r2) {
  return !(r2.left > r1.right ||
           r2.right < r1.left ||
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}
```

collision location.

once you you collision detection you also need to handle the collision.
Collision handling can also be done in many ways.
the physics engines like box2d also allows you to pass a callback function for handling the collision between bodies.

## Physics engine
check out Box2D


## Drawing Linear Gradients on canvas
Use the createLinearGradient method available on the 2d context to create a gradient.

```js
// Make a nice blue gradient

var gradient = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);
gradient.addColorStop(0,'#ceefff');
gradient.addColorStop(1, '#52bcff');

ctx.fillStyle = gradient;
ctx.fillRect(0,0,canvas.width, canvas.height)


```
