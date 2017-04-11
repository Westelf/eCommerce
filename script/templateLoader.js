var templateLoader = (function () {
    
    function load (templateName, container, content) {

        $.ajax({
            url: 'templates/' + templateName + '_template.html',
            type: 'GET',
            success: function (data) {
                var postTemplate = data,
                handlebarsTemplate;

                handlebarsTemplate = Handlebars.compile(postTemplate);

                container.innerHTML = handlebarsTemplate(content);

                console.log('It works!');
            } 
        })
    }


    return {
        loadTemplate: load
    }
})();