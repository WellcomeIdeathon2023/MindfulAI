jQuery("#simulation")
  .on("click", ".s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-8d5aec52-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_13 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_13 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_13 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_22 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_13 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_22 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_13 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_8 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_22 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_13 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_8 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_12 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_11 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_4 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_2 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_9 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_10 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_7 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_1 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_6 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_3 span",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Paragraph_5 span" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_6 svg" ],
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_3 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_4 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_7 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_11 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_9 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_16 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_15 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_5 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_10 svg",
                  "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_1")) {
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_2")) {
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_3")) {
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_5")) {
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
  .on("click", ".s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Input_1")) {
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
                      "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Current_row_1" ],
                      "attributes": {
                        "background-color": "#F0F6FE"
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_8")) {
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
                      "target": [ "#mi-8d5aec52-Dynamic_Panel_1" ],
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
  .on("pageload", ".s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Paragraph_19" ],
                    "value": "Archived Mails"
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
  .on("change", ".s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Category_1",
                  "property": "jimGetSelectedValue"
                },"PRIVATE" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Category_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Category_1" ],
                    "attributes": {
                      "color": "#7D7D7D"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ ".s-Path_22" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ ".s-Path_23" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Path_21 svg" ],
                    "attributes": {
                      "path-background-color": "#7D7D7D"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-Category_1",
                  "property": "jimGetSelectedValue"
                },"SHARED" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Category_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3765E3",
                      "border-right-color": "#3765E3",
                      "border-bottom-color": "#3765E3",
                      "border-left-color": "#3765E3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Category_1" ],
                    "attributes": {
                      "color": "#3765E3"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ ".s-Path_22" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ ".s-Path_23" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Path_21 svg" ],
                    "attributes": {
                      "path-background-color": "#3765E3",
                      "path-stroke": "#3765E3"
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
  .on("mouseenter dragenter", ".s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is(".s-Current_row_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": ".s-Input_1",
                "property": "jimGetValue"
              },
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
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Current_row_1" ],
                    "attributes": {
                      "background-color": "#F5F5F5"
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
    } else if(jFirer.is(".s-Hotspot_27") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": ".s-Input_1",
                "property": "jimGetValue"
              },
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
            },
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Input_1") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is(".s-Hotspot_26") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": ".s-Input_1",
                "property": "jimGetValue"
              },
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
            },
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Hotspot_25") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": ".s-Input_1",
                "property": "jimGetValue"
              },
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
            },
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Hotspot_21") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": ".s-Input_1",
                "property": "jimGetValue"
              },
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
            },
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Hotspot_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": ".s-Input_1",
                "property": "jimGetValue"
              },
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
            },
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Hotspot_23") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": ".s-Input_1",
                "property": "jimGetValue"
              },
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
            },
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Category_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Category_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#5E99F8",
                      "border-right-color": "#5E99F8",
                      "border-bottom-color": "#5E99F8",
                      "border-left-color": "#5E99F8"
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
    } else if(jFirer.is(".s-Hotspot_24") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": ".s-Input_1",
                "property": "jimGetValue"
              },
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
            },
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_22 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d #mi-8d5aec52-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-8d5aec52-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-8d5aec52-Rectangle_1" ]
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-8d5aec52-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-8d5aec52-Rectangle_2" ]
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-8d5aec52-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-8d5aec52-Rectangle_3" ]
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-8d5aec52-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-8d5aec52-Rectangle_5" ]
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-8d5aec52-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-8d5aec52-Rectangle_8" ]
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
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-8d5aec52-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-8d5aec52-Rectangle_9" ]
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
  .on("mouseleave dragleave", ".s-74c81c6a-bbb9-40fd-8bea-b897299a5d8d .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is(".s-Current_row_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Input_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Category_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8d5aec52-Hotspot_8")) {
      jEvent.undoCases(jFirer);
    }
  });