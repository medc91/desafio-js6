pesoValue = document.querySelector("#pesoValue");
tipoCambio = document.querySelector("#tipoCambio");
fndBtn = document.querySelector("#fndBtn");
totalTxt = document.querySelector("#totalTxt");

const cambio = async () => {

    try {
        const response = await fetch(`https://mindicador.cl/api/${tipoCambio.value}`);
        const data = await response.json()
        const valorCambio = +data.serie[0].valor

        totalTxt.textContent = `Resultado: $ ${pesoValue.value / valorCambio}`
    } catch (e) {
        totalTxt.textContent = e.message
    }

}

fndBtn.addEventListener("click", () => {
    cambio()
})

