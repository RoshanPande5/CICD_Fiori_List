sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("mm.practiceproject1.controller.View1", {
            formatter: formatter,
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                this.getView().setModel(oModel);
            },


            onSearch : function (oEvt) {

                // step 1 we need to know what user enter in search field
                var searchvalue = oEvt.getParameter("query");
                // step 2 prepare filter for that search 
                var OFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains,searchvalue);
                // step 3 inject the filter inside the list control
                var oList = this.getView().byId("_IDGenList1");
                oList.getBinding("items").filter([OFilter]);
             
            },

            onDelete : function (oEvt) {
                 // step 1  which item was cliked to be deleted
                 var odeletedItem = oEvt.getParameter("listItem");
                 var Spath = odeletedItem.getBindingContextPath();
                 var sIndex = Spath.split("/")[Spath.split("/").length - 1]

                 //step 2 read all the data from model
                 var oModel = this.getView().getModel("Jsondemo");
                 var aData = oModel.getProperty("/fruits");

                 // step 3 delete the selected item
                 aData.splice(sIndex,1);
                                  
                 //step 4 set the data back to the model
                 oModel.setProperty("/fruits",aData);




            },

            onListItemPress: function (oEvt) {
              

                var Spath = oEvt.getSource().getBindingContextPath();
                var sIndex = Spath.split("/")[Spath.split("/").length - 1];


                var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
                oRoute.navTo("View2", {
                    pathData: sIndex

                });

            }
          
        });
    });
