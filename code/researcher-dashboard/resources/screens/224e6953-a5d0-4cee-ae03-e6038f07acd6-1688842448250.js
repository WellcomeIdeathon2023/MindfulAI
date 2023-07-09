jQuery("#simulation")
  .on("click", ".s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Hotspot_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Emails",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "edbec6f0-1256-4edd-8ece-b6490d4ee413"
                          },{
                            "datatype": "property",
                            "target": ".s-Input_20",
                            "property": "jimGetValue"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "fields": {
                      "2ee50cd9-51b2-4417-b818-c43b3cc3ef26": null,
                      "e38fa410-bd75-4ada-876a-d8d1c393ba1b": null,
                      "5e54f2c9-72bf-4796-ad15-43b405c5a559": null,
                      "ebe7f5cb-b63f-445e-9c8d-41396d44920a": null,
                      "e184adea-0cde-42d9-83d0-57695e2f4639": null,
                      "edbec6f0-1256-4edd-8ece-b6490d4ee413": null,
                      "615ee1a0-a06c-46ae-b0b7-8688bf802d9d": null,
                      "fb9b7805-e4b5-40fa-81f6-9bf6c26a7947": null,
                      "427a74f8-ccc3-4445-88a2-9cf743e1c44b": null,
                      "3df5a099-2dec-4251-91f4-04ec61828bc9": null,
                      "972df938-a964-4b0b-8f96-519e106d78d7": null,
                      "ed9bc392-8d9a-4c39-a6d1-bddf6fd5d925": null,
                      "eb9b97a8-f96d-4902-9e6d-ea848c46babc": null,
                      "7b33f487-106a-4d43-892f-64b803bb513d": null,
                      "bcbb88e0-f87b-4f7b-9870-814f0b01561a": null,
                      "5e887a1d-06fe-4a8e-aa77-88fa90cdef3a": null,
                      "fcc10228-ac3b-4f73-93d9-1c2d0b445ec4": "true"
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
    } else if(jFirer.is(".s-Hotspot_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Emails",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "edbec6f0-1256-4edd-8ece-b6490d4ee413"
                          },{
                            "datatype": "property",
                            "target": ".s-Input_20",
                            "property": "jimGetValue"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "fields": {
                      "2ee50cd9-51b2-4417-b818-c43b3cc3ef26": null,
                      "e38fa410-bd75-4ada-876a-d8d1c393ba1b": null,
                      "5e54f2c9-72bf-4796-ad15-43b405c5a559": null,
                      "ebe7f5cb-b63f-445e-9c8d-41396d44920a": null,
                      "e184adea-0cde-42d9-83d0-57695e2f4639": null,
                      "edbec6f0-1256-4edd-8ece-b6490d4ee413": null,
                      "615ee1a0-a06c-46ae-b0b7-8688bf802d9d": null,
                      "fb9b7805-e4b5-40fa-81f6-9bf6c26a7947": null,
                      "427a74f8-ccc3-4445-88a2-9cf743e1c44b": null,
                      "3df5a099-2dec-4251-91f4-04ec61828bc9": null,
                      "972df938-a964-4b0b-8f96-519e106d78d7": null,
                      "ed9bc392-8d9a-4c39-a6d1-bddf6fd5d925": null,
                      "eb9b97a8-f96d-4902-9e6d-ea848c46babc": null,
                      "7b33f487-106a-4d43-892f-64b803bb513d": null,
                      "bcbb88e0-f87b-4f7b-9870-814f0b01561a": null,
                      "5e887a1d-06fe-4a8e-aa77-88fa90cdef3a": null,
                      "fcc10228-ac3b-4f73-93d9-1c2d0b445ec4": "true"
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
    } else if(jFirer.is(".s-Hotspot_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Emails",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "edbec6f0-1256-4edd-8ece-b6490d4ee413"
                          },{
                            "datatype": "property",
                            "target": ".s-Input_20",
                            "property": "jimGetValue"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "fields": {
                      "2ee50cd9-51b2-4417-b818-c43b3cc3ef26": null,
                      "e38fa410-bd75-4ada-876a-d8d1c393ba1b": null,
                      "5e54f2c9-72bf-4796-ad15-43b405c5a559": null,
                      "ebe7f5cb-b63f-445e-9c8d-41396d44920a": null,
                      "e184adea-0cde-42d9-83d0-57695e2f4639": null,
                      "edbec6f0-1256-4edd-8ece-b6490d4ee413": null,
                      "615ee1a0-a06c-46ae-b0b7-8688bf802d9d": null,
                      "fb9b7805-e4b5-40fa-81f6-9bf6c26a7947": null,
                      "427a74f8-ccc3-4445-88a2-9cf743e1c44b": null,
                      "3df5a099-2dec-4251-91f4-04ec61828bc9": null,
                      "972df938-a964-4b0b-8f96-519e106d78d7": null,
                      "ed9bc392-8d9a-4c39-a6d1-bddf6fd5d925": null,
                      "eb9b97a8-f96d-4902-9e6d-ea848c46babc": null,
                      "7b33f487-106a-4d43-892f-64b803bb513d": null,
                      "bcbb88e0-f87b-4f7b-9870-814f0b01561a": null,
                      "5e887a1d-06fe-4a8e-aa77-88fa90cdef3a": null,
                      "fcc10228-ac3b-4f73-93d9-1c2d0b445ec4": "true"
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
    } else if(jFirer.is(".s-Hotspot_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Emails",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "edbec6f0-1256-4edd-8ece-b6490d4ee413"
                          },{
                            "datatype": "property",
                            "target": ".s-Input_20",
                            "property": "jimGetValue"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "fields": {
                      "2ee50cd9-51b2-4417-b818-c43b3cc3ef26": null,
                      "e38fa410-bd75-4ada-876a-d8d1c393ba1b": null,
                      "5e54f2c9-72bf-4796-ad15-43b405c5a559": null,
                      "ebe7f5cb-b63f-445e-9c8d-41396d44920a": null,
                      "e184adea-0cde-42d9-83d0-57695e2f4639": null,
                      "edbec6f0-1256-4edd-8ece-b6490d4ee413": null,
                      "615ee1a0-a06c-46ae-b0b7-8688bf802d9d": null,
                      "fb9b7805-e4b5-40fa-81f6-9bf6c26a7947": null,
                      "427a74f8-ccc3-4445-88a2-9cf743e1c44b": null,
                      "3df5a099-2dec-4251-91f4-04ec61828bc9": null,
                      "972df938-a964-4b0b-8f96-519e106d78d7": null,
                      "ed9bc392-8d9a-4c39-a6d1-bddf6fd5d925": null,
                      "eb9b97a8-f96d-4902-9e6d-ea848c46babc": null,
                      "7b33f487-106a-4d43-892f-64b803bb513d": null,
                      "bcbb88e0-f87b-4f7b-9870-814f0b01561a": null,
                      "5e887a1d-06fe-4a8e-aa77-88fa90cdef3a": null,
                      "fcc10228-ac3b-4f73-93d9-1c2d0b445ec4": "true"
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
    } else if(jFirer.is(".s-Hotspot_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Emails",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "edbec6f0-1256-4edd-8ece-b6490d4ee413"
                          },{
                            "datatype": "property",
                            "target": ".s-Input_20",
                            "property": "jimGetValue"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "fields": {
                      "2ee50cd9-51b2-4417-b818-c43b3cc3ef26": null,
                      "e38fa410-bd75-4ada-876a-d8d1c393ba1b": null,
                      "5e54f2c9-72bf-4796-ad15-43b405c5a559": null,
                      "ebe7f5cb-b63f-445e-9c8d-41396d44920a": null,
                      "e184adea-0cde-42d9-83d0-57695e2f4639": null,
                      "edbec6f0-1256-4edd-8ece-b6490d4ee413": null,
                      "615ee1a0-a06c-46ae-b0b7-8688bf802d9d": null,
                      "fb9b7805-e4b5-40fa-81f6-9bf6c26a7947": null,
                      "427a74f8-ccc3-4445-88a2-9cf743e1c44b": null,
                      "3df5a099-2dec-4251-91f4-04ec61828bc9": null,
                      "972df938-a964-4b0b-8f96-519e106d78d7": null,
                      "ed9bc392-8d9a-4c39-a6d1-bddf6fd5d925": null,
                      "eb9b97a8-f96d-4902-9e6d-ea848c46babc": null,
                      "7b33f487-106a-4d43-892f-64b803bb513d": null,
                      "bcbb88e0-f87b-4f7b-9870-814f0b01561a": null,
                      "5e887a1d-06fe-4a8e-aa77-88fa90cdef3a": null,
                      "fcc10228-ac3b-4f73-93d9-1c2d0b445ec4": "true"
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
    } else if(jFirer.is(".s-Hotspot_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_1" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Emails",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "edbec6f0-1256-4edd-8ece-b6490d4ee413"
                          },{
                            "datatype": "property",
                            "target": ".s-Input_20",
                            "property": "jimGetValue"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "fields": {
                      "2ee50cd9-51b2-4417-b818-c43b3cc3ef26": null,
                      "e38fa410-bd75-4ada-876a-d8d1c393ba1b": null,
                      "5e54f2c9-72bf-4796-ad15-43b405c5a559": null,
                      "ebe7f5cb-b63f-445e-9c8d-41396d44920a": null,
                      "e184adea-0cde-42d9-83d0-57695e2f4639": null,
                      "edbec6f0-1256-4edd-8ece-b6490d4ee413": null,
                      "615ee1a0-a06c-46ae-b0b7-8688bf802d9d": null,
                      "fb9b7805-e4b5-40fa-81f6-9bf6c26a7947": null,
                      "427a74f8-ccc3-4445-88a2-9cf743e1c44b": null,
                      "3df5a099-2dec-4251-91f4-04ec61828bc9": null,
                      "972df938-a964-4b0b-8f96-519e106d78d7": null,
                      "ed9bc392-8d9a-4c39-a6d1-bddf6fd5d925": null,
                      "eb9b97a8-f96d-4902-9e6d-ea848c46babc": null,
                      "7b33f487-106a-4d43-892f-64b803bb513d": null,
                      "bcbb88e0-f87b-4f7b-9870-814f0b01561a": null,
                      "5e887a1d-06fe-4a8e-aa77-88fa90cdef3a": null,
                      "fcc10228-ac3b-4f73-93d9-1c2d0b445ec4": "true"
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
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Input_19",
                "property": "jimGetValue"
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-Input_21","#s-Input_19" ],
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Current_row_2" ],
                    "attributes": {
                      "background-color": "#F0F6FE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_19",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-Input_21","#s-Input_19" ],
                    "value": "false"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Current_row_2" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_129 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_129 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
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
    } else if(jFirer.is("#s-Hotspot_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_116 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Path_113 svg" ],
                    "attributes": {
                      "path-stroke": "#E8E8E8"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_116 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Path_113 svg" ],
                    "attributes": {
                      "path-stroke": "#FFFFFF"
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
    } else if(jFirer.is("#s-Path_138")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_23" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_138" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Input_23 > .borderLayer" ],
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
                    "target": [ "#s-Path_138" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Path_139 svg" ],
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_2 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_2 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Hotspot_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
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
    } else if(jFirer.is("#s-Hotspot_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
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
    } else if(jFirer.is("#s-Hotspot_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E8E8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
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
    } else if(jFirer.is("#s-Path_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_5 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_6 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_4 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
    } else if(jFirer.is(".s-Cell_60")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_64")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_61")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_65")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_62")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_66")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_63")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_67")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Rectangle_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Rectangle_23 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Rectangle_23 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
    } else if(jFirer.is(".s-Path_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Rectangle_23 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Rectangle_23 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_13 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_13 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_13 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_37 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_13 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_37 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_13 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_8 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_13 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_8 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_14 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_12 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_5 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_3 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_10 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_11 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_8 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_2 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_7 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_4 span",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Paragraph_6 span" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_6 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_3 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_4 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_7 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_11 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_9 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_19 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_18 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_5 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_10 svg",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Path_15 svg" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_1")) {
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_2")) {
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_3")) {
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_5")) {
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
  .on("click", ".s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Input_21")) {
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
                      "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Current_row_2" ],
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
    } else if(jFirer.is("#s-Rectangle_116")) {
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
                      "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_116 > .backgroundLayer > .colorLayer" ],
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
                      "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_116 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#E8E8E8"
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
    } else if(jFirer.is("#s-Category_11")) {
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
                    "action": "jimRotate",
                    "parameter": {
                      "target": [ "#s-Group_117" ],
                      "angle": {
                        "type": "rotateto",
                        "value": "180.0"
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
    } else if(jFirer.is("#s-Rectangle_10")) {
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
                      "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
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
                      "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#E8E8E8"
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_8")) {
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
                      "target": [ "#mi-7d607fa9-Dynamic_Panel_2" ],
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
  .on("pageload", ".s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-224e6953-a5d0-4cee-ae03-e6038f07acd6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#t-Paragraph_19" ],
                    "value": "Mail"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_77 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_77 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Paragraph_176")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_176" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimCountData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Emails"
                        }
                      }," converations" ]
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
  .on("change", ".s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .change", function(event, data) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Category_1 > .borderLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Category_1" ],
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
                    "target": [ ".s-Path_133" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ ".s-Path_134" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Path_132 svg" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Category_1 > .borderLayer" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Category_1" ],
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
                    "target": [ ".s-Path_133" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ ".s-Path_134" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Path_132 svg" ],
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
    } else if(jFirer.is("#s-Category_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Category_11" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMax",
                        "parameter": [ {
                          "action": "jimPlus",
                          "parameter": [ {
                            "action": "jimMultiply",
                            "parameter": [ {
                              "action": "jimCount",
                              "parameter": [ {
                                "datatype": "property",
                                "target": "#s-Category_11",
                                "property": "jimGetSelectedValue"
                              } ]
                            },"12" ]
                          },"10" ]
                        },"148" ]
                      }
                    },
                    "height": {
                      "type": "noresize"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_117" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMax",
                        "parameter": [ {
                          "action": "jimPlus",
                          "parameter": [ {
                            "action": "jimMinus",
                            "parameter": [ {
                              "action": "jimMultiply",
                              "parameter": [ {
                                "action": "jimCount",
                                "parameter": [ {
                                  "datatype": "property",
                                  "target": "#s-Category_11",
                                  "property": "jimGetSelectedValue"
                                } ]
                              },"12" ]
                            },"20" ]
                          },{
                            "datatype": "property",
                            "target": "#s-Category_11",
                            "property": "jimGetPositionX"
                          } ]
                        },{
                          "action": "jimPlus",
                          "parameter": [ "120",{
                            "datatype": "property",
                            "target": "#s-Category_11",
                            "property": "jimGetPositionX"
                          } ]
                        } ]
                      }
                    },
                    "containment": false
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
                  "datatype": "property",
                  "target": "#s-Category_11",
                  "property": "jimGetSelectedValue"
                },"To: me" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_2" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Emails",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "5e54f2c9-72bf-4796-ad15-43b405c5a559"
                          },"me" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_176" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimCountData",
                        "parameter": {
                          "action": "jimFilterData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "Emails",
                            "value": {
                              "action": "jimEquals",
                              "parameter": [ {
                                "field": "5e54f2c9-72bf-4796-ad15-43b405c5a559"
                              },"me" ]
                            }
                          }
                        }
                      }," conversations" ]
                    }
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
                  "datatype": "property",
                  "target": "#s-Category_11",
                  "property": "jimGetSelectedValue"
                },"From a contact" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_2" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Emails",
                        "value": {
                          "action": "jimNotEquals",
                          "parameter": [ {
                            "field": "5e54f2c9-72bf-4796-ad15-43b405c5a559"
                          },"me" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_176" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimCountData",
                        "parameter": {
                          "action": "jimFilterData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "Emails",
                            "value": {
                              "action": "jimNotEquals",
                              "parameter": [ {
                                "field": "5e54f2c9-72bf-4796-ad15-43b405c5a559"
                              },"me" ]
                            }
                          }
                        }
                      }," conversations" ]
                    }
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
                  "datatype": "property",
                  "target": "#s-Category_11",
                  "property": "jimGetSelectedValue"
                },"All" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_2" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "Emails"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_176" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimCountData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Emails"
                        }
                      }," conversations" ]
                    }
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
                  "datatype": "property",
                  "target": "#s-Category_11",
                  "property": "jimGetSelectedValue"
                },"Read" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_2" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Emails",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "fcc10228-ac3b-4f73-93d9-1c2d0b445ec4"
                          },"true" ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_176" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimCountData",
                        "parameter": {
                          "action": "jimFilterData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "Emails",
                            "value": {
                              "action": "jimEquals",
                              "parameter": [ {
                                "field": "fcc10228-ac3b-4f73-93d9-1c2d0b445ec4"
                              },"true" ]
                            }
                          }
                        }
                      }," conversations" ]
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
    } else if(jFirer.is("#s-Input_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_23" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Emails",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "5e54f2c9-72bf-4796-ad15-43b405c5a559"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_23",
                            "property": "jimGetValue"
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
  .on("focusin", ".s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_23")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_23",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Input_23 > .borderLayer" ],
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
                    "target": [ "#s-Path_138" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Path_139 svg" ],
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
  .on("focusout", ".s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_23")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_23",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Input_23 > .borderLayer" ],
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
                    "target": [ "#s-Path_138" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Path_139 svg" ],
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
  .on("mouseenter dragenter", ".s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is(".s-Hotspot_37") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Current_row_2" ],
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
    } else if(jFirer.is(".s-Input_21") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is(".s-Hotspot_38") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Current_row_2" ],
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
    } else if(jFirer.is(".s-Hotspot_33") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Current_row_2" ],
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
    } else if(jFirer.is(".s-Hotspot_34") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Current_row_2" ],
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
    } else if(jFirer.is(".s-Hotspot_35") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Current_row_2" ],
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Category_1 > .borderLayer" ],
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
    } else if(jFirer.is(".s-Hotspot_36") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_2 .s-Current_row_2" ],
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
    } else if(jFirer.is("#s-Input_19") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Rectangle_116") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Category_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Category_11 .icon" ],
                    "attributes": {
                      "background-image": "url('./images/ddbcaa17-8acd-43ea-82e1-9be30f92f2f2.png')",
                      "background-size": "auto"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Category_11 .value" ],
                    "attributes": {
                      "margin-right": "12.0px"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_11 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_11 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_11 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .s-Category_11 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Category_11 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Input_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Input_23 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_10") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Path_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_5 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_6 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_4 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_60") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_64") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_61") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_65") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_62") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_66") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_63") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Cell_67") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 .verticalalign",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is(".s-Path_41") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Path_41" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Paragraph_46" ],
                    "attributes": {
                      "opacity": "0.7"
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
    } else if(jFirer.is(".s-Paragraph_46") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Path_41" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Data_grid_1 .s-Paragraph_46" ],
                    "attributes": {
                      "opacity": "0.7"
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_10" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 2px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #s-Button_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#315D28"
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
    } else if(jFirer.is("#s-Hotspot_27") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Ellipse_1","#s-Rectangle_25" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
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
    } else if(jFirer.is("#s-Hotspot_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Ellipse_6","#s-Rectangle_26" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
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
    } else if(jFirer.is("#s-Hotspot_29") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Ellipse_7","#s-Rectangle_27" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
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
    } else if(jFirer.is("#s-Hotspot_30") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Rectangle_28","#s-Ellipse_8" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
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
    } else if(jFirer.is("#s-Hotspot_31") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-Rectangle_29","#s-Ellipse_9" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_30 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_31 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_32 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_33 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_34 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_35 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-224e6953-a5d0-4cee-ae03-e6038f07acd6 #mi-7d607fa9-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-7d607fa9-Dynamic_Panel_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-7d607fa9-Rectangle_1" ]
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-7d607fa9-Dynamic_Panel_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-7d607fa9-Rectangle_3" ]
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-7d607fa9-Dynamic_Panel_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-7d607fa9-Rectangle_4" ]
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-7d607fa9-Dynamic_Panel_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-7d607fa9-Rectangle_5" ]
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-7d607fa9-Dynamic_Panel_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-7d607fa9-Rectangle_12" ]
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
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-7d607fa9-Dynamic_Panel_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-7d607fa9-Rectangle_13" ]
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
  .on("mouseleave dragleave", ".s-224e6953-a5d0-4cee-ae03-e6038f07acd6 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is(".s-Hotspot_37")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Input_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_38")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_33")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_34")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_35")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Category_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Hotspot_36")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_116")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Category_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Cell_60")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Cell_64")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Cell_61")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Cell_65")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Cell_62")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Cell_66")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Cell_63")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Cell_67")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Path_41")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Paragraph_46")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_32")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_31")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-7d607fa9-Hotspot_8")) {
      jEvent.undoCases(jFirer);
    }
  });