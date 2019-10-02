$(document).ready(function() {
    //array of topics
    var topics = ['Golf', 'Tiger Woods', 'Baseball', 'Aaron Judge', 'Football', 'Russel Wilson', 'Soccer', 'Lionel Messi', 'Snowboarding', 'Travis Rice', 'Swimming', 'Michael Phelps', 'Basketball', 'Michael Jordan', 'Boxing', 'Mike Tyson'];
    function createHtmlButton(){
        for  (let i = 0; i < topics.length; i++) {
            var a = $('<button>');
            //add classes and attributes to each button from array
            a.addClass('btn btn-primary bnt-lg');
            a.attr('data-name', topics[i]);
            a.attr('id', 'topicButtons');
            a.text(topics[i]);
            //append each button from array to the gifButtonArray div
            $('.gifButtonArray').append(a);
            $('#center-text-box').empty();
        }
    }
    createHtmlButton();

    $(document).on('click', '#toppicButtons', function (event) {
        $('#results').empty();
        var searchInput = $(this).attr("data-name");
        // api key used to queary the giphy url
        var apiKey = 'db0649444d680273f8f9737b1fd8b79d';
        //queary url
        var quearyUrl = 'https://api.giphy.com/v1/gifs/search?q=' + searchInput + '&limit=10&api_key=' + apiKey;

        $a.jax({
            url: quearyUrl,
            method: "GET"
        }).then(function(response) {
            //pan through each queary and select data
            for (let i = 0; i < response.data.length; i++) {
                //builds a bootstrap card and assigns it to a variable
                var rating = reponse.data[i].rating;
                var data = response.data[i].images;
                var p = $('<p>').css('font-family', )
                var animated = data.fixed_height_still.url;
                var image = $('<img class="card-img-top">')
                    .attr('src', still)
                    .attr('data-still', still)
                    .attr('data-animated', animated)
                    .attr('data-stage', 'still')
                    .addClass('searchImage');

                var searchDiv = $('<div class="card" stle="width: 300px;">')
                    .append(image)
                    .append(p);

                $('#results').prepend(searchDiv);

            }
        })
    })
    //function to add input by user into a button
    $('searchButton').on('click', function(event) {
        $('.gifButtonArray').empty();
            event.preventDefault();
            //pulls text from input box
            var newCategory = $('#enter-text-box').val().trim();
            //adds user input to topics array
            topics.push(newCategory);

            //generates button user input
            createHtmlButtons();
            return false;
    })

    //determines behavior on click of each gif
    $(document).on('click', '.searchImage', function(){
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).data('animated'));
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    })
})