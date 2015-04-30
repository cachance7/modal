var Mustache = require('mustache');

$ = require('jquery');
APP = {
    fancyAlert: function(text){
        var rendered = Mustache.render($("#alert-tpl").html(), { alertText: text, buttons: [{text: "Ok"}, {text: "Cancel"}]});

        $("body").append(rendered);
        $('#alert-component button').on('click', function(){
            console.log('You clicked: ' + $(this).text());
            $('#alert-component').remove();
        });
    }
};

module.exports = APP;
