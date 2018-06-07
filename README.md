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
Batch loading

```js

function loadAssets(assetList, callbackFn) {
  var loadBatch = {
    count: 0,
    total: assetList.count,
    cb: callbackFn
  };

  for(var i = 0; i < assetList.length; i++ ) {
    // not already present in the cache, so lets load it
    if(gCachedAssets[assetName] == null) {
      var assetType = getAssetTypeFromExtension(assetName);
      if(assetType == 0) { // asset is an image
        var img = new Image();
        img.onload = function() {
          onLoadedCallback(img, loadBatch);
        };
        img.src = assetName;
        gCachedAssets[assetName] = img;
      } else if (assetType == 1) {
        // asset is different treat it differently
      }

    } else {
      // asset is already loaded
      onLoadedCallback(gCachedAssets[assetList[i]], loadBatch);
    }
  }
}

// if all the images have loaded only then call the callback on them.
function onLoadedCallback(asset, batch) {
  batch.count++;
  if(batch.count == batch.total) {
    batch.cb(asset);
  }
}
```


## Doctype
simplified

## case insensitive
you can type any case
<iMg SRc="xyz.png" />

## new and more sematic stuff
<header>, <nav>, <article>, <section>, <footer>, <aside>
<section> clarifies <div>
<article> replaces <div id="content">
<aside> replaces <div id="sidebar">
