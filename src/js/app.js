var Mustache = require('mustache');

$ = require('jquery');
APP = {
    fancyAlert: function(text){
        $.ajax({url: 'modal.mst'}) /*, cache: false}) */
            .then(function(template){
                var rendered = Mustache.render(template, { alertText: text, buttons: [{text: "Ok"}, {text: "Cancel"}]});

                $("body").append(rendered);
                $('#alert-component button').on('click', function(){
                    console.log('You clicked: ' + $(this).text());
                    $('#alert-component').remove();
                });
            });
    }
};

module.exports = APP;
