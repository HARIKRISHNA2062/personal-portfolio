const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
    console.log("Submit button clicked");
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        console.log("Sending data:", data);
        const response = await fetch("https://personal-portfolio-zln6.onrender.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert(result.message);

        contactForm.reset();

    } catch (error) {
        alert("Something went wrong!");
        console.error(error);
    }
});