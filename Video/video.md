# Video

* height and width should be provided, even though it might adapt based on the file.
* video formats also might have a default to poster for the video, you can override it with your image by using the poster attribute


## Basic example
```html
<!doctype html>
<html>
<body>
  <h1> Video example </h1>
  <video src="test.ogg" width="320" height="240" controls poster="image.png">
    <a href="test.ogg"> Download movie </a>
  </video>
</body>
</html>
```

## Codecs
* OGG
* H.264
* WebM

## Captions

a dirty way would be to use jcc's jcap. search on github.

SRT files.
```html
<video>
  <track src="transcript-en.srt" type="text/srt" language="en" role="textaudesc">
  </track>
</video>
```

## Resources
Mark pilgrims tutorial in dive into html5 on video
