sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller) {
      "use strict";
  
      return Controller.extend("mm.practiceproject1.controller.View2", {
     
        onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachMatched(this._onRouteFound,this);          
				},


	    _onRouteFound : function (oEvt){
	    	
	     var Spath = oEvt.getParameter("arguments").pathData;
       console.log("hey"+Spath);  // only to see in console which item press
       var fruitrelativepath = "Jsondemo>/fruits/" + Spath;
	    	
	     this.getView().bindElement(fruitrelativepath);
	    
	    
	    } 



      });
    }
  );
  