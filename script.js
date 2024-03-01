document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Extract values from input fields
    const pdfUrl = document.getElementById('textInput1').value;
    const kindleEmail = document.getElementById('textInput2').value;

    // Construct the API URL with query string parameters
    const apiUrl = `https://x5n0715e60.execute-api.us-east-2.amazonaws.com/default/paperizer?pdf_url=${encodeURIComponent(pdfUrl)}&kindle_email=${encodeURIComponent(kindleEmail)}`;

    // Options for the fetch call, specifying it as a POST request
    const fetchOptions = {
        method: 'POST', // Use POST method
        headers: {
            'Content-Type': 'application/json' // Assuming JSON; adjust if necessary
            // Include any other headers required by the API
        },
        // If the API expects a body, uncomment and adjust the following line:
        // body: JSON.stringify({ key: 'value' }) // Adjust keys and values according to what the API expects
    };

    // Make the API call
    fetch(apiUrl, fetchOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the response is JSON
        })
        .then(data => {
            console.log(data); // Handle the response data
        })
        .catch(error => {
            console.error('Error:', error); // Handle any errors
        });
});
