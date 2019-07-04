var jsonUrl = 'https://api.myjson.com/bins/141r3r';
var request = new XMLHttpRequest();
request.open('GET', jsonUrl);
request.responseType = 'json';
request.send();


request.onload = function() {
    var mydata = request.response;


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
}