(function(window, undefined) {
  var dictionary = {
    "d7764132-dfab-4473-9dcf-aa0a8b896de5": "MyProfile",
    "f1fde6f8-6c87-4f71-bf1b-606bf23aa173": "Login",
    "94e2779d-d495-4233-aa42-3de00840431f": "AppointmentSettings",
    "93ee09ba-a213-4405-95a1-24d1ea70b764": "AppointmentMap",
    "d10c0613-eb95-465c-8c92-18f0774880c7": "Home",
    "70398863-41f1-438c-be89-20b044069e9c": "UserAccount",
    "42bbfbfa-c9b3-429e-b8e9-b0bf09bc69d6": "Prizehub",
    "ac8879a1-bbd1-4955-ba62-8e35a184e155": "Journalling",
    "ad9afa22-4580-4be4-9dfa-5946193fc06b": "Leaderboard",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Launch",
    "411d9417-6d48-4752-9322-7bde49f9ab6d": "PatientActivity",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);