# Audio API

explore the web audio playground

https://webaudioplayground.appspot.com/#

```js
SoundManager = Class.extend({
  clips: {},
  enabled: true,
  _context: null,
  _mainNode: null,
  //-------------------
  init: function() {
    try {
      this._context = new webkitAudioContext();
    } catch(e) {
      alert('Web Audio is not supported in your browser');
    }

    this._mainNode = this._context.createGainNode(0);
    this._mainNode.connect(this._context.destination);
  },
  //----------------
  loadAsync: function(path, callbackFn) {
    if(this.clips[path]) {
      //if audio clip is already present simply call the callback to handle it.
      callbackFn(this.clips[paths].s);
      return this.clips[paths].s;
    }
    // if the sound is not already present
    var clip = {s: new Sound(),b: null, l: false};
    this.clips[path] = clip;
    clip.s.path = path;

    var request = new XMLHttpRequest();
    request.open('GET', path, true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
      gSM._context.decodeAudioData(request.response,
        function(buffer) {
          clip.b = buffer;
          clip.l = true;
          callbackFn(clip.s);
        },
        function(data) {
          console.log("XHR request failed");
        }
      )
    }
    request.send();
    return clip.s;

  },
  //-------------
  playSound: function(path, settings) {
    
  }
});

gSM = new SoundManager();
```
