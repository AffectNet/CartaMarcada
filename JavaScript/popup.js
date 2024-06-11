
document.querySelector('.SobreAgencias').addEventListener('click', function () {
    var iframeContainer = document.getElementById('iframeContainer');
    var iframe = document.getElementById('myIframe');
    var framejogo = document.querySelector('#Frame');

    if (iframe) {
        // Desliga o iframe
        iframeContainer.removeChild(iframe);
        this.textContent = 'Sobre as Agências';
        framejogo.style.display = 'block';
    } else {
        // Liga o iframe
        var newIframe = document.createElement('iframe');
        newIframe.id = 'myIframe';
        newIframe.src = 'SobreAgencias_frame.html';
        iframeContainer.appendChild(newIframe);
        this.textContent = 'Voltar ao Jogo';
        framejogo.style.display = 'none';
    }
});