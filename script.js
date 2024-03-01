document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Extract values from input fields
    const textInput1 = document.getElementById('textInput1').value;
    const textInput2 = document.getElementById('textInput2').value;

    // Construct the API URL with query string parameters
    const apiUrl = `YOUR_API_ENDPOINT?param1=${encodeURIComponent(textInput1)}&param2=${encodeURIComponent(textInput2)}`;

    // Make the API call
    fetch(apiUrl, {
        method: 'POST', // Assuming a POST request
        headers: {
            'Content-Type': 'application/json'
            // Include other headers as required
        },
        // Include body if required by your API
    })
    .then(response => {
        if (response.ok) {
            // If the API call was successful and returned a 200 status
            return response.json(); // or .text() if the response is text
        } else {
            // If the server response was not ok (e.g., 400, 401, 403, 404, 500, etc.)
            throw new Error('Failed to fetch from API: ' + response.statusText);
        }
    })
    .then(data => {
        // Handle the successful response data
        displayMessage('Success! Message from API: ' + data.message, 'success');
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
        displayMessage('Error making API call: ' + error.message, 'error');
    });
});

// Function to display a message to the user
function displayMessage(message, type) {
    const messageContainer = document.getElementById('messageContainer');
    if (!messageContainer) {
        console.error('Make sure your HTML includes an element with id="messageContainer"');
        return;
    }

    messageContainer.textContent = message; // Set the text of the message container
    messageContainer.className = ''; // Reset any previous class names
    messageContainer.classList.add(type); // Add the 'success' or 'error' class
}
