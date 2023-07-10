jQuery("#simulation")
  .on("click", ".s-921a5326-158d-4234-be7c-2d09276c751d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-921a5326-158d-4234-be7c-2d09276c751d #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(103,80,164,0.08)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-921a5326-158d-4234-be7c-2d09276c751d #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fe9b791e-80f4-42eb-85dc-a6a2157fa64e",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-921a5326-158d-4234-be7c-2d09276c751d #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#735EAB"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-921a5326-158d-4234-be7c-2d09276c751d #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6750A4"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });