let liens = document.querySelector("header .liens");
let btn_menu = document.querySelector(".btn_menu");

// appel des fonctions d'ouverture et de fermeture
function boutton(){
    if(btn_menu.classList.contains("fa-bars")){
        openBtn();
    }else{
        closeBtn(); 
    }
}
// fonction d'ouverture du boutton menu
function openBtn(){
    btn_menu.classList.replace("fa-bars", "fa-xmark");
    liens.classList.add("show");
}

// fonction de fermeture du btn menu
function closeBtn(){
    btn_menu.classList.replace("fa-xmark", "fa-bars");
    liens.classList.remove("show");
}


// renvoi du formulaire remplis dans l'email de l'entrepride

function sendEmail() {
    let subject = document.getElementById("name").value+ " " + " Voulez vous travaillez avec nous?"
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
    window.location.href = "mailto:loickenmoe1@gmail.com?subject=" + subject + "&body=" + document.getElementById("message").value;
}
