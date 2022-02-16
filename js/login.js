/* Form validation, that input-field are not empty */

const validateForm = () => {
    let x = document.forms["myForm"]["uname"].value;
    let y = document.forms["myForm"]["pass"].value;

    const inputs = [x, y];

    if (x == "" || y == "") {
        inputs.forEach(
            myFunction = () => {
                if (x == "") {
                    document.getElementById("nameFailed").innerHTML = "Geben Sie bitte Ihren Benutzername ein";
                    document.getElementById("inputText").style.cssText = `
                        border-bottom: 2px solid red;
                        background-image: url('../img/exclamation.png');
                        opacity: 1;
                        `;
                    document.getElementById("inputText").classList.add("input-failed");
                }
                if (y == "") {
                    document.getElementById("passFailed").innerHTML = "Geben Sie bitte Ihr Passwort ein";
                    document.getElementById("inputPass").style.cssText = `
                        border-bottom: 2px solid red;
                        background-image: url('../img/exclamation.png');
                        opacity: 1;
                        `;
                    document.getElementById("inputPass").classList.add("input-failed");
                }
                if (x == "" && y == "") {
                    document.querySelector('.form-header').style.height = "260px";
                }
            }
        )

        /* provisionally , should be removed / edited */
    }else {
        document.getElementById("formHeader").style.display = "none";
        document.getElementById("formWrong").style.display = "block";
        document.getElementById("inputText").style.cssText = `
                border-bottom: 2px solid #4469B1;
                opacity: 1;
                `;
        document.getElementById("inputPass").style.cssText = `
                border-bottom: 2px solid #4469B1;
                opacity: 1;
                `;
        document.querySelector("#nameFailed").style.display = "none";
        document.querySelector("#passFailed").style.display = "none";
        document.getElementById("inputText").classList.remove("input-failed");
        document.getElementById("inputPass").classList.remove("input-failed");
        document.querySelector(".link > a").style.color = "#4469B1";
        document.querySelector(".href").style.color = "#4469B1";
    }
        /* provisionally , should be removed / edited */

    return false;
};