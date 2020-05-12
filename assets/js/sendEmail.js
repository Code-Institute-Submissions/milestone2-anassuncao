function sendMail(contactForm) {
    emailjs.send("gmail","andre", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAIL", error);
        }
    );
    return false; 
}

