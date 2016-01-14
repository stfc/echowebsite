function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var body = document.forms["contactForm"]["body"].value;
    var validate = document.forms["contactForm"]["validate"].value;

    if (name == null || name == "") {
        alert("Name must be filled out.");
        return false;
    } else if (body == null || body == "") {
        alert("Message body is blank. Please fill out.");
        return false;
    } else if (validate != 9 ) {
        alert("Enter a number");
        return false;
    }
    alert("submitted.")
}