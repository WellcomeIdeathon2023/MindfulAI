jQuery("#simulation")
  .on("click", ".s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_1 span" ],
                    "attributes": {
                      "color": "#1976D2"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_5 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_4 span" ],
                    "attributes": {
                      "color": "#686868"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 > .cellContainerChild > .borderLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px",
                      "border-bottom-color": "#E0E0E0"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 150
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_1 span" ],
                    "attributes": {
                      "color": "#1976D2"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_5 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_4 span" ],
                    "attributes": {
                      "color": "#686868"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 > .cellContainerChild > .borderLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px",
                      "border-bottom-color": "#E0E0E0"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 150
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_4 span" ],
                    "attributes": {
                      "color": "#1976D2"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_1 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#686868"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 > .cellContainerChild > .borderLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px",
                      "border-bottom-color": "#E0E0E0"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 150
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_4 span" ],
                    "attributes": {
                      "color": "#1976D2"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_1 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#686868"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 > .cellContainerChild > .borderLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px",
                      "border-bottom-color": "#E0E0E0"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 150
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#1976D2"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_1 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_4 span" ],
                    "attributes": {
                      "color": "#686868"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 > .cellContainerChild > .borderLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px",
                      "border-bottom-color": "#E0E0E0"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 150
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
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
    } else if(jFirer.is("#s-Hotspot_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_5 span" ],
                    "attributes": {
                      "color": "#1976D2"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_1 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Paragraph_4 span" ],
                    "attributes": {
                      "color": "#686868"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_40 > .cellContainerChild > .borderLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_39 > .cellContainerChild > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px",
                      "border-bottom-color": "#E0E0E0"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "top"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 150
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
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
    } else if(jFirer.is("#s-Button_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Button_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#769FDB"
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Button_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#1976D2"
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
    } else if(jFirer.is(".s-Paragraph_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Data_grid_1 .s-Paragraph_21 span" ],
                    "attributes": {
                      "color": "rgba(25,118,210,0.5)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Data_grid_1 .s-Paragraph_21 span" ],
                    "attributes": {
                      "color": "#1976D2"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "Departments",
                    "element": "#s-Data_grid_1"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#266FD6",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg" ],
                    "attributes": {
                      "path-background-color": "#266FD6"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_15 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg" ],
                    "attributes": {
                      "path-background-color": "#7D7D7D"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg" ],
                    "attributes": {
                      "path-background-color": "#266FD6"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span" ],
                    "attributes": {
                      "color": "#266FD6",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_15 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg" ],
                    "attributes": {
                      "path-background-color": "#266FD6"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_15 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg" ],
                    "attributes": {
                      "path-background-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg" ],
                    "attributes": {
                      "path-background-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_24 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_15 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg" ],
                    "attributes": {
                      "path-background-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_24 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto',Arial",
                      "font-style": "normal",
                      "font-weight": "500"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_15 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg" ],
                    "attributes": {
                      "path-background-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_14 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_15 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto',Arial",
                      "font-style": "normal",
                      "font-weight": "500"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_14 svg" ],
                    "attributes": {
                      "path-background-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/74c81c6a-bbb9-40fd-8bea-b897299a5d8d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 200
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg" ],
                    "attributes": {
                      "path-background-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg" ],
                    "attributes": {
                      "path-background-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg" ],
                    "attributes": {
                      "path-background-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_20 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_19 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_11 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_9 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_17 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_18 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_14 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_8 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_13 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_10 span",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#333333",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_6 svg" ],
                    "attributes": {
                      "path-background-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_3 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_4 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_7 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_11 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_9 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_16 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_15 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_5 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_10 svg",
                  "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_1")) {
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/224e6953-a5d0-4cee-ae03-e6038f07acd6"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7cd78be8-a68a-4a36-9ce5-3abdb1170ab0"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e8e0b0dc-0d56-4155-95cd-e964af486fdf"
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
    jFirer.parents("tr.datarow").trigger("click", true);
  })
  .on("click", ".s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_1")) {
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
                      "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Ellipse_1" ],
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_8")) {
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
                      "target": [ "#mi-6d2f132c-Dynamic_Panel_1" ],
                      "effect": {
                        "type": "slide",
                        "easing": "swing",
                        "duration": 300,
                        "direction": "left"
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
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Paragraph_19" ],
                    "value": "Personal settings"
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
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Account owner name"
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Account owner email"
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Account owner name"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Password"
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
    }
  })
  .on("focusin", ".s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_1 input" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_1 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_2 input" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_2 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_3 input" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_3 > .borderLayer" ],
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
  .on("focusout", ".s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_1 input" ],
                    "attributes": {
                      "color": "#686868"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_1 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_2 input" ],
                    "attributes": {
                      "color": "#686868"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_2 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_3 input" ],
                    "attributes": {
                      "color": "#686868"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_3 > .borderLayer" ],
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
  .on("mouseenter dragenter", ".s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Input_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_1 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_2 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Category_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .s-Category_4 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .s-Category_4 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .s-Category_4 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .s-Category_4 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Category_4 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Input_3 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Button_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Button_15" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 2px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #s-Button_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3265BA"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Account owner name" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_21 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_27 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb #mi-6d2f132c-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-6d2f132c-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-6d2f132c-Rectangle_2" ]
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-6d2f132c-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-6d2f132c-Rectangle_3" ]
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-6d2f132c-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-6d2f132c-Rectangle_4" ]
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-6d2f132c-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-6d2f132c-Rectangle_5" ]
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-6d2f132c-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-6d2f132c-Rectangle_8" ]
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
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-6d2f132c-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-6d2f132c-Rectangle_9" ]
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
  })
  .on("mouseleave dragleave", ".s-2c9332ff-4b25-4d45-80ad-a2476c36d0cb .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Input_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Category_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6d2f132c-Hotspot_8")) {
      jEvent.undoCases(jFirer);
    }
  });