jQuery("#simulation")
  .on("click", ".t-e25fb9ce-264b-4442-bf72-345b4c825ecf .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Path_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Input_3" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-Path_32" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_3 > .borderLayer" ],
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
                    "target": [ "#t-Path_32" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Path_33 svg" ],
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
    } else if(jFirer.is("#t-Button_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Button_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6E8D68"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Button_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
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
    } else if(jFirer.is("#t-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Panel_30" ]
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
    } else if(jFirer.is("#t-Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Panel_29" ]
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
    } else if(jFirer.is("#t-Hotspot_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327"
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
    } else if(jFirer.is("#t-Hotspot_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327"
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
    } else if(jFirer.is("#t-Hotspot_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Panel_32" ]
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
    } else if(jFirer.is("#t-Cell_242")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Panel_31" ]
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
    } else if(jFirer.is("#t-Hotspot_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Panel_31" ]
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
    } else if(jFirer.is("#t-Hotspot_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Panel_34" ]
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
    } else if(jFirer.is("#t-Hotspot_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Panel_33" ]
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
    } else if(jFirer.is("#t-Path_1")) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_1 > .borderLayer" ],
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Path_2 svg" ],
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
    } else if(jFirer.is("#t-Path_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Input_2" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-Path_30" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_2 > .borderLayer" ],
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
                    "target": [ "#t-Path_30" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Path_31 svg" ],
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
    } else if(jFirer.is("#mi-696ae683-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_69 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_70 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_69 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_70 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-696ae683-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-696ae683-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-fcd12d37-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-fcd12d37-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_91 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_90 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_91 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_90 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_91 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_90 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_91 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_90 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-fcd12d37-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
  .on("click", ".t-e25fb9ce-264b-4442-bf72-345b4c825ecf .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Hotspot_4")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Ellipse_2" ],
                      "attributes": {
                        "stroke-width": "4.0px",
                        "stroke": "#404040"
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#t-Dynamic_Panel_1" ]
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
    }
  })
  .on("pageload", ".t-e25fb9ce-264b-4442-bf72-345b4c825ecf .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-696ae683-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#mi-696ae683-Paragraph_7" ],
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
    } else if(jFirer.is("#mi-696ae683-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#mi-696ae683-Paragraph_7" ],
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
  .on("focusin", ".t-e25fb9ce-264b-4442-bf72-345b4c825ecf .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#t-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_3 > .borderLayer" ],
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
                    "target": [ "#t-Path_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Path_33 svg" ],
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
    } else if(jFirer.is("#t-Input_1")) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_1 > .borderLayer" ],
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Path_2 svg" ],
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
    } else if(jFirer.is("#t-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#t-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_2 > .borderLayer" ],
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
                    "target": [ "#t-Path_30" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Path_31 svg" ],
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
  .on("focusout", ".t-e25fb9ce-264b-4442-bf72-345b4c825ecf .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#t-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_3 > .borderLayer" ],
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
                    "target": [ "#t-Path_32" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Path_33 svg" ],
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
    } else if(jFirer.is("#t-Input_1")) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_1 > .borderLayer" ],
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Path_2 svg" ],
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
    } else if(jFirer.is("#t-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#t-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_2 > .borderLayer" ],
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
                    "target": [ "#t-Path_30" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Path_31 svg" ],
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
  .on("mouseenter dragenter", ".t-e25fb9ce-264b-4442-bf72-345b4c825ecf .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Input_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_3 > .borderLayer" ],
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
    } else if(jFirer.is("#t-Button_25") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Button_25" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 2px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Button_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#315D28"
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
    } else if(jFirer.is("#t-Hotspot_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_227 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_227 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Hotspot_22") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_228 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_228 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Hotspot_25") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_243 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_243 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Hotspot_26") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_244 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_244 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Hotspot_27") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_245 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_245 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Hotspot_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_259 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_259 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Hotspot_29") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_260 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_260 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Hotspot_30") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_243 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_243 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_261 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_261 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Hotspot_31") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_262 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_262 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Hotspot_32") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_263 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_263 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Cell_264") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_264 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_264 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Hotspot_33") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_264 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Cell_264 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
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
    } else if(jFirer.is("#t-Input_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_1 > .borderLayer" ],
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
    } else if(jFirer.is("#t-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #shapewrapper-t-Ellipse_1 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Path_8 svg" ],
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
    } else if(jFirer.is("#t-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#t-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Rectangle_5","#t-Ellipse_4" ]
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
    } else if(jFirer.is("#t-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-Ellipse_5","#t-Rectangle_6" ]
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
    } else if(jFirer.is("#t-Input_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #t-Input_2 > .borderLayer" ],
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
    } else if(jFirer.is("#mi-696ae683-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#mi-696ae683-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_69 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_70 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-696ae683-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-696ae683-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#mi-696ae683-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#mi-696ae683-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#mi-696ae683-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-696ae683-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-fcd12d37-Hotspot_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-fcd12d37-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_90 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_91 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_90 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_91 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-fcd12d37-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 .verticalalign",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_92 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#t-e25fb9ce-264b-4442-bf72-345b4c825ecf #mi-fcd12d37-Cell_93 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
  .on("mouseleave dragleave", ".t-e25fb9ce-264b-4442-bf72-345b4c825ecf .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Input_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Button_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_31")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_32")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Cell_264")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_33")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Input_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Input_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-696ae683-Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-696ae683-Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-696ae683-Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-696ae683-Hotspot_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-696ae683-Hotspot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-696ae683-Hotspot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-696ae683-Hotspot_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-fcd12d37-Hotspot_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-fcd12d37-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-fcd12d37-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    }
  });