const mainEL = document.querySelector(".main");
const passwordEl = document.createElement("input");
const generateBtn = document.createElement("button");
const btnCopy = document.createElement("button");



passwordEl.classList.add("password")
generateBtn.classList.add("password-button")
btnCopy.classList.add("password-button")

passwordEl.placeholder = "Сгенеририй пароль"
generateBtn.textContent = "Сгенерировать пароль"
btnCopy.textContent = "Скапировать"

mainEL.appendChild(passwordEl)
mainEL.appendChild(btnCopy)
mainEL.appendChild(generateBtn)


btnCopy.addEventListener("click", () => {

    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(passwordEl.value);
})

generateBtn.addEventListener("click", () => {
    let password = generatePassword(12)

    

    passwordEl.value = password 

    // btnCopy.innerHTML = password

    console.log(password);


})

function generatePassword(passwordLength) {
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "!@#$%^&*()_+";

    const allChars = numberChars + upperChars + lowerChars + symbolChars;

    let randomString = ""


    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * allChars.length)

        randomString += allChars[randomNumber]

    }
    return randomString; 
}

