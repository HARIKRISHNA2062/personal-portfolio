async function loadMessages() {
    try {
        const response = await fetch("https://personal-portfolio-zln6.onrender.com/api/messages");
        const messages = await response.json();

        const table = document.getElementById("messageTable");
        table.innerHTML = "";

        messages.forEach((msg) => {
            table.innerHTML += `
                <tr>
                    <td>${msg.name}</td>
                    <td>${msg.email}</td>
                    <td>${msg.message}</td>
                </tr>
            `;
        });

    } catch (error) {
        console.error("Error loading messages:", error);
    }
}

loadMessages();