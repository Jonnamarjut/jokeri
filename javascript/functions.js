// 1. Get references to the HTML elements
const button = document.querySelector('button');  // Reference to the "Uusi rivi" button
const table = document.querySelector('table');    // Reference to the table
const paragraph = document.querySelector('p');    // Reference to the paragraph

// Initialize the row counter
let rowCount = 0;

// 2. Add event listener to the button for adding new rows
button.addEventListener('click', () => {
    addNewRow();
});

// 3. Function to add a new row of random numbers
function addNewRow() {
    // Create a new row element
    const newRow = document.createElement('tr');

    // Loop 7 times to create 7 random numbers (0-9)
    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement('td');           // Create a new cell (td)
        const randomNumber = Math.floor(Math.random() * 10);    // Generate random number between 0-9
        newCell.textContent = randomNumber;                     // Set the cell's content to the random number
        newRow.appendChild(newCell);                            // Add the cell to the row
    }

    // Append the new row to the table
    table.appendChild(newRow);

    // Increment the row counter and update the paragraph text
    rowCount++;
    paragraph.textContent = `Valmiita rivejä ${rowCount}`;
}
