const button = document.getElementById("button")
const text = document.getElementById("text")
const myNumber = 0;
const cpuNumber= 0;

button.addEventListener("click",

    function () {

        const myNumber = Math.floor(Math.random() * 6) + 1;
        console.log(myNumber);

        const cpuNumber = Math.floor(Math.random() * 6) + 1;
        console.log(cpuNumber);

        if(myNumber > cpuNumber) {
            text.innerHTML = "VITTORIAAA!!!"
            text.classList.add("pink");
            console.log("VITTORIA")

        } else if (myNumber === cpuNumber) {
            text.innerHTML = "PARI ;-)"
            text.classList.add("pink");
            console.log("PAREGGIO")

        } else {
            text.innerHTML = "HAI PERSO.."
            text.classList.add("pink");
            console.log("SCONFITTA")
        }
    }
);
