jQuery("#simulation")
  .on("click", ".s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Button_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#CFE0F6"
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Button_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#CFE0F6"
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Paragraph_20")) {
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_29 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_29 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_29 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_22 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_29 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_22 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_29 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_25 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_22 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_29 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_25 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_34 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_33 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_24 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_2 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_31 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_32 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_28 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_1 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_27 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_21 span",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Paragraph_26 span" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_29 svg" ],
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_19 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_17 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_26 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_22 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_24 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_28 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_27 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_20 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_21 svg",
                  "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Path_23 svg" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_1")) {
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_2")) {
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_3")) {
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_5")) {
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
  })
  .on("click", ".s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-2c289f60-Hotspot_8")) {
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
                      "target": [ "#mi-2c289f60-Dynamic_Panel_1" ],
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
  .on("pageload", ".s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Paragraph_19" ],
                    "value": "Dashboard"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_76 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_76 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#004E9C"
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
  .on("mouseenter dragenter", ".s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Button_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Button_16 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Category_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 .s-Category_9 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 .s-Category_9 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 .s-Category_9 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 .s-Category_9 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Category_9 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Button_1 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Paragraph_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Paragraph_20 span" ],
                    "attributes": {
                      "text-decoration": "underline"
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
    } else if(jFirer.is("#s-Paragraph_22") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Paragraph_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #s-Paragraph_23 span" ],
                    "attributes": {
                      "color": "#0A58CA"
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
    } else if(jFirer.is("#s-Paragraph_45") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_22 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 #mi-2c289f60-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-2c289f60-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-2c289f60-Rectangle_9" ]
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-2c289f60-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-2c289f60-Rectangle_11" ]
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-2c289f60-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-2c289f60-Rectangle_12" ]
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-2c289f60-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-2c289f60-Rectangle_13" ]
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-2c289f60-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-2c289f60-Rectangle_14" ]
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
    } else if(jFirer.is("#mi-2c289f60-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-2c289f60-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-2c289f60-Rectangle_15" ]
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
    } else if(jFirer.is("#s-Path_10") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_11") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_12") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_4") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_8") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Path_2") && jFirer.has(event.relatedTarget).length === 0) {
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
    }
  })
  .on("mouseleave dragleave", ".s-f51d3d3e-4bec-4a4e-85cd-82564f94d302 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Category_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_45")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2c289f60-Hotspot_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_2")) {
      jEvent.undoCases(jFirer);
    }
  });