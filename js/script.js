$(document).ready(function () {
    
    $.ajax({
      url: 'data.json', 
      dataType: 'json',
      success: function (data) {
        
        populateTable(data);

        
        $('#searchInput').on('input', function () {
          searchByName($(this).val());
        });

        
        $('#filterAM').on('click', function () {
          filterByLastName('A', 'M');
        });

        $('#filterNZ').on('click', function () {
          filterByLastName('N', 'Z');
        });
      },
      error: function () {
        console.error('Error loading characters data.');
      }
    });


    function populateTable(characters) {
      var tableBody = $('#charactersTable tbody');
      tableBody.empty();

      $.each(characters, function (index, character) {
        var row = '<tr>' +
          '<td>' + character.firstName + '</td>' +
          '<td>' + character.lastName + '</td>' +
          '<td>' + character.age + '</td>' +
          '<td>' + character.village + '</td>' +
          '<td>' + character.rank + '</td>' +
          '<td>' + character.jutsu + '</td>' +
          '<td>' + character.birthdate + '</td>' +
          '</tr>';
        tableBody.append(row);
      });
    }

    function searchByName(searchTerm) {
      var rows = $('#charactersTable tbody tr');
    
      rows.removeClass('highlight');
    
      if (searchTerm !== '') {
        rows.each(function () {
          var row = $(this);
          var firstName = row.find('td:first-child').text();
    
          if (firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
            row.addClass('highlight');
          }
        });
      }
    }
    
    function filterByLastName(startChar1, startChar2) {
      var rows = $('#charactersTable tbody tr');
      var countAM = 0;
      var countNZ = 0;
    
      rows.removeClass('highlight');
    
      rows.each(function () {
        var lastName = $(this).find('td:nth-child(2)').text();
    
        if (lastName >= startChar1 && lastName <= startChar2) {
          $(this).show();
          countAM++;
        } else {
          $(this).hide();
          countNZ++;
        }
      });
    
      
      $('#filterAM').text('A - M (' + countAM + ')');
      $('#filterNZ').text('N - Z (' + countNZ + ')');
    }
  });