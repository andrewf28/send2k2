document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Extract values from input fields
    const pdfUrl = document.getElementById('textInput1').value;
    const kindleEmail = document.getElementById('textInput2').value;
    //hji
    // Construct the API URL with query string parameters
    const apiUrl = `https://x5n0715e60.execute-api.us-east-2.amazonaws.com/default/paperizer?pdf_url=${encodeURIComponent(pdfUrl)}&kindle_email=${encodeURIComponent(kindleEmail)}`;

    // Options for the fetch call, specifying it as a POST request
    const fetchOptions = {
        method: 'POST', // Use POST method
        mode: 'no-cors', // Add no-cors mode here
        headers: {
            'Content-Type': 'application/json' // Assuming JSON; adjust if necessary
            // Note: In no-cors mode, only a limited set of headers are exposed in the response
        },
        // Note: The body content is not used with no-cors mode in a meaningful way for the server,
        // since you cannot read the response if no-cors is used
    };

    // Make the API call
    fetch(apiUrl, fetchOptions)
        .then(response => {
            console.log('Request made with no-cors mode, response is opaque.'); // You won't be able to read the response
        })
        .catch(error => {
            console.error('Error:', error); // Handle any errors
        });
});
