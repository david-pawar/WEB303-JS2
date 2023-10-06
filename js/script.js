// Method for handling the $.getJSON request
function handleGetJSONRequest() {
    $.getJSON('team.json', function(data) {
        // Loop through the array of objects in the data
        $.each(data, function(_, teamMember) { // Removed the unused 'index' parameter
            // Create HTML elements for name, position, and bio
            var nameElement = $('<h2>').text(teamMember.name);
            var positionElement = $('<h5>').text(teamMember.position);
            var bioElement = $('<p>').text(teamMember.bio);

            // Append the elements to the div#team
            $('#team').append(nameElement, positionElement, bioElement);
        });
    })
    .done(function() {
        // Code to execute when the $.getJSON request is successful
        console.log('getJSON request completed successfully.');
    })
    .fail(function(_, textStatus, errorThrown) {
        // Code to handle errors in the $.getJSON request
        console.error('getJSON request failed:', textStatus, errorThrown);
    });
}

// Method for handling the $.ajax request
function handleAjaxRequest() {
    // Display "Loading..." message before sending the AJAX request
    $('#team').text('Loading...');

    $.ajax({
        url: 'team.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Clear the "Loading..." message
            $('#team').empty();

            // Looping through the array of objects in the data
            $.each(data, function(_, teamMember) { // Removed the unused 'index' parameter
                // Creating HTML elements for name, position, and bio
                var nameElement = $('<h2>').text(teamMember.name);
                var positionElement = $('<h5>').text(teamMember.position);
                var bioElement = $('<p>').text(teamMember.bio);

                // Append the elements to the div#team
                $('#team').append(nameElement, positionElement, bioElement);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Display an error message in div#team if the request fails
            $('#team').text('Error: Content could not be retrieved.');
            console.error('Ajax request failed:', textStatus, errorThrown);
        }
    });
}

// jQuery ready function
$(document).ready(function() {
    // Call the method for $.getJSON request
    handleGetJSONRequest();
    // Call the method for $.ajax request
    handleAjaxRequest();
});
