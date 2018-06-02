# HTML5
HTML 5 and other Web Tech notes and examples

## Loading Images
Asset Manager
What does an asset manager need?
Cached Asset Management
Async callbacks on load
batched asset loading

```js
// creeate a dictionary of all cached assets
var gCachedAssets = {};

function loadAssets(assetName, callbackFcn) {
  if(gCachedAssets[assetName] == null) {
    // not already present in the cache, so lets load it
    var img = new Image();
    img.onload = function() {
      callbackFcn(img);
    };
    img.src = assetName;
    gCachedAssets[assetName] = img;
  } else {
    // asset is already loaded
    callbackFcn(gCachedAssets[assetName]);
  }

}
```
