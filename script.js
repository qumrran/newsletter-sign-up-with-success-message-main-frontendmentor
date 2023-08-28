const block = document.querySelector(".block");
const popup = document.querySelector(".popup");

const emailInput = document.querySelector(".block__form__input");
const emailAlert = document.querySelector(".block__form__label__box__error");

const blockbtn = document.querySelector(".block__form__submit");
const popupbtn = document.querySelector(".popup__button");

const popupSpan = document.querySelector(".popup__description__email");

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

function changeBlockToPopup() {
    block.style.display = "none";
    popup.style.display = "block";
    emailInput.value = "";
}

function changePopUpToBlock() {
    block.style.display = "flex";
    popup.style.display = "none";
}

function submitEmail() {
    const email = emailInput.value;
    const postValidEmail = validateEmail(email.trim());

    if (postValidEmail) {
        emailAlert.style.display = "none";
        popupSpan.textContent = email;
        emailInput.style.backgroundColor = "white";
        emailInput.style.border = "1px solid grey"; 

        changeBlockToPopup();
    } else {
        emailAlert.style.display = "flex";
        emailInput.style.backgroundColor = "hsl(5, 100%, 95%)";
        emailInput.style.border = "2px solid hsl(4, 100%, 67%)"; 
    }
}

blockbtn.addEventListener("click", submitEmail);
popupbtn.addEventListener("click", changePopUpToBlock);
