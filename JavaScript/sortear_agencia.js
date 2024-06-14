var agencia = "";
const divEsquerda = document.querySelector('.divEsquerda');

function sortear_agencia() {
    if (divEsquerda) {
        var numeroSorteado = Math.floor(Math.random() * 3);

        // Adiciona 1 ao número sorteado para obter um número entre 1 e 3
        numeroSorteado += 1;

        if (numeroSorteado == 1) {
            agencia = 'Gestapo';
        }
        if (numeroSorteado == 2) {
            agencia = 'Lovra';
        }
        if (numeroSorteado == 3) {
            agencia = 'NKVD';
        }
        const logo_agencia = document.createElement('img');
        logo_agencia.className = "logo_agencia";
        logo_agencia.src = "../imgs/" + agencia + ".png"
        divEsquerda.appendChild(logo_agencia);
        sessionStorage.setItem('agencia', agencia);
    } else {

    }
}
sortear_agencia()