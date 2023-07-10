jQuery("#simulation")
  .on("click", ".m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 .click,.m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50.click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_69 .verticalalign",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_70 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_69 .verticalalign",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_70 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2c9332ff-4b25-4d45-80ad-a2476c36d0cb"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 .verticalalign",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 .verticalalign",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 .verticalalign",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 .verticalalign",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
  .on("pageload", ".m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 .pageload,.m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50.pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#Paragraph_7" ],
                    "value": "Jane Doe"
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
    } else if(jFirer.is("#Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#Paragraph_7" ],
                    "value": "Jane Doe"
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
    }
  })
  .on("mouseenter dragenter", ".m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 .mouseenter,.m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50.mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_69 .verticalalign",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_70 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6F7F8"
                    }
                  } ],
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
    } else if(jFirer.is("#Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 .verticalalign",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F7F7F7"
                    }
                  } ],
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
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 .verticalalign",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 #Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F7F7F7"
                    }
                  } ],
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
    }
  })
  .on("mouseleave dragleave", ".m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50 .mouseleave,.m-7c264bc6-6ea8-4be1-a7be-6fd6b06f4b50.mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_4")) {
      jEvent.undoCases(jFirer);
    }
  });