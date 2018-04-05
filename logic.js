// Start to jQuery

//Search meth
$(document).ready(function(){
    //When search is clicked run code
    $('#search').click(function () {
        //Gets search input
        var searchTerm = $('#searchTerm').val();
        //API url with searchTerm
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

        //This Ajax call is going to help us grab the data from the Wiki's json api and return it back with some XML
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {

                //This will clear the output div everything something new is searched.
                $('#output').html('');

                    //This drops the the data back to the output div in index.html.
                    $('#output').prepend("<div><a href= " + data[3][0] + ">" + data[1][0] + "</a><p>" + data[2][0] + "</p></div>");
            },
            error: function (errorMessage) {
                alert('Error');
            }
        });
    });

    // Random Button Logic
    $('#random').click(function () {
        //An array of random inputs to search
        var items = ["Formula One", "iphoneX", "Ferrari", "machine learning", "HTML", "jQuery", "Mclaren", "Reactjs", "Javascript", "babel", "BB&T", "AI"];
        
        //This variable will randomly pick a piece of data from the array.
        var searchRandom = items[Math.floor(Math.random()*items.length)];
        
        //API url with searchTerm
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchRandom + "&format=json&callback=?";

        //This Ajax call is going to help us grab the data from the Wiki's json api and return it back with some XML
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
                //This will clear the output div everything something new is searched
                $('#output').html('');
                    $('#output').prepend("<div><a href= " + data[3][0] + ">" + data[1][0] + "</a><p>" + data[2][0] + "</p></div>");
            },
            error: function (errorMessage) {
                alert('Error');
            }
        });
    });
});
