
function sendEmail() {
    let subject = document.getElementById("name").value+ " " + " Voulez vous travaillez avec moi?"
    Email.send({
        SecureToken: "5cb51da2-abdb-49f8-83c5-3106d3bd9626",

        To: 'hassan@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Nouvelle demande de formulaire de contact",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value

    }
    

    ).then(
        message => alert("Message envoyé avec succès")
    );
    window.location.href = "mailto:hassanmahamatdogo@gmail.com?subject=" + subject + "&body=" + document.getElementById("message").value;
}