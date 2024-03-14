const form = document.getElementById("userNameForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedName = form.elements['selectedName'].value;
    console.log(selectedName)
})