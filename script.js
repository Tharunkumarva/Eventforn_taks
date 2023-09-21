// script.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dataForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form input values
        var firstName = document.getElementById('name').value;
        var lastName = document.getElementById('lastname').value;
        var address = document.getElementById('address').value;
        var pincode = document.getElementById('Pincode').value;
        var gender = document.querySelector('input[name="gender"]:checked').value;

        var foodElements = document.querySelectorAll('input[name="food"]:checked');
        var foods = Array.from(foodElements).map(function (element) {
            return element.value;
        });

        var state = document.getElementById('state').value;
        var country = document.getElementById('country').value;

        // Create a new row for the table
        var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        // Insert data into the row
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = address;
        cell4.innerHTML = pincode;
        cell5.innerHTML = gender;
        cell6.innerHTML = foods.join(', ');
        cell7.innerHTML = state;
        cell8.innerHTML = country;

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('address').value = '';
        document.getElementById('Pincode').value = '';
        document.querySelector('input[name="gender"]:checked').checked = false;
        foodElements.forEach(function (element) {
            element.checked = false;
        });
        document.getElementById('state').value = '';
        document.getElementById('country').value = '';
    });
});
