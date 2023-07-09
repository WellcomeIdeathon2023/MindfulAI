jQuery("#simulation")
  .on("click", ".s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_25 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
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
    } else if(jFirer.is("#s-Path_191")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_191 svg" ],
                    "attributes": {
                      "path-background-color": "#6E8D68"
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_191 svg" ],
                    "attributes": {
                      "path-background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "z"
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
    } else if(jFirer.is("#s-Rectangle_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "y"
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
    } else if(jFirer.is("#s-Rectangle_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "x"
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
    } else if(jFirer.is("#s-Rectangle_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "w"
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
    } else if(jFirer.is("#s-Rectangle_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "v"
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
    } else if(jFirer.is("#s-Rectangle_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "u"
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
    } else if(jFirer.is("#s-Rectangle_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "t"
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
    } else if(jFirer.is("#s-Rectangle_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "s"
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
    } else if(jFirer.is("#s-Rectangle_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "r"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "q"
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
    } else if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "p"
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
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "o"
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
                  "datatype": "datamaster",
                  "datamaster": "Contacts"
                },"" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "n"
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
    } else if(jFirer.is("#s-Rectangle_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "m"
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
    } else if(jFirer.is("#s-Rectangle_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "l"
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
    } else if(jFirer.is("#s-Rectangle_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "k"
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
    } else if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "j"
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "i"
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "h"
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
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "g"
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
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "f"
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
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "e"
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
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "d"
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
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "c"
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
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "b"
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Contacts" ],
                    "value": "a"
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
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "Contacts"
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_2 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_3" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "Contacts"
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
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
    } else if(jFirer.is("#s-Path_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
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
    } else if(jFirer.is(".s-Rectangle_37")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_7",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimCursorY"
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "1136.0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ]
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
    } else if(jFirer.is(".s-Path_192")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_7",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimCursorY"
                      }
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "1136.0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ]
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_10 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_9 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_10 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_9 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_1 span" ],
                    "attributes": {
                      "color": "#266FD6",
                      "font-family": "'Roboto',Arial",
                      "font-style": "normal",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_14 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_15 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_5 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_4 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_2 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_8 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
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
    } else if(jFirer.is("#s-Hotspot_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_10 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_8 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_10 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_14 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Bold_wgt700',Arial",
                      "font-weight": "700",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_15 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_1 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_2 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_5 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_4 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_9 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_9 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
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
    } else if(jFirer.is("#s-Hotspot_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_9 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_8 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_9 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F5F5F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_15 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Bold_wgt700',Arial",
                      "font-weight": "700",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_14 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_1 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_2 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_4 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Path_5 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_10 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_10 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
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
    } else if(jFirer.is("#s-Cell_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Cell_49")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Cell_50")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Cell_51")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Cell_52")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Cell_53")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Hotspot_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Hotspot_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Hotspot_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_30 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_30 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_30 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_34 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_30 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_34 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_30 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_21 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_34 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_30 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_21 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_35 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_34 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_26 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_16 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_32 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_33 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_29 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_8 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_28 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_19 span",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Paragraph_27 span" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_25 svg" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_13 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_11 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_22 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_18 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_20 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_24 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_23 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_16 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_17 svg",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Path_19 svg" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_1")) {
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_2")) {
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_3")) {
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_5")) {
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
    } else if(jFirer.is("#s-Path_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_1 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#2E7D32"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Contacts",
                    "fields": {
                      "60c958fc-42e5-4934-9d7f-c2a297820007": {
                        "datatype": "property",
                        "target": "#s-Input_8",
                        "property": "jimGetValue"
                      },
                      "7a80049b-7982-40c7-96bc-b5d00f30bcdf": {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },
                      "4ec913c3-5ec6-4694-ba62-c17de5409468": {
                        "datatype": "property",
                        "target": "#s-Input_9",
                        "property": "jimGetValue"
                      },
                      "ecb60ee0-52a7-40e2-9ef9-fd3cf7437da3": {
                        "datatype": "property",
                        "target": "#s-Input_10",
                        "property": "jimGetValue"
                      },
                      "ac06dba4-e66b-4b10-88e2-e6e15463d86b": {
                        "datatype": "property",
                        "target": "#s-Category_1",
                        "property": "jimGetSelectedValue"
                      },
                      "7c9eabe2-7142-4db3-9c70-9c29ef947ce6": {
                        "datatype": "property",
                        "target": "#s-Input_18",
                        "property": "jimGetValue"
                      },
                      "e1825fcc-d41a-4d35-a6c8-3b7f9ab8ea3d": {
                        "datatype": "property",
                        "target": "#s-Image_4",
                        "property": "jimGetValue"
                      },
                      "459a1b0b-0592-4275-bcb0-10e6a498fc87": null,
                      "612701ad-9446-40e2-a9f6-3456cdf8135d": null,
                      "14922762-3420-4b10-99f9-6ea3e7552213": null,
                      "f9e22e9b-c8ce-4992-bf50-7bd31f6e688f": {
                        "datatype": "property",
                        "target": "#s-Image_5",
                        "property": "jimGetValue"
                      },
                      "8c41821c-db46-4951-92e8-7331ba841c8b": {
                        "datatype": "property",
                        "target": "#s-Image_6",
                        "property": "jimGetValue"
                      },
                      "38f3f726-4ec4-4560-9f2f-224a472f9b49": null,
                      "bec78415-8c4e-41aa-bc5a-f3817635cf84": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "Contacts"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_3" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "Contacts"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_17 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_6" ]
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
  .on("click", ".s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-0cad7f2a-Hotspot_8")) {
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
                      "target": [ "#mi-0cad7f2a-Dynamic_Panel_3" ],
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
  .on("pageload", ".s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Paragraph_19" ],
                    "value": "Contacts"
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
    } else if(jFirer.is("#s-Paragraph_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Contacts"
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
  .on("change", ".s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Contacts",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "ac06dba4-e66b-4b10-88e2-e6e15463d86b"
                          },{
                            "datatype": "property",
                            "target": "#s-Category_4",
                            "property": "jimGetSelectedValue"
                          } ]
                        }
                      }
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
    } else if(jFirer.is("#s-Category_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_3" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Contacts",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "ac06dba4-e66b-4b10-88e2-e6e15463d86b"
                          },{
                            "datatype": "property",
                            "target": "#s-Category_2",
                            "property": "jimGetSelectedValue"
                          } ]
                        }
                      }
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
  .on("focusin", ".s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-26.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_10 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-size": "9.0pt",
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_7 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-26.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-size": "9.0pt",
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_8 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_9",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_12" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-26.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-size": "9.0pt",
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_9 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_10",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_13" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-26.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_13 span" ],
                    "attributes": {
                      "color": "#1976D2",
                      "font-family": "'Roboto',Arial",
                      "font-size": "9.0pt",
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_10 > .borderLayer" ],
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
  .on("focusout", ".s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "26.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_10 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Roboto-Light_wgt300',Arial",
                      "font-size": "12.0pt",
                      "font-weight": "300",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_7 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "26.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Roboto-Light_wgt300',Arial",
                      "font-size": "12.0pt",
                      "font-weight": "300",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_8 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_9",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_12" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "26.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Roboto-Light_wgt300',Arial",
                      "font-size": "12.0pt",
                      "font-weight": "300",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_9 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_10",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_13" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "26.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Paragraph_13 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Roboto-Light_wgt300',Arial",
                      "font-size": "12.0pt",
                      "font-weight": "300",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_10 > .borderLayer" ],
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
  .on("mouseenter dragenter", ".s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_25") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_25" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 2px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#315D28"
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
    } else if(jFirer.is("#s-Path_191") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_25" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 2px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#315D28"
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
    } else if(jFirer.is("#s-Rectangle_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_28 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_23 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_24") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_24 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_25") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_25 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_26") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_27") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_27 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_18 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_19 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_20 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_21 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_22") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_22 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_16 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_17 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_1 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Current_row_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Hotspot_25") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Hotspot_24") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Hotspot_26") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Input_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Rectangle_36" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimCursorY"
                      }
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_36" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Rectangle_36" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_4",
                      "property": "jimGetValue"
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
    } else if(jFirer.is(".s-Hotspot_27") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Data_grid_1 .s-Current_row_1" ],
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
    } else if(jFirer.is(".s-Input_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Rectangle_36" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimCursorY"
                      }
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_36" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Rectangle_36" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_12",
                      "property": "jimGetValue"
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
    } else if(jFirer.is(".s-Hotspot_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Data_grid_1 .s-Current_row_1" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_4 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_4 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_4 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_4 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Category_4 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Category_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_2 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_2 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_2 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_2 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Category_2 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_2 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_3" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 2px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Path_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_3" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 2px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Rectangle_37") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Data_grid_4 .s-Rectangle_37 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
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
    } else if(jFirer.is(".s-Path_192") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Data_grid_4 .s-Rectangle_37 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
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
    } else if(jFirer.is("#s-Hotspot_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_8 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#ECECED"
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
    } else if(jFirer.is("#s-Hotspot_22") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_9 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_9 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#ECECED"
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
    } else if(jFirer.is("#s-Hotspot_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_10 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_10 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#ECECED"
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
    } else if(jFirer.is("#s-Cell_48") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Cell_49") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Cell_50") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Cell_51") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Cell_52") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Cell_53") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Hotspot_31") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Hotspot_32") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 .verticalalign",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_26 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_28 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_29 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_34 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #mi-0cad7f2a-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-0cad7f2a-Dynamic_Panel_7" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-0cad7f2a-Rectangle_42" ]
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-0cad7f2a-Dynamic_Panel_7" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-0cad7f2a-Rectangle_43" ]
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-0cad7f2a-Dynamic_Panel_7" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-0cad7f2a-Rectangle_44" ]
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-0cad7f2a-Dynamic_Panel_7" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-0cad7f2a-Rectangle_45" ]
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-0cad7f2a-Dynamic_Panel_7" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-0cad7f2a-Rectangle_46" ]
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
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-0cad7f2a-Dynamic_Panel_7" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-0cad7f2a-Rectangle_47" ]
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
    } else if(jFirer.is("#s-Input_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_7 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_8 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_9 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Input_10 > .borderLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Category_1 > .borderLayer" ],
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 2px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_1 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-e8e0b0dc-0d56-4155-95cd-e964af486fdf #s-Button_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EAF1FA"
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
  .on("mouseleave dragleave", ".s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_191")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Current_row_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Input_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Input_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Category_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Category_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Rectangle_37")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Path_192")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Cell_48")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Cell_49")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Cell_50")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Cell_51")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Cell_52")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Cell_53")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_31")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_32")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-0cad7f2a-Hotspot_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Category_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_17")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("variablechange.jim", ".s-e8e0b0dc-0d56-4155-95cd-e964af486fdf .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Contacts"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Contacts",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "action": "jimSubstring",
                            "parameter": [ {
                              "field": "60c958fc-42e5-4934-9d7f-c2a297820007"
                            },"0","1" ]
                          },{
                            "datatype": "variable",
                            "element": "Contacts"
                          } ]
                        }
                      }
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
  });