(function(window, undefined) {
  var dictionary = {
    "0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327": "Dashboard",
    "224e6953-a5d0-4cee-ae03-e6038f07acd6": "Emails",
    "e8e0b0dc-0d56-4155-95cd-e964af486fdf": "Contacts",
    "f51d3d3e-4bec-4a4e-85cd-82564f94d302": "Dashboard - Predictive Modelling",
    "7cd78be8-a68a-4a36-9ce5-3abdb1170ab0": "Calendar",
    "928d65ed-c427-4f49-82a8-af8dd18c4ef2": "Sign in - Sign up",
    "74c81c6a-bbb9-40fd-8bea-b897299a5d8d": "Archived emails",
    "2c9332ff-4b25-4d45-80ad-a2476c36d0cb": "Personal settings",
    "c6fbe04b-dba7-4682-9e61-b06f147a4d33": "Logo",
    "e25fb9ce-264b-4442-bf72-345b4c825ecf": "Toolbar y 2 menús laterales (tree)",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Toolbar y menú lateral",
    "e9efacb7-c362-4984-a3a9-64da7d99c8d0": "Side menu",
    "c6ea69df-81be-4881-a8ce-e84662c7d36c": "Icon menu",
    "7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50": "User menu",
    "18ed1fea-2249-4bbb-95db-351c0f6a6b2b": "Footer",
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