(function(window, undefined) {
  var dictionary = {
    "s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 s-Slice_2": [ ["Slice 2@1x.png", "7e3eb43e-5e08-4486-8371-93573ead8755_1.png"] ],
    "s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 s-Slice_1": [ ["Slice 1@1x.png", "4672b3e0-3378-4fce-9535-b1044b55afdd_1.png"] ],
    "s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 s-Slice_3": [ ["Slice 1@1x.png", "d3c0d959-fb73-4dfc-9025-b0e93db29e01_1.png"] ]
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);