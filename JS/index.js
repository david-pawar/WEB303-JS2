$(document).ready(function(){
    let productsData; // Variable to store the fetched product data

    // Fetch data from the URL and populate the table
    const URL = 'https://dummyjson.com/products';
    fetch(URL)
    .then(response => response.json())
    .then( data => {
        data.forEach(createTable) ;
        productsData = data; // Store the fetched data for future use
        populateTable(data); // Populate the table with the fetched data
    });

    // Event listener for the MorePrice button
    $('#moreThan500').on('click', function() {
        const filteredData = productsData.filter(product => product.price > 500);
        populateTable(filteredData); // Populate the table with the filtered data
    });

    // Event listener for the LessPrice button
    $('#lessThan500').on('click', function() {
        const filteredData = productsData.filter(product => product.price < 500);
        populateTable(filteredData); // Populate the table with the filtered data
    });

    // Event listener for the search input
    $('#searchInput').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        const filteredData = productsData.filter(product => 
            product.title.toLowerCase().includes(searchTerm) || 
            product.brand.toLowerCase().includes(searchTerm)
        );
        populateTable(filteredData); // Populate the table with the filtered data
    });
});

// Function to populate the table with the provided data
function populateTable(data) {
    var tableBody = $('#productTableBody');
    tableBody.empty(); // Clear the table body

    // $.each(data, function(index, product){
    //     var row = '<tr>' +
    //     '<td>' + product.title + '</td>' +
    //     '<td>' + product.price + '</td>' +
    //     '<td>' + product.rating + '</td>' +
    //     '<td>' + product.brand + '</td>' +
    //     '<td> + <button onclick="showImage(\'' + product.images[0] + '\')">Click for img</button>  </td>' +
    //     '</tr>';
    //     tableBody.append(row);
    // });
      
    // }
    data.forEach(product => {
        let newRow = `
            <tr>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.rating}</td>
                <td>${product.brand}</td>
                <td><button onclick="showImage('${product.images[0]}')">Click for img</button></td>
            </tr>
        `;
        tableBody.append(newRow);
    });
}

// Function to display the image in a modal
function showImage(imageUrl) {
    // Create a modal element
    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Create an image element
    var image = document.createElement('img');
    image.src = imageUrl;

    // Append the image to the modal
    modal.appendChild(image);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Display the modal
    modal.style.display = 'block';

    // Close the modal when clicked outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        }
    });
}
