// Name : David Pawar
// Date : 2023-09-24 
// Assignment-2

$(document).ready(function() {
    // Caching the div element with id #content for later use
    let $content = $('#content');
  
    // Function to load content and animate #content
    function loadAndAnimateContent(url) {
 // clearing div element with id #content
      $content.hide().empty();
      
      $.ajax({
        url: url,
        dataType: 'html',
        success: function(data) {
          // Inserting the loaded content into div tag with id  #content
          $content.html(data);
  
          // Animating the display of div #content. first 
          $content.fadeIn('slow');
        },
        error: function() {
          // this line of code will handle error
          $content.html('Error in content loading');
        }
      });
    }
  
    // Event handlers for 'click' event
    $('#prospect').on('click', function(e) {
      e.preventDefault();
      loadAndAnimateContent('prospect.html');
    });
  
    $('#convert').on('click', function(e) {
      e.preventDefault();
      loadAndAnimateContent('convert.html');
    });
  
    $('#retain').on('click', function(e) {
      e.preventDefault();
      loadAndAnimateContent('retain.html');
    });
  });
  