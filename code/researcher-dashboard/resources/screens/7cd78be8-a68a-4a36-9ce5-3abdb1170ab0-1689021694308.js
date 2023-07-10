jQuery("#simulation")
  .on("click", ".s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Cell_224")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "February-1"
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
    } else if(jFirer.is("#s-Paragraph_195")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "February-1"
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
    } else if(jFirer.is("#s-Hotspot_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "February-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_43",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_229")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "February-2"
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
    } else if(jFirer.is("#s-Paragraph_201")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "February-2"
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
    } else if(jFirer.is("#s-Hotspot_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "February-2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_46",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_89")) {
      cases = [
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
          "exectype": "serial",
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
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_86")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "March-1"
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
    } else if(jFirer.is("#s-Paragraph_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "March-1"
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
    } else if(jFirer.is("#s-Hotspot_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "March-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_4",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_87")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "March-2"
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
    } else if(jFirer.is("#s-Paragraph_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "March-2"
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
    } else if(jFirer.is("#s-Hotspot_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "March-2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_8",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_96")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_46" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "March-3"
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
    } else if(jFirer.is("#s-Paragraph_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "March-3"
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
    } else if(jFirer.is("#s-Rectangle_107")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_107" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 2px rgba(64,64,64,0.25))"
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
    } else if(jFirer.is("#s-Hotspot_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "March-3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_59",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_20")) {
      cases = [
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
          "exectype": "serial",
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_30" ]
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_55" ]
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
    } else if(jFirer.is("#s-Cell_189")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "April-1"
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
    } else if(jFirer.is("#s-Paragraph_151")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "April-1"
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
    } else if(jFirer.is("#s-Hotspot_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "April-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_33",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_194")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "April-2"
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
    } else if(jFirer.is("#s-Paragraph_157")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "April-2"
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
    } else if(jFirer.is("#s-Hotspot_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Month" ],
                    "value": "April-2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_36",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_70")) {
      cases = [
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
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_24")) {
      cases = [
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
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_13 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_13 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_13 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_161 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_161 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_13 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_161 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_161 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_13 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_8 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_161 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_161 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_13 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_8 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_12 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_11 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_4 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_2 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_9 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_10 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_7 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_1 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_6 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_3 span",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Paragraph_5 span" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_6 svg" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_3 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_4 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_7 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_11 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_9 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_16 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_15 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_5 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_10 svg",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_1")) {
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_2")) {
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_3")) {
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_5")) {
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
    } else if(jFirer.is("#s-Path_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_25" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_33" ],
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": ""
                  },
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_33" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_34" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_25" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_26" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_46" ]
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
    } else if(jFirer.is("#s-Button_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_18 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_43" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_42" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_11",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_41" ],
                    "value": {
                      "datatype": "variable",
                      "element": "AM/PM"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_33" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_46" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_45" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_11",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_44" ],
                    "value": {
                      "datatype": "variable",
                      "element": "AM/PM"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_34" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_11",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_6" ],
                    "value": {
                      "datatype": "variable",
                      "element": "AM/PM"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_8" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_11",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "datatype": "variable",
                      "element": "AM/PM"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_3" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_33" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_32" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_11",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_31" ],
                    "value": {
                      "datatype": "variable",
                      "element": "AM/PM"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_25" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_36" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_35" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_11",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_34" ],
                    "value": {
                      "datatype": "variable",
                      "element": "AM/PM"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_26" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_59" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_12",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_58" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_11",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_57" ],
                    "value": {
                      "datatype": "variable",
                      "element": "AM/PM"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_46" ]
                  },
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
                    "target": [ "#s-Input_12" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_23 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_22 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_25 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_27 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_24 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_35 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_31 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_36 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_33 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_34 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Button_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": ""
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
    } else if(jFirer.is("#s-Rectangle_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_35 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_31 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_36 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_33 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_34 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_31 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#333333",
                      "border-right-color": "#333333",
                      "border-bottom-color": "#333333",
                      "border-left-color": "#333333"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_87 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#42BFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_88 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#42BFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#42BFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#42BFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_67 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#42BFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_68 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#42BFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_107 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#42BFFF"
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
    } else if(jFirer.is("#s-Rectangle_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_35 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_31 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_36 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_33 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_34 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_33 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#333333",
                      "border-right-color": "#333333",
                      "border-bottom-color": "#333333",
                      "border-left-color": "#333333"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_87 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#9C27B0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_88 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#9C27B0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#9C27B0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#9C27B0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_67 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#9C27B0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_68 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#9C27B0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_107 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#9C27B0"
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
    } else if(jFirer.is("#s-Rectangle_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_35 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_31 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_36 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_33 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_34 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_34 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#333333",
                      "border-right-color": "#333333",
                      "border-bottom-color": "#333333",
                      "border-left-color": "#333333"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_87 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_88 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_67 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_68 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_107 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
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
    } else if(jFirer.is("#s-Rectangle_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_35 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_31 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_36 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_33 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_34 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_35 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#333333",
                      "border-right-color": "#333333",
                      "border-bottom-color": "#333333",
                      "border-left-color": "#333333"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_87 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EA9C14"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_88 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EA9C14"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EA9C14"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EA9C14"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_67 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EA9C14"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_68 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EA9C14"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_107 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EA9C14"
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
    } else if(jFirer.is("#s-Rectangle_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_35 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_31 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_36 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_33 > .borderLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_34 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_36 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#333333",
                      "border-right-color": "#333333",
                      "border-bottom-color": "#333333",
                      "border-left-color": "#333333"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_87 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#004E9C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_88 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#004E9C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#004E9C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#004E9C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_67 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#004E9C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_68 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#004E9C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Rectangle_107 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#004E9C"
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
    } else if(jFirer.is("#s-Paragraph_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 span" ],
                    "attributes": {
                      "color": "#000000"
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_11",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_11" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimSubstring",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_11",
                            "property": "jimGetValue"
                          },"0","2" ]
                        },"12" ]
                      },{
                        "action": "jimSubstring",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_11",
                          "property": "jimGetValue"
                        },"2","5" ]
                      } ]
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
                    "variable": [ "AM/PM" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_58",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_59")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 span" ],
                    "attributes": {
                      "color": "#000000"
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_11",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_11" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimSubstring",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_11",
                            "property": "jimGetValue"
                          },"0","2" ]
                        },"12" ]
                      },{
                        "action": "jimSubstring",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_11",
                          "property": "jimGetValue"
                        },"2","5" ]
                      } ]
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
                    "variable": [ "AM/PM" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_59",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_23 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_22 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_25 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_27 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_24 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#D9E8FB"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_59" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_65" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_46" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_52" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_71" ]
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
    } else if(jFirer.is("#s-Hotspot_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_23 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_22 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_25 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_27 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_24 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#D9E8FB"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_58" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_64" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_15" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_51" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_70" ]
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
    } else if(jFirer.is("#s-Hotspot_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_23 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_22 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_25 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_27 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_24 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_23 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#D9E8FB"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_57" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_63" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_14" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_44" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_50" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_69" ]
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
    } else if(jFirer.is("#s-Hotspot_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_23 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_22 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_25 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_27 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_24 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_22 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#D9E8FB"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_56" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_62" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_43" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_49" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_68" ]
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
    } else if(jFirer.is("#s-Hotspot_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_23 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_22 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_25 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_27 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_24 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_24 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#D9E8FB"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_61" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_67" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_18" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_48" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_54" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_73" ]
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
    } else if(jFirer.is("#s-Hotspot_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_23 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_22 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_25 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_27 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_24 > .backgroundLayer > .colorLayer",
                  "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#D9E8FB"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_60" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"February-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_66" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_17" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"April-2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_53" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Month"
                },"March-3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_72" ]
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
    } else if(jFirer.is("#s-Path_56")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": ""
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
  .on("click", ".s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-04cbcadc-Hotspot_8")) {
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
                      "target": [ "#mi-04cbcadc-Dynamic_Panel_1" ],
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
  .on("pageload", ".s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_177 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_177 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#004E9C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Paragraph_19" ],
                    "value": "Calendar"
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
    }
  })
  .on("change", ".s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_11",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 span" ],
                    "attributes": {
                      "color": "#000000"
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_58 span" ],
                    "attributes": {
                      "color": "#000000"
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Paragraph_59 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
  .on("focusin", ".s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_12",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Input_12 > .borderLayer" ],
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
  .on("focusout", ".s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_12",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Input_12 > .borderLayer" ],
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
  .on("mouseenter dragenter", ".s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_89") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_89 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_89 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1976D2",
                      "border-right-color": "#1976D2",
                      "border-bottom-color": "#1976D2",
                      "border-left-color": "#1976D2"
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
    } else if(jFirer.is("#s-Hotspot_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_88 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_88 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1976D2",
                      "border-right-color": "#1976D2",
                      "border-bottom-color": "#1976D2",
                      "border-left-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_106" ]
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
    } else if(jFirer.is("#s-Button_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_20 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_20 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1976D2",
                      "border-right-color": "#1976D2",
                      "border-bottom-color": "#1976D2",
                      "border-left-color": "#1976D2"
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
    } else if(jFirer.is("#s-Hotspot_22") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_19 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_19 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1976D2",
                      "border-right-color": "#1976D2",
                      "border-bottom-color": "#1976D2",
                      "border-left-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_32" ]
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
    } else if(jFirer.is("#s-Hotspot_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_17 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1976D2",
                      "border-right-color": "#1976D2",
                      "border-bottom-color": "#1976D2",
                      "border-left-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_29" ]
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
    } else if(jFirer.is("#s-Button_70") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_70 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_70 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1976D2",
                      "border-right-color": "#1976D2",
                      "border-bottom-color": "#1976D2",
                      "border-left-color": "#1976D2"
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
    } else if(jFirer.is("#s-Hotspot_24") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_68 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_68 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1976D2",
                      "border-right-color": "#1976D2",
                      "border-bottom-color": "#1976D2",
                      "border-left-color": "#1976D2"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_85" ]
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_154 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_155 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_156 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_157 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_158 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_159 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_160 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_161 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_161 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_163 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_164 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_165 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #mi-04cbcadc-Cell_166 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-04cbcadc-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-04cbcadc-Rectangle_1" ]
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-04cbcadc-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-04cbcadc-Rectangle_2" ]
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-04cbcadc-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-04cbcadc-Rectangle_3" ]
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-04cbcadc-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-04cbcadc-Rectangle_5" ]
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-04cbcadc-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-04cbcadc-Rectangle_8" ]
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
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-04cbcadc-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-04cbcadc-Rectangle_9" ]
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
    } else if(jFirer.is("#s-Button_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_18" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 2px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_18 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is("#s-Input_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Input_12 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Hotspot_27") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
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
    } else if(jFirer.is("#s-Hotspot_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
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
    } else if(jFirer.is("#s-Hotspot_29") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_23 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
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
    } else if(jFirer.is("#s-Hotspot_30") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_22 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
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
    } else if(jFirer.is("#s-Hotspot_26") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_24 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
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
    } else if(jFirer.is("#s-Hotspot_33") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 #s-Button_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(157,201,245,0.1)"
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
  .on("mouseleave dragleave", ".s-7cd78be8-a68a-4a36-9ce5-3abdb1170ab0 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_89")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_70")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-04cbcadc-Hotspot_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_33")) {
      jEvent.undoCases(jFirer);
    }
  });