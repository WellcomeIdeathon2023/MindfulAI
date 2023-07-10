(function(window, undefined) {
  var dictionary = {
    "5312287d-6226-41b0-921c-ba4c19a11583": "SocialNetwork",
    "62942c02-d036-4b1c-ad07-3d2a388e0692": "SocialInteractionsOverTime",
    "d7764132-dfab-4473-9dcf-aa0a8b896de5": "MyProfile",
    "f1fde6f8-6c87-4f71-bf1b-606bf23aa173": "Login",
    "921a5326-158d-4234-be7c-2d09276c751d": "PrizeHubAlert",
    "70398863-41f1-438c-be89-20b044069e9c": "UserAccount",
    "be7104d7-453a-42cb-92fc-2070d7700d16": "Share your emotions",
    "2e97c58d-5807-4070-9648-3770ae26f7af": "Leaderboard",
    "30d82300-1442-48c0-acc0-e90fb9dae462": "create-event",
    "a4dc5927-892a-4c33-803b-d25972f3d6fd": "chatBot conversation",
    "411d9417-6d48-4752-9322-7bde49f9ab6d": "PatientActivity",
    "84cd01c1-cede-4c22-a146-417f80b8721f": "PushNotifications",
    "8d009c0e-82a9-4dcf-a64e-db9ce8510b4c": "calendar",
    "ae1b95aa-cfd4-47ce-8d0b-6b283e03ff51": "JoinCommunity",
    "94e2779d-d495-4233-aa42-3de00840431f": "AppointmentSettings",
    "3e72697d-295c-42e6-8aca-97304b98ba19": "CumulativePoints",
    "93ee09ba-a213-4405-95a1-24d1ea70b764": "AppointmentMap",
    "3301c4d1-8441-4b0b-8c75-01a7ec9ce78c": "calendar-day-expanded",
    "d10c0613-eb95-465c-8c92-18f0774880c7": "Home",
    "c9cf19e2-6b91-463e-8ea4-a5290dc8f060": "PersonalHealthRating",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Launch",
    "14923368-01de-4897-9363-b06f78ebd056": "PersonalEngagementPolarPlot",
    "fe9b791e-80f4-42eb-85dc-a6a2157fa64e": "PrizeHubHome",
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