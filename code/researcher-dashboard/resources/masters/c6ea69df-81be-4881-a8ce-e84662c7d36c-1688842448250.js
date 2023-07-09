jQuery("#simulation")
  .on("click", ".m-c6ea69df-81be-4881-a8ce-e84662c7d36c .click,.m-c6ea69df-81be-4881-a8ce-e84662c7d36c.click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 .verticalalign",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 .verticalalign",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
    } else if(jFirer.is("#Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_91 .verticalalign",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_90 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_91 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_90 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_91 .verticalalign",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_90 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_91 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_90 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
    } else if(jFirer.is("#Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 .verticalalign",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 .verticalalign",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
  })
  .on("mouseenter dragenter", ".m-c6ea69df-81be-4881-a8ce-e84662c7d36c .mouseenter,.m-c6ea69df-81be-4881-a8ce-e84662c7d36c.mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#Hotspot_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 .verticalalign",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F7F7F7"
                    }
                  } ],
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_90 .verticalalign",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_91 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_90 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_91 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F7F7F7"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 .verticalalign",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-c6ea69df-81be-4881-a8ce-e84662c7d36c #Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F7F7F7"
                    }
                  } ],
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
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".m-c6ea69df-81be-4881-a8ce-e84662c7d36c .mouseleave,.m-c6ea69df-81be-4881-a8ce-e84662c7d36c.mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#Hotspot_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_1")) {
      jEvent.undoCases(jFirer);
    }
  });