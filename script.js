function scrollToForm() {
    document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' });
}

function validateForm() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let country = document.getElementById('country').value;
    let message = document.getElementById('formMessage');

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;

    if (name === "" || email === "" || phone === "" || country === "") {
        message.textContent = "All fields are required.";
        message.style.color = "red";
        return false;
    }
    if (!emailPattern.test(email)) {
        message.textContent = "Enter a valid email address.";
        message.style.color = "red";
        return false;
    }
    if (!phonePattern.test(phone)) {
        message.textContent = "Enter a valid 10-digit phone number.";
        message.style.color = "red";
        return false;
    }
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
    return false; // Prevent actual form submission for demo
}
