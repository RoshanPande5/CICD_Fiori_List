


sap.ui.define([], function () {
    "use strict";
    return {

        Changestatus: function (Status) {
            switch (Status) {
                case "available":
                    return "Success";
                case "Not available":
                    return "Error";



                default:
                    break;
            }
        }
    };
});