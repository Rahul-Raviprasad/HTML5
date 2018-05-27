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
