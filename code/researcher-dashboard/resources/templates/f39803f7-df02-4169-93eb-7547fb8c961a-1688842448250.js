jQuery("#simulation")
  .on("click", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Path_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Input_1" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-Path_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#C4C4C4",
                      "border-right-width": "1.0px",
                      "border-right-color": "#C4C4C4",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#C4C4C4",
                      "border-left-width": "1.0px",
                      "border-left-color": "#C4C4C4"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-Path_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Path_2 svg" ],
                    "attributes": {
                      "path-background-color": "#7D7D7D"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-d24b6656-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-d24b6656-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_91 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_90 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_91 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_90 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_91 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_90 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_91 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_90 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-d24b6656-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_69 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_70 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_69 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_70 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
  .on("click", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Hotspot_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#t-Dynamic_Panel_1" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": [ "#t-Path_8" ],
                      "angle": {
                        "type": "rotateto",
                        "value": "45.0"
                      },
                      "effect": {
                        "type": "none",
                        "easing": "swing",
                        "duration": 200
                      }
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
      }
    } else if(jFirer.is("#t-Ellipse_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#t-Dynamic_Panel_2" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Ellipse_2" ],
                      "attributes": {
                        "stroke-width": "4.0px",
                        "stroke": "#404040"
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
    }
  })
  .on("pageload", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-36d03c4c-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#mi-36d03c4c-Paragraph_7" ],
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
    } else if(jFirer.is("#mi-36d03c4c-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#mi-36d03c4c-Paragraph_7" ],
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
  .on("focusin", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#t-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#1976D2",
                      "border-right-width": "1.5px",
                      "border-right-color": "#1976D2",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#1976D2",
                      "border-left-width": "1.5px",
                      "border-left-color": "#1976D2"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Path_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Path_2 svg" ],
                    "attributes": {
                      "path-background-color": "#1565C0"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#t-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#C4C4C4",
                      "border-right-width": "1.0px",
                      "border-right-color": "#C4C4C4",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#C4C4C4",
                      "border-left-width": "1.0px",
                      "border-left-color": "#C4C4C4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-Path_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Path_2 svg" ],
                    "attributes": {
                      "path-background-color": "#7D7D7D"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Input_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#000000",
                      "border-right-color": "#000000",
                      "border-bottom-color": "#000000",
                      "border-left-color": "#000000"
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
    } else if(jFirer.is("#t-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #shapewrapper-t-Ellipse_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Path_8 svg" ],
                    "attributes": {
                      "path-background-color": "#000000"
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
    } else if(jFirer.is("#t-Path_20") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Ellipse_3","#t-Rectangle_4" ]
                  },
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
    } else if(jFirer.is("#t-Path_21") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Rectangle_5","#t-Ellipse_4" ]
                  },
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
    } else if(jFirer.is("#t-Path_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Ellipse_5","#t-Rectangle_6" ]
                  },
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
    } else if(jFirer.is("#mi-d24b6656-Hotspot_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-d24b6656-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_90 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_91 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_90 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_91 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-d24b6656-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-d24b6656-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_69 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_70 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 .verticalalign",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-f39803f7-df02-4169-93eb-7547fb8c961a #mi-36d03c4c-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
  .on("mouseleave dragleave", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Input_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Path_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Path_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Path_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-d24b6656-Hotspot_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-d24b6656-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-d24b6656-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36d03c4c-Hotspot_8")) {
      jEvent.undoCases(jFirer);
    }
  });