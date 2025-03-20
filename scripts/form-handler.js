const form = document.getElementById('contact-form');
const feedback = document.querySelector('.form-feedback');
const buttonText = document.querySelector('.button-text');
const spinner = document.querySelector('.spinner');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Show loading state
  form.classList.add('loading');
  buttonText.style.opacity = '0';
  spinner.style.opacity = '1';
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      feedback.textContent = 'Message sent! I’ll respond within 24 hours.';
      feedback.classList.add('success');
      form.reset();
    } else {
      feedback.textContent = 'Oops! Something went wrong. Please try again.';
      feedback.classList.add('error');
    }
  } catch (err) {
    feedback.textContent = 'Network error. Please check your connection.';
    feedback.classList.add('error');
  } finally {
    form.classList.remove('loading');
    buttonText.style.opacity = '1';
    spinner.style.opacity = '0';
    feedback.style.display = 'block';
    
    // Hide feedback after 5 seconds
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 5000);
  }
});