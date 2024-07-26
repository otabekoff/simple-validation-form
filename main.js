// script.js
document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    var nameHint = document.getElementById('nameHint');
    var emailHint = document.getElementById('emailHint');
    var messageHint = document.getElementById('messageHint');

    function validateName() {
        var name = nameInput.value.trim();
        if (name.length >= 3) {
            nameHint.textContent = 'Name looks good!';
            nameHint.classList.remove('invalid');
            nameHint.classList.add('valid');
        } else {
            nameHint.textContent = 'Name is required (at least 3 characters).';
            nameHint.classList.remove('valid');
            nameHint.classList.add('invalid');
        }
    }

    function validateEmail() {
        var email = emailInput.value.trim();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailPattern.test(email)) {
            emailHint.textContent = 'Email looks good!';
            emailHint.classList.remove('invalid');
            emailHint.classList.add('valid');
        } else {
            emailHint.textContent = 'Valid email is required.';
            emailHint.classList.remove('valid');
            emailHint.classList.add('invalid');
        }
    }

    function validateMessage() {
        var message = messageInput.value.trim();
        var wordCount = message.split(/\s+/).filter(function (word) {
            return word.length > 0;
        }).length;
        if (wordCount >= 50) {
            messageHint.textContent = 'Message looks good!';
            messageHint.classList.remove('invalid');
            messageHint.classList.add('valid');
        } else {
            messageHint.textContent = 'Message should be at least 50 words.';
            messageHint.classList.remove('valid');
            messageHint.classList.add('invalid');
        }
    }

    function validateForm(event) {
        var isValid = true;

        if (nameHint.classList.contains('invalid')) {
            isValid = false;
        }
        if (emailHint.classList.contains('invalid')) {
            isValid = false;
        }
        if (messageHint.classList.contains('invalid')) {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);

    contactForm.addEventListener('submit', function (event) {
        validateName();
        validateEmail();
        validateMessage();
        validateForm(event);
    });
});
