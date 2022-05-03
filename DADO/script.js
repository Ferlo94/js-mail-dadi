const button = document.getElementById("button")
const myNumber = 0;
const cpuNumber= 0;

button.addEventListener("click",

    function () {

        const myNumber = Math.floor(Math.random() * 6) + 1;
        console.log(myNumber);

        const cpuNumber = Math.floor(Math.random() * 6) + 1;
        console.log(cpuNumber);

        if(myNumber > cpuNumber) {
            console.log("VITTORIAAA")
        }
    }
);
