// Start to jQuery
$(document).ready(function(){
    //When search is clicked run code
    $('#search').click(function () {
        //Gets search input
        var searchTerm = $('#searchTerm').val();
        //API url with searchTerm
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
                $('#output').html('');
                    $('#output').prepend("<div><a href= " + data[3][0] + ">" + data[1][0] + "</a><p>" + data[2][0] + "</p></div>");
            },
            error: function (errorMessage) {
                alert('Error');
            }
        });
    });




    $('#random').click(function () {
        //Gets search input
        var items = ["Formula One", "iphoneX", "Ferrari", "Computerlearning", "HTML", "jQuery", "Mclaren", "Reactjs", "Javascript", "babel", "BBandT"];

        var searchRandom = items[Math.floor(Math.random()*items.length)];
        //API url with searchTerm
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchRandom + "&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
                $('#output').html('');
                    $('#output').prepend("<div><a href= " + data[3][0] + ">" + data[1][0] + "</a><p>" + data[2][0] + "</p></div>");
            },
            error: function (errorMessage) {
                alert('Error');
            }
        });
    });
});
