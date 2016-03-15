(function() {
    var jsmeLoaded = false;
    var jsmeWidgets = [];

    window.jsmeOnLoad = function () {
        for (i in jsmeWidgets) {
            startJSMEWidget(jsmeWidgets[i]);
        }

        jsmeWidgets = [];
        jsmeLoaded = true;
    }

    window.registerJSMEWidget = function(widgetId) {
        if (!jsmeLoaded) {
            jsmeWidgets.push(widgetId);
        } else {
            startJSMEWidget(widgetId);
        }
    }

    function startJSMEWidget(widgetId) {
        //Instantiate a new JSME:
        //arguments: HTML id, width, height (must be string not number!)

        var jsmeApplet = new JSApplet.JSME(widgetId, "380px", "340px", {
        //optional parameters
        "options" : "query,hydrogens"
        });

        var form = document.getElementById(widgetId).closest("form");
        var field = document.getElementById(widgetId + "input");

        jsmeApplet.readMolFile(field.value);

        form.addEventListener("submit", function() {
            field.value = document.JME.molFile();
        });
    }
})();
