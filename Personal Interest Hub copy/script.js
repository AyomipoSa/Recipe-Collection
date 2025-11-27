function searchingIngredient() {
    const input = document.getElementById("ingredientSearch");
    if (!input) return;

    const value = input.value.trim();

    if (!value) {
        alert("Please type an ingredient, e.g. 'rice' or 'tomato'.");
        return;
    }

    alert("Searching for recipes with: " + value);
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Thank you! Your message has been received (demo only).";
        formMessage.style.color = "green";
        contactForm.reset();
    });
}
