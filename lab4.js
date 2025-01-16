document.getElementById("submitBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Ενημερωτικό μήνυμα αν κάποιο πεδίο είναι κενό
    if (!name || !email || !message) {
        alert("Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.");
        return;
    }

    // Εμφάνιση συνοπτικών στοιχείων για επιβεβαίωση
    const summary = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    document.getElementById("summary").innerText = summary;
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";

    // Ρύθμιση του συνδέσμου αποστολής email
    document.getElementById("sendLink").href = `mailto:${email}?subject=Contact Form Submission&body=${encodeURIComponent(summary)}`;
});

// Κουμπί ακύρωσης
document.getElementById("cancelLink").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("contactForm").style.display = "block";
});
