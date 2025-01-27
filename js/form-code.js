const scriptURL = 'https://script.google.com/macros/s/AKfycbxOv-sRrPq67Ribzln8u372JuYS4KbeXNglqnmqHHPSfswe5jnaohtC-aCps3Tabm_V/exec';
const form = document.forms['contact-form'];
const notification = document.getElementById("notification-success");
const notificationError = document.getElementById("notification-error");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        // Get current timestamp
        const currentTime = new Date().toISOString();
        
        // Create FormData object
        const formData = new FormData(form);
        
        formData.append('country', userCountry);
        
        // Change button text to show loading state
        document.getElementById("submit").innerHTML = "Submitting...";
        
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });
        
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
        
    } catch (error) {
        console.error('Error!', error.message);
        
        // Show error notification
        notificationError.classList.add('show');
        setTimeout(() => {
            notificationError.classList.remove('show');
        }, 5000);
        
        // Reset button text
        document.getElementById("submit").innerHTML = "Submit your response";
    }
});
