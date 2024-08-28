const scriptURL = 'https://script.google.com/macros/s/AKfycbxOv-sRrPq67Ribzln8u372JuYS4KbeXNglqnmqHHPSfswe5jnaohtC-aCps3Tabm_V/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  document.getElementById("submit").innerHTML = "Submitting.."

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Thank you! your form is submitted successfully.")
    }).then(() => {
      window.location.reload();
      console.log("Form submitted successfully");
      document.getElementById("submit").innerHTML = "Submit your request"

    })
    .catch(error => {
      console.error('Error!', error.message)
      document.getElementById("submit").innerHTML = "Submit your request"
    }

    )
})