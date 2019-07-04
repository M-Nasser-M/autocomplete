$("#tags").autocomplete({
    minLength: 2,
    source: function(request, response) {
        response($.map(mydata, function(obj, key) {

            var name = obj.name.toUpperCase();

            if (name.match(request.term.toUpperCase())) {
                return {
                    label: obj.name,
                    value: obj.name
                }
            }
        }));
    }


});