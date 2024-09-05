const scriptURL = 'https://script.google.com/macros/s/AKfycbxOv-sRrPq67Ribzln8u372JuYS4KbeXNglqnmqHHPSfswe5jnaohtC-aCps3Tabm_V/exec';
const form = document.forms['contact-form'];
const notification = document.getElementById("notification-success");
const notificationError = document.getElementById("notification-error");
const modal = new bootstrap.Modal(document.getElementById('quoteForm'));

form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById("submit").innerHTML = "Submitting...";

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response);

      // Trigger the slide-down notification
      notification.classList.add('show');

      // Hide the notification after 5 seconds
      setTimeout(() => {
        notification.classList.remove('show');
      }, 5000);


      form.reset();
      modal.hide();

      document.getElementById("submit").innerHTML = "Submit your request";
    })
    .catch(error => {
      // Trigger the slide-down notification
      notificationError.classList.add('show');

      // Hide the notification after 5 seconds
      setTimeout(() => {
        notificationError.classList.remove('show');
      }, 5000);
      console.error('Error!', error.message);
      document.getElementById("submit").innerHTML = "Submit your request";
    });
});
