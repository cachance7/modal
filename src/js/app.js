var Mustache = require('mustache');

$ = require('jquery');
APP = {
    fancyAlert: function(text){
        $.ajax({url: 'modal.mst', cache: false})
            .then(function(template){
                var rendered = Mustache.render(template, { alertText: text, buttons: [{text: "Ok"}, {text: "Not Ok"}]});
                //var rendered = Mustache.render(template, { alertText: text, buttons: ["Ok", "Cancel"]});

                $("body").append(rendered);
                $('#alert-component button').on('click', function(){
                    $('#alert-component').remove();
                });
            });
    }
};

module.exports = APP;
