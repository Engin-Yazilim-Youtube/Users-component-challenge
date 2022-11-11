let data = document.querySelector("#data")
let buton = document.querySelector("#buton")
let all = document.querySelector("#all")

// Cards
let nichols = document.querySelector("#nichols")
let insel = document.querySelector("#insel")
let rice = document.querySelector("#rice")
let brower = document.querySelector("#brower")
let campbell = document.querySelector("#campbell")
let morin = document.querySelector("#morin")

// Container - Components
let usersBottom = document.querySelector(".bottom")
let usersTop = document.querySelector(".top")


// Enter key
data.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("buton").click();
    }
});

all.addEventListener("click", allClick)

function allClick(){
    usersBottom.style.display = "flex"
    usersTop.style.display = "flex"
    nichols.style.display = "flex"
    insel.style.display = "flex"
    rice.style.display = "flex"
    brower.style.display = "flex"
    campbell.style.display = "flex"
    morin.style.display = "flex"

    data.value = ""
}


buton.addEventListener("click", butonClick)

function butonClick() {
    if (data.value.length > 0) {
        let array = ["lelah nichols", "engin insel", "annie rice", "robert brower", "amy campbell", "anthony morin"];
        for (let i = 0; i < array.length; i++) {
            if (data.value === array[0]) {
                nichols.style.display = "flex"
                insel.style.display = "none"
                rice.style.display = "none"
                usersBottom.style.display = "none"
            }
            else if (data.value === array[1]) {
                nichols.style.display = "none"
                insel.style.display = "flex"
                rice.style.display = "none"
                usersBottom.style.display = "none"
            }
            else if (data.value === array[2]) {
                nichols.style.display = "none"
                insel.style.display = "none"
                rice.style.display = "flex"
                usersBottom.style.display = "none"
            }
            else if (data.value === array[3]) {
                usersTop.style.display = "none"
                brower.style.display = "flex"
                campbell.style.display = "none"
                morin.style.display = "none"
            }
            else if (data.value === array[4]) {
                usersTop.style.display = "none"
                brower.style.display = "none"
                campbell.style.display = "flex"
                morin.style.display = "none"
            }
            else if (data.value === array[5]) {
                usersTop.style.display = "none"
                brower.style.display = "none"
                campbell.style.display = "none"
                morin.style.display = "flex"
            }
            else {
                alert("Data Not Found!")
            }
            break
        }
    }
    else {
        alert("Enter Data")
    }
}