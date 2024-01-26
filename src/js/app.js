const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

window.onload = () => {
    document.querySelector(".button").onclick = () => {

        let valueInput = document.querySelector("input").value;
        let input = document.querySelector("input");

        if (!validateEmail(valueInput)) {
            console.log("ok");
            input.value = "";
            input.classList.add("error");
            document.querySelector(".errorText").style.display = "block"
        } else {
            input.value = "";
            window.alert("email is ok !!")
            input.classList.remove("error");
            document.querySelector(".errorText").style.display = "none"
        }


        return false;
    };

}