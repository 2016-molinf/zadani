import django.forms

class JSMEWidget(django.forms.Widget):
    widget_id = 0

    class Media:
        js = ('https://code.jquery.com/jquery-2.2.1.js',
                'jsme/jsme.nocache.js',
                'jsmewidget-init.js', )

    def __init__(self):
        JSMEWidget.widget_id += 1
        self.widget_id = "jsme_" + JSMEWidget.widget_id

    def render(self, name, value, attrs=None):

        context = Context({"name": name, "id": self.widget_id, "value": value})

        return Template("""
        <script>
        $(function() {
            registerJSMEWidget("{{ id }}");
        });
        </script>

        <div id="{}"></div>
        <input type="hidden" name="{{ name }}" id="{{ id }}input" value="{{ value }}">
        """).render(context)
