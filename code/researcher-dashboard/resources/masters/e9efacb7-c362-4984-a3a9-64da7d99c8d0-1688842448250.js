jQuery("#simulation")
  .on("click", ".m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 .click,.m-e9efacb7-c362-4984-a3a9-64da7d99c8d0.click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg" ],
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
    } else if(jFirer.is("#Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_13 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span" ],
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
    } else if(jFirer.is("#Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_13 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg" ],
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
    } else if(jFirer.is("#Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_13 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg" ],
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
    } else if(jFirer.is("#Hotspot_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg" ],
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
    } else if(jFirer.is("#Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_22 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_13 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg" ],
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
    } else if(jFirer.is("#Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_22 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_13 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_8 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg" ],
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
    } else if(jFirer.is("#Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_22 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_13 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_8 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg" ],
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
    } else if(jFirer.is("#Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg" ],
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
    } else if(jFirer.is("#Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg" ],
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
    } else if(jFirer.is("#Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg" ],
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
    } else if(jFirer.is("#Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_12 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_11 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_4 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_2 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_9 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_10 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_7 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_1 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_6 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_3 span",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Paragraph_5 span" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_6 svg" ],
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_3 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_4 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_7 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_11 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_9 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_16 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_15 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_5 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_10 svg",
                  "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Path_13 svg" ],
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
    } else if(jFirer.is("#Hotspot_1")) {
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
    } else if(jFirer.is("#Hotspot_2")) {
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
    } else if(jFirer.is("#Hotspot_3")) {
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
    } else if(jFirer.is("#Hotspot_5")) {
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
  .on("click", ".m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 .toggle,.m-e9efacb7-c362-4984-a3a9-64da7d99c8d0.toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Hotspot_8")) {
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
                      "target": [ "#Dynamic_Panel_1" ],
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
  .on("mouseenter dragenter", ".m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 .mouseenter,.m-e9efacb7-c362-4984-a3a9-64da7d99c8d0.mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_14 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_15 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_16 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_17 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_18 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_19 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_22 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_23 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_24 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_25 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#Hotspot_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 #Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#Rectangle_1" ]
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
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#Rectangle_2" ]
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
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#Rectangle_3" ]
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
    } else if(jFirer.is("#Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#Rectangle_5" ]
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
    } else if(jFirer.is("#Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#Rectangle_8" ]
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
    } else if(jFirer.is("#Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#Rectangle_9" ]
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
  .on("mouseleave dragleave", ".m-e9efacb7-c362-4984-a3a9-64da7d99c8d0 .mouseleave,.m-e9efacb7-c362-4984-a3a9-64da7d99c8d0.mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#Hotspot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#Hotspot_8")) {
      jEvent.undoCases(jFirer);
    }
  });