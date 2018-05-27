## Canvas

```HTML
<html>
<body>
  <canvas id="my_canvas"></canvas>
</body>

<script>
  var canvas = null;
  var context = null;

  function setup() {
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext("2d");
    canvas.width = 1200; // setting to 1200 px, or we can set it to window.innerWidth
    canvas.height = 720; // or we can choose to use window.innerHeight
  }

  setup();
</script>
</html>
```

### Loading an image to canvas
Note: when you declare a new image, ensure you declare or bind its onload method before assign it a source. Becuase once you have given the src it will immediately try to load it and the onload handler won't be present.

So modifying the above script.
```js

  var canvas = null;
  var context = null;
  var img = null;

  function setup() {
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext("2d");
    canvas.width = 1200; // setting to 1200 px, or we can set it to window.innerWidth
    canvas.height = 720; // or we can choose to use window.innerHeight

    //
    img = new Image();
    img.onload = onImageLoad;
    img.src = "src of the image";

  }

  function onImageLoad() {
    console.log("image loaded successfully");
    // add it to canvas
    context.drawImage(img, 192, 192);
  }

  setup();

```
##### Different Image formats
PNG: it shows transparent background useful with gaming.
JPEG: it gives better compression but lack transparency
web-p: it a new format that provides compression ratios as good as the pngs or jpegs, but also supports transparency

### Animating on canvas
```HTML
<html>
<body>
  <canvas id="my_canvas"></canvas>
</body>

<script>
  var canvas = null;
  var context = null;

  var frameRate = 1000/30;
  var frame = 0;
  var assets = ['img1.png', 'img2.png', 'img3.png'];
  var frames = [];

  function onImageLoad() {
    console.log("image loaded successfully");
    // add it to canvas
    context.drawImage(img, 192, 192);
  }

  function setup() {
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext("2d");
    canvas.width = 1200; // setting to 1200 px, or we can set it to window.innerWidth
    canvas.height = 720; // or we can choose to use window.innerHeight

    for(var i = 0; i < assets.length; i++) {
      frames.push(new Image());
      frames[i].onload = onImageLoad;
      frames[i].src = assets[i];
    }
    setInterval(animate, frameRate);
  }

  function animate() {
    // the canvas doesn't clear itself in each render so other things always show up, we need to explicitly clear the context.
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(frames[frame], 192, 192);
    frame = (frame + 1) % frames.length; // this is so that we keep incrementing the frame, and anytime the frame becomes more than frames.length the the modulo function loop it around back to 0 and again count starts from 0 so it keep in correct sequence infinitely.
  }

  setup();
</script>
</html>
```

## Dirty Rectangles

https://stackoverflow.com/questions/76651/dirty-rectangles

## Texture Atlasing vs Spriting
they are used interchangebly, although sprites are far more common. But if we want to be very specific then sprites are only a group of frames for an animation, but atlas is a generic term for grouping or packaging many items together.

## Some points
* in modern there are only as many as 6 server calls that possibly take place, which means if say you have a 1000 calls then the other will keep waiting unless some of the calls gets resolved.
