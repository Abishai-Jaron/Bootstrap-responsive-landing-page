// Bootstrap form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        event.stopPropagation();

        // Add Bootstrap validation styles
        form.classList.add('was-validated');

        // Check if form is valid
        if (form.checkValidity()) {
            console.log('Contact form submitted successfully.');
            // Show success message
            successMessage.classList.remove('d-none');
            
            // Reset form after successful submission
            form.reset();
            form.classList.remove('was-validated');
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.classList.add('d-none');
            }, 5000);
        }
    }, false);
});
