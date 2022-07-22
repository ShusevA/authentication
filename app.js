window.onload = () => {
    if (sessionStorage.getItem("settings") == "allOK") {
        let changeHeader = document.querySelector(".authentication__text");
        changeHeader.innerHTML = "Двухфакторная аутентификация включена";
        let finishIcon = document.querySelector(".authentication");
        finishIcon.classList.add("active");
        let button = document.querySelector(".authentication__button");
        button.classList.toggle("closeSettings");
        button.innerHTML = "Отключить";
        let formTwo = document.querySelector(".add__bot");
        formTwo.classList.add("active");
        sessionStorage.removeItem("settings");
    }
}


function Settings() {
    this.classList.add("active");
    this.setAttribute("disabled", true);
    let line = document.querySelector(".authentication__item")
    line.classList.add("active");
    let oneForm = document.querySelector(".add__app");
    oneForm.classList.add("active");
}
let elem = document.querySelector(".authentication__button");
elem.addEventListener("click", Settings);



function checkQRcode(event) {
    const nede = "530692";
    let input = event.target.value;
    if (event.target.value.length == 6) {
        if (input === nede) {
            let OKinput = document.querySelector(".add__app_qrCode");
            OKinput.classList.add("active");
            setTimeout(() => {
                let OKblock = document.querySelector("._icon-good");
                OKblock.classList.add("active");
                let OKtext = document.querySelector(".add__app_text");
                OKtext.classList.add("active");
                OKtext.innerHTML = "Омнидеск успешно добавлен в приложение для создания 2FA-кодов"; 
                document.querySelector("._icon-bad").style.display = "none";
                let btn1 = document.querySelector(".btn1");
                btn1.classList.add("active");
            }, 1000)
        } else {
            document.querySelector("._icon-bad").style.display = "block";
            document.querySelector(".btn1").classList.remove("active");

        }
    }
}
let QRcode = document.getElementById("qr-code");
QRcode.addEventListener("keyup", checkQRcode);



function showTwo(){
    let hiddenOne = document.querySelector(".add__app_action1");
    hiddenOne.classList.add("active");
    let showOne = document.querySelector(".add__app_wrapper");
    showOne.classList.add("active");
    document.querySelector(".add__app_data").style.display = "block";  
}
let btn = document.querySelector(".btn1");
btn.addEventListener("click", showTwo);



function myFunction() {
    var copyText = document.querySelector(".add__app_data");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText);
}



let blockThree = document.querySelector(".add__app_more");
blockThree.addEventListener("click", (e) => {
    let OKblock = document.querySelector(".good-two");
    OKblock.classList.add("active");
    let OKtext = document.querySelector(".text-two");
    OKtext.classList.add("active");
    OKtext.innerHTML = "Резервные коды доступа успешно сохранены";
    let hiddenOne = document.querySelector(".add__app_action2");
    hiddenOne.classList.add("active");
    let showOne = document.querySelector(".add__app_wrapper2");
    showOne.classList.add("active");
    e.preventDefault();
});



function checkQRcode2(event) {
    const nede = "530692";
    let input = event.target.value;
    if (event.target.value.length == 6) {
        if (input === nede) {
            let OKinput2 = document.querySelector(".qrCode-two");
            OKinput2.classList.add("active");
            let finish = document.querySelector(".finish");
            finish.classList.add("active");
            finish.removeAttribute("disabled");
            document.querySelector(".bad2").style.display = "none";
        } else {
            document.querySelector(".bad2").style.display = "block";
            let OKinput2 = document.querySelector(".qrCode-two");
            OKinput2.classList.remove("active");
            let finish = document.querySelector(".finish");
            finish.classList.remove("active");
            finish.setAttribute("disabled", true);
        }
    }
}
let QRcode2 = document.getElementById("qr-code2");
QRcode2.addEventListener("keyup", checkQRcode2);



function endSettings() {
    sessionStorage.setItem("settings", "allOK");
}
let end = document.querySelector(".finish")
end.addEventListener("click", endSettings);
