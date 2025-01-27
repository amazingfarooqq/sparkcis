// Select the form and notification elements
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOv-sRrPq67Ribzln8u372JuYS4KbeXNglqnmqHHPSfswe5jnaohtC-aCps3Tabm_V/exec';
const form = document.forms['contact-form'];
const notification = document.getElementById("notification-success");
const notificationError = document.getElementById("notification-error");

// Function to format date in a readable format
function getFormattedDateTime() {
    const now = new Date();
    return now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Get formatted timestamp
    const formattedTime = getFormattedDateTime();
    
    // Create FormData object
    const formData = new FormData(form);
    
    // Add submission time to form data
    formData.append('submissiontime', formattedTime);
    
    // Change button text to show loading state
    document.getElementById("submit").innerHTML = "Submitting...";
    
    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Success!', response);
        
        // Show success notification
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
        
        // Reset form and button text
        form.reset();
        document.getElementById("submit").innerHTML = "Submit your response";
    })
    .catch(error => {
        console.error('Error!', error.message);
        
        // Show error notification
        notificationError.classList.add('show');
        setTimeout(() => {
            notificationError.classList.remove('show');
        }, 5000);
        
        // Reset button text
        document.getElementById("submit").innerHTML = "Submit your response";
    });
});
