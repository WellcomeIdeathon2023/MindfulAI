jQuery("#simulation")
  .on("click", ".s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .click", function(event, data) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_16 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_16 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_1 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_1 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_13 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_13 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_13 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_69 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_13 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_69 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_13 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_8 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_69 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_13 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_8 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_19 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_18 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_5 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_3 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_16 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_17 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_12 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_1 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_9 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_4 span",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Paragraph_8 span" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_6 svg" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_3 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_4 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_7 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_11 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_9 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_16 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_15 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_5 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_10 svg",
                  "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Path_13 svg" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_1")) {
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
    } else if(jFirer.is("#mi-36149186-Hotspot_2")) {
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
    } else if(jFirer.is("#mi-36149186-Hotspot_3")) {
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
    } else if(jFirer.is("#mi-36149186-Hotspot_5")) {
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
    } else if(jFirer.is("#s-Rectangle_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f51d3d3e-4bec-4a4e-85cd-82564f94d302",
                    "transition": {
                      "type": "slideandfade",
                      "duration": 700
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
    } else if(jFirer.is("#s-Path_141")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Group_37",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_37" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_11","#s-Button_2","#s-Dynamic_Panel_4","#s-Button_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_37" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_11","#s-Button_2","#s-Dynamic_Panel_4","#s-Button_12" ]
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
    } else if(jFirer.is("#s-Rectangle_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Rectangle_28 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Rectangle_28 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Rectangle_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Rectangle_29 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#000000"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Rectangle_29 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6432FF"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_11 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_12 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_3 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_2 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ]
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
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6432FF"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_12 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_11 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_3 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_2 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6432FF"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_2 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_12 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_3 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_11 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6432FF"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_3 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_12 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_11 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#C0B6D1"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_2 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_7" ]
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
  .on("click", ".s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-36149186-Hotspot_8")) {
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
                      "target": [ "#mi-36149186-Dynamic_Panel_1" ],
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
  .on("pageload", ".s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327")) {
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
    } else if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
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
  .on("mouseleave dragleave", ".s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_39") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_39").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_39") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_3" ]
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
  .on("mouseenter dragenter", ".s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .mouseenter", function(event, data) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_16 > .borderLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .s-Category_9 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .s-Category_9 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .s-Category_9 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .s-Category_9 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Category_9 > .borderLayer" ],
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Button_1 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Category_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #s-Category_1 > .borderLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_69 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_71 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_72 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_73 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 #mi-36149186-Cell_74 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-36149186-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-36149186-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-36149186-Rectangle_2" ]
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
    } else if(jFirer.is("#mi-36149186-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-36149186-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-36149186-Rectangle_3" ]
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
    } else if(jFirer.is("#mi-36149186-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-36149186-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-36149186-Rectangle_4" ]
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
    } else if(jFirer.is("#mi-36149186-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-36149186-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-36149186-Rectangle_5" ]
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
    } else if(jFirer.is("#mi-36149186-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-36149186-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-36149186-Rectangle_8" ]
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
    } else if(jFirer.is("#mi-36149186-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-36149186-Dynamic_Panel_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-36149186-Rectangle_9" ]
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
    } else if(jFirer.is("#s-Rectangle_39") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Image_3" ]
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
    } else if(jFirer.is("#s-Paragraph_88") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Image_3" ]
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
    } else if(jFirer.is("#s-Paragraph_89") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Image_3" ]
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
  .on("mouseleave dragleave", ".s-0f9f3a91-f0cd-4fc6-94ad-e80b0aed7327 .mouseleave", function(event, data) {
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
    } else if(jFirer.is("#s-Category_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-36149186-Hotspot_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_39")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_88")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_89")) {
      jEvent.undoCases(jFirer);
    }
  });