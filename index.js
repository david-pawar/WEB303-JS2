$(document).ready(function() {
    $.ajax({
       url: 'data.json',
       dataType: 'json',
       success: function(data) {
          buildTable(data);
       }
    });

    function buildTable(data) {
       let table = $('<table>');
       let thead = $('<thead>');
       let tbody = $('<tbody>');

       let fields = Object.keys(data[0]);

       let sort = {};
       fields.forEach(function(field) {
          sort[field] = 0; // 0 for original order, 1 for ascending order, 2 for descending order
       });

       let originalOrder = data.slice();

       let createTableHeader = function(field) {
          let th = $('<th>').text(field);
          let chevron = $('<span>').addClass('chevron');
          th.append(chevron);
          th.click(function() {
             sortTable(field);
          });
          return th;
       };

       fields.forEach(function(field) {
          thead.append(createTableHeader(field));
       });

       let createTableRow = function(character) {
          let tr = $('<tr>');
          fields.forEach(function(field) {
             tr.append($('<td>').text(character[field]));
          });
          return tr;
       };

       data.forEach(function(character) {
          tbody.append(createTableRow(character));
       });

       table.append(thead);
       table.append(tbody);
       $('body').append(table);

       function sortTable(field) {
          let rows = tbody.find('tr').toArray();
          if (sort[field] === 0) {
             
             rows.sort(function(a, b) {
                let aValue = $(a).find('td:eq('+ fields.indexOf(field) +')').text();
                let bValue = $(b).find('td:eq('+ fields.indexOf(field) +')').text();
                if (aValue < bValue) return -1;
                if (aValue > bValue) return 1;
                return 0;
             });
             sort[field] = 1;
          } else if (sort[field] === 1) {
             
             rows.sort(function(a, b) {
                let aValue = $(a).find('td:eq('+ fields.indexOf(field) +')').text();
                let bValue = $(b).find('td:eq('+ fields.indexOf(field) +')').text();
                if (aValue > bValue) return -1;
                if (aValue < bValue) return 1;
                return 0;
             });
             sort[field] = 2;
          } else {
             rows = originalOrder.map(createTableRow);
             sort[field] = 0;
          }

          tbody.empty();
          rows.forEach(function(row) {
             tbody.append(row);
          });

          updateChevron(field);
       }

       function updateChevron(field) {
          $('th').find('.chevron').text('');
          if (sort[field] === 1) {
             $('th:contains('+ field +')').find('.chevron').text('\u25B2'); // Up chevron
          } else if (sort[field] === 2) {
             $('th:contains('+ field +')').find('.chevron').text('\u25BC'); // Down chevron
          }
       }
    }
 });
