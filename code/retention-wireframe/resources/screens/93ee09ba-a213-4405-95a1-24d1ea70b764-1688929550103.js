jQuery("#simulation")
  .on("click", ".s-93ee09ba-a213-4405-95a1-24d1ea70b764 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Path_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": {
                      "type": "slideleft",
                      "duration": 500
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
    } else if(jFirer.is("#s-Rect_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 300
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #s-Rectangle_4" ],
                    "attributes": {
                      "opacity": "0.5"
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
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #s-Rectangle_4" ],
                    "attributes": {
                      "opacity": "1.0"
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
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #s-Button_2" ],
                    "attributes": {
                      "opacity": "0.7"
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
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #s-Button_2" ],
                    "attributes": {
                      "opacity": "1.0"
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
    } else if(jFirer.is("#s-Ellipse_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #shapewrapper-s-Ellipse_5" ],
                    "attributes": {
                      "opacity": "0.7"
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
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #shapewrapper-s-Ellipse_5" ],
                    "attributes": {
                      "opacity": "1.0"
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
    } else if(jFirer.is("#s-Path_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #shapewrapper-s-Ellipse_5" ],
                    "attributes": {
                      "opacity": "0.7"
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
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #shapewrapper-s-Ellipse_5" ],
                    "attributes": {
                      "opacity": "1.0"
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
    } else if(jFirer.is("#s-Path_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #s-Path_4" ],
                    "attributes": {
                      "opacity": "0.5"
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
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #s-Path_4" ],
                    "attributes": {
                      "opacity": "1.0"
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
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "transition": {
                      "type": "slidedown",
                      "duration": 300
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
    } else if(jFirer.is("#s-Path_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "transition": {
                      "type": "slidedown",
                      "duration": 300
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #s-Rectangle_8" ],
                    "attributes": {
                      "opacity": "0.5"
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
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #s-Rectangle_8" ],
                    "attributes": {
                      "opacity": "1.0"
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #s-Button_1" ],
                    "attributes": {
                      "opacity": "0.7"
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
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #s-Button_1" ],
                    "attributes": {
                      "opacity": "1.0"
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
    } else if(jFirer.is("#s-Ellipse_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "0.7"
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
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "1.0"
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
    } else if(jFirer.is("#s-Path_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "0.7"
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
                    "target": [ "#s-93ee09ba-a213-4405-95a1-24d1ea70b764 #shapewrapper-s-Ellipse_3" ],
                    "attributes": {
                      "opacity": "1.0"
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