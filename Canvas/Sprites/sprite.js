/** Sprite Class to help with animation
* @author Rahul Raviprasad <rahul.raviprasad@gmail.com>
* @class
*/
var Sprite = function(src, width, height, offsetX, offsetY) {
  this.spritesheet = null;
  this.offsetX = offsetX;
  this.offsetY = offsetY;
  this.posX = 0;
  this.posY = 0;
  this.width = width;
  this.height = height;
  this.setSpritesheet(src);
  this.setOffset(offsetX, offsetY);
}

// ----------------- prototype functions for Sprite Class ----

/**
* @param {String or ImageObject} src takes the sprite Image or path to the sprite image.
*/
Sprite.prototype.setSpritesheet = function(src) {
	if (src instanceof Image) {
		this.spritesheet = src;
	} else {
		this.spritesheet = new Image();
		this.spritesheet.src = src;
	}
};

/**
* @param {Integer} x - position x
* @param {Integer} y - position y
* sets the position x and y coordinates for the current sprite
*/
Sprite.prototype.setPosition = function(x, y) {
	this.posX = x;
	this.posY = y;
}

/**
* @param {Integer} x - position x
* @param {Integer} y - position y
* sets the offset x and y for the current sprite
*/
Sprite.prototype.setOffset = function(x, y) {
	this.offsetX = x;
	this.offsetY = y;
}
