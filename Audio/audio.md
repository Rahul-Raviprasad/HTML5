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
    if(!gSM.enabled) {
      return false;
    }
    var looping = false;
    var volume = 0.2;
    if(settings) {
      if(settings.looping)
        looping = settings.looping;
      if(settings.volume)
        volume = settings.volume;
    }
    var sd = this.clips[path];
    if(sd == null) {
      return false;
    }
    if(sd.l == false) return false;

    //create a sound source
    var currentClip = gSM._context.createBufferSource();

    //tell the source which sound to play
    currentClip.buffer = sd.b;
    currentClip.gain.value = volume;
    currentClip.connect(gSM._mainNode);
    currentClip.loop = looping;

    //play the source now
    currentClip.noteOn(0);
    return true;

  },
  //-----------
  stopAll: function() {
    this._mainNode.disconnect();
    this._mainNode = this._context.createGainNode(0);
    this._mainNode.connect(this._context.destination);
  },
  //----------
  toggleMute: function() {
    if(this._mainNode.gain.value > 0) {
      this._mainNode.gain.value = 0;
    } else {
      this._mainNode.gain.value = 1;
    }
  }
});

gSM = new SoundManager();
```


Attaching sounds to some entities
```js
Sound = Class.extend({
  init: function() {

  },
  //-------
  play: function(loop) {
    gSM.playSound(this.path, {looping:loop, volume:1});
  }
});

///----
function playSoundInstance(soundPath) {
  var sound = gSM.loadAsync(soundPath, function(sObj) {sObj.play(false);});
}


```
