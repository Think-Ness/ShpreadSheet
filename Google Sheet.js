const scriptURL = 'https://script.google.com/macros/s/AKfycbzqjLPWq8HBpXbJQDm1pm4Mud5D1xzGbqSGEcoW7xzMx-jCG1SPGzXAUF7qND7RIrQ_Ug/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})