// ----------------- Promise.all()
// Функция Promise.all() возвращает then() только тогда, когда промис получит все результаты.

// ==========================================================
// В круглых скобках обязательно должен быть массив промисов.
// ==========================================================

// ----------------- Promise.race()
// Функция Promise.race() возвращает then() только для результата первого выполненного промиса.

// -------------- exchange ----------------
const inputText = document.querySelector(".input-text")
const valuteList = document.querySelector(".valute-list")
const getRates= document.querySelector(".get-rates")
const inputResult = document.querySelector(".input-result")

const symbol = document.querySelector(".symbol")


getRates.addEventListener("click", () =>{
    fetch("https://api.exchangerate.host/latest?base=KGS")
        .then(res => res.json())
         .then(data => inputResult.value = (inputText.value * data.rates[valuteList.value]).toFixed([2]))
    if(valuteList.value === "USD"){
         symbol.innerHTML = "<i class='bx bx-dollar' ></i>"
    }else if(valuteList.value === "EUR"){
         symbol.innerHTML = "<i class='bx bx-dollar' ></i>"
    }else if(valuteList.value === "RUB"){
         symbol.innerHTML = "<i class='bx bx-ruble' ></i>"
    }
})







